"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, CircleDot } from "lucide-react";

interface GithubEvent {
  id: string;
  type: string;
  actor: { login: string };
  created_at: string;
  payload: any;
  repo?: { name: string; url: string; };
}

export default function Blog() {
  const [events, setEvents] = useState<GithubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchUpdates() {
      try {
        const res = await fetch(`https://api.github.com/orgs/AshcrestHQ/events`);
        if (!res.ok) throw new Error("API Error");
        
        const data = await res.json();
        const relevant = data.filter((e: any) => 
          ['PushEvent', 'PullRequestEvent', 'IssuesEvent', 'CreateEvent', 'ReleaseEvent'].includes(e.type)
        ).slice(0, 10);
        
        // Fetch missing commit details for PushEvents
        await Promise.all(relevant.map(async (event: any) => {
          if (event.type === 'PushEvent' && (!event.payload.commits || event.payload.commits.length === 0) && event.payload.head) {
            try {
              const commitRes = await fetch(`https://api.github.com/repos/${event.repo.name}/commits/${event.payload.head}`);
              if (commitRes.ok) {
                const commitData = await commitRes.json();
                event.payload.commits = [{
                  sha: commitData.sha,
                  message: commitData.commit.message,
                  url: commitData.html_url
                }];
              }
            } catch (e) {
              console.error("Failed to fetch commit detail", e);
            }
          }
        }));
        
        setEvents(relevant);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchUpdates();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl font-bold mb-4">Repository Updates</h1>
        <p className="text-gray-400">Live stream of development updates directly from GitHub.</p>
      </motion.div>

      <div className="flex flex-col gap-6 min-h-[400px]">
        {loading && (
          <div className="text-center py-20 text-gray-500 animate-pulse">
            Initializing connection to GitHub...
          </div>
        )}
        
        {error && (
          <div className="text-center py-20 text-red-400 bg-red-900/10 rounded-2xl border border-red-500/20">
            Error loading updates from GitHub. Please try again later.
          </div>
        )}

        {!loading && !error && events.length === 0 && (
          <div className="text-center py-20 text-gray-500 glass-card rounded-3xl">
            No recent updates found.
          </div>
        )}

        {events.map((event, i) => {
          const date = new Date(event.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
          
          let title = '';
          let type = '';
          let Icon = GitCommit;
          let color = 'text-primary';
          let bg = 'bg-primary/10';
          let contentNode = null;

          if (event.type === 'PushEvent') {
            type = 'Commit';
            const branch = event.payload.ref?.replace('refs/heads/', '');
            const commitCount = event.payload.commits?.length || 0;
            title = `Pushed ${commitCount} commit${commitCount !== 1 ? 's' : ''} to ${branch}`;
            
            contentNode = (
              <div className="flex flex-col gap-2 mt-3">
                {event.payload.commits?.slice(0, 3).map((c: any) => (
                  <div key={c.sha} className="flex items-start gap-3 bg-black/20 rounded-lg p-3 border border-white/5 hover:border-white/10 transition-colors">
                    <span className="text-primary font-mono text-xs mt-0.5 shrink-0 bg-primary/10 px-1.5 py-0.5 rounded">{c.sha.substring(0, 7)}</span>
                    <span className="text-gray-300 text-sm leading-tight line-clamp-2">{c.message.split('\\n')[0]}</span>
                  </div>
                ))}
                {commitCount > 3 && (
                  <div className="text-xs text-gray-500 font-medium pl-1 mt-1">
                    + {commitCount - 3} more commit{commitCount - 3 !== 1 ? 's' : ''}...
                  </div>
                )}
              </div>
            );
          } else if (event.type === 'PullRequestEvent') {
            type = 'Pull Request';
            Icon = GitPullRequest;
            color = 'text-blue-400';
            bg = 'bg-blue-500/10';
            title = `${event.payload.action} PR #${event.payload.pull_request?.number}: ${event.payload.pull_request?.title}`;
            contentNode = <p className="text-gray-400 text-sm line-clamp-2">{event.payload.pull_request?.body || 'No description provided.'}</p>;
          } else if (event.type === 'IssuesEvent') {
            type = 'Issue';
            Icon = CircleDot;
            color = 'text-green-400';
            bg = 'bg-green-500/10';
            title = `${event.payload.action} issue #${event.payload.issue?.number}: ${event.payload.issue?.title}`;
            contentNode = <p className="text-gray-400 text-sm line-clamp-2">{event.payload.issue?.body || 'No description provided.'}</p>;
          } else if (event.type === 'CreateEvent') {
            type = 'Created';
            Icon = CircleDot; // or some other icon
            color = 'text-purple-400';
            bg = 'bg-purple-500/10';
            const refType = event.payload.ref_type; // 'repository', 'branch', or 'tag'
            title = `Created ${refType} ${event.payload.ref || ''}`;
            if (refType === 'repository') title = 'Created new repository';
            contentNode = <p className="text-gray-400 text-sm line-clamp-2">{event.payload.description || `A new ${refType} was created.`}</p>;
          } else if (event.type === 'ReleaseEvent') {
            type = 'Release';
            Icon = CircleDot;
            color = 'text-yellow-400';
            bg = 'bg-yellow-500/10';
            title = `Published release ${event.payload.release?.name || event.payload.release?.tag_name}`;
            contentNode = <p className="text-gray-400 text-sm line-clamp-2">{event.payload.release?.body || 'No release notes provided.'}</p>;
          }

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl group hover:border-white/20 transition-all cursor-pointer relative overflow-hidden"
              onClick={() => window.open(`https://github.com/${event.repo?.name || 'AshcrestHQ'}`, '_blank')}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-1 ${color} ${bg}`}>
                    <Icon className="w-3 h-3" />
                    {type}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">{date}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-400">by {event.actor.login}</span>
                  {event.repo?.name && <span className="text-[10px] text-gray-600 font-mono mt-1">{event.repo.name.replace('AshcrestHQ/', '')}</span>}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
              {contentNode}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
