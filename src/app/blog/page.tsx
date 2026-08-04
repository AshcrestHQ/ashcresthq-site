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
          ['PushEvent', 'PullRequestEvent', 'IssuesEvent'].includes(e.type)
        ).slice(0, 10);
        
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
          let desc = '';
          let type = '';
          let Icon = GitCommit;
          let color = 'text-primary';
          let bg = 'bg-primary/10';

          if (event.type === 'PushEvent') {
            type = 'Commit';
            title = `Pushed to ${event.payload.ref?.replace('refs/heads/', '')}`;
            desc = event.payload.commits?.map((c: any) => c.message).join(' • ');
          } else if (event.type === 'PullRequestEvent') {
            type = 'Pull Request';
            Icon = GitPullRequest;
            color = 'text-blue-400';
            bg = 'bg-blue-500/10';
            title = `${event.payload.action} PR #${event.payload.pull_request?.number}: ${event.payload.pull_request?.title}`;
            desc = event.payload.pull_request?.body || 'No description provided.';
          } else if (event.type === 'IssuesEvent') {
            type = 'Issue';
            Icon = CircleDot;
            color = 'text-green-400';
            bg = 'bg-green-500/10';
            title = `${event.payload.action} issue #${event.payload.issue?.number}: ${event.payload.issue?.title}`;
            desc = event.payload.issue?.body || 'No description provided.';
          }

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl group hover:border-white/20 transition-all cursor-pointer relative overflow-hidden"
              onClick={() => window.open('https://github.com/AshcrestHQ', '_blank')}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider flex items-center gap-1 ${color} ${bg}`}>
                    <Icon className="w-3 h-3" />
                    {type}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">{date}</span>
                </div>
                <span className="text-xs text-gray-400">by {event.actor.login}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
