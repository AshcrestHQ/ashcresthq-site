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
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchUpdates();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20 pl-6 border-l border-primary/30"
      >
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">Engineering Log</h1>
        <p className="text-xl text-gray-400 font-medium leading-loose">Live stream of development updates directly from GitHub.</p>
      </motion.div>

      <div className="flex flex-col gap-12 min-h-[400px]">
        {loading && (
          <div className="text-left py-20 text-gray-500 animate-pulse font-medium">
            Initializing connection to GitHub...
          </div>
        )}
        
        {error && (
          <div className="p-8 text-red-400 bg-red-900/10 rounded-3xl border border-red-500/20 font-medium">
            Error loading updates from GitHub. Please try again later.
          </div>
        )}

        {!loading && !error && events.length === 0 && (
          <div className="p-12 text-gray-500 glass-card-organic text-center font-medium">
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
              <div className="flex flex-col gap-3 mt-6">
                {event.payload.commits?.slice(0, 3).map((c: any) => (
                  <div key={c.sha} className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
                    <span className="text-primary font-mono text-xs mt-0.5 shrink-0 bg-primary/10 px-2 py-1 rounded-md">{c.sha.substring(0, 7)}</span>
                    <span className="text-gray-300 text-[15px] leading-relaxed line-clamp-2">{c.message.split('\n')[0]}</span>
                  </div>
                ))}
                {commitCount > 3 && (
                  <div className="text-xs text-gray-500 font-bold pl-2 mt-2 uppercase tracking-widest">
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
            contentNode = <p className="text-gray-400 text-[15px] leading-loose mt-4">{event.payload.pull_request?.body || 'No description provided.'}</p>;
          } else if (event.type === 'IssuesEvent') {
            type = 'Issue';
            Icon = CircleDot;
            color = 'text-green-400';
            bg = 'bg-green-500/10';
            title = `${event.payload.action} issue #${event.payload.issue?.number}: ${event.payload.issue?.title}`;
            contentNode = <p className="text-gray-400 text-[15px] leading-loose mt-4">{event.payload.issue?.body || 'No description provided.'}</p>;
          } else if (event.type === 'CreateEvent') {
            type = 'Created';
            Icon = CircleDot; // or some other icon
            color = 'text-purple-400';
            bg = 'bg-purple-500/10';
            const refType = event.payload.ref_type; // 'repository', 'branch', or 'tag'
            title = `Created ${refType} ${event.payload.ref || ''}`;
            if (refType === 'repository') title = 'Created new repository';
            contentNode = <p className="text-gray-400 text-[15px] leading-loose mt-4">{event.payload.description || `A new ${refType} was created.`}</p>;
          } else if (event.type === 'ReleaseEvent') {
            type = 'Release';
            Icon = CircleDot;
            color = 'text-yellow-400';
            bg = 'bg-yellow-500/10';
            title = `Published release ${event.payload.release?.name || event.payload.release?.tag_name}`;
            contentNode = <p className="text-gray-400 text-[15px] leading-loose mt-4">{event.payload.release?.body || 'No release notes provided.'}</p>;
          }

          const isOffset = i % 2 !== 0;

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
              className={`glass-card-organic p-8 md:p-12 group hover:border-white/20 transition-all cursor-pointer relative overflow-hidden ${isOffset ? 'md:ml-12' : 'md:mr-12'}`}
              onClick={() => window.open(`https://github.com/${event.repo?.name || 'AshcrestHQ'}`, '_blank')}
            >
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1.5 rounded-md text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 ${color} ${bg}`}>
                    <Icon className="w-4 h-4" />
                    {type}
                  </span>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">{date}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-400 font-medium">by {event.actor.login}</span>
                  {event.repo?.name && <span className="text-[10px] text-gray-500 font-mono mt-1 font-bold">{event.repo.name.replace('AshcrestHQ/', '')}</span>}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-2 text-white group-hover:text-primary transition-colors tracking-tight">{title}</h3>
              {contentNode}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
