"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users2, MessageSquare, Star, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

export default function Community() {
  const [discordMembers, setDiscordMembers] = useState<number | null>(null);
  const [githubStars, setGithubStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch Discord stats
        const discordRes = await fetch("https://discord.com/api/guilds/1533786147279339540/widget.json");
        if (discordRes.ok) {
          const discordData = await discordRes.json();
          setDiscordMembers(discordData.presence_count);
        }

        // Fetch Github org stats (public repos)
        const githubRes = await fetch("https://api.github.com/orgs/AshcrestHQ");
        if (githubRes.ok) {
          const githubData = await githubRes.json();
          setGithubStars(githubData.public_repos); // Using repos as a proxy stat for now
        }
      } catch (err) {
        console.error("Failed to fetch community stats", err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchStats();
    const interval = setInterval(fetchStats, 60000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Active Members", value: discordMembers !== null ? discordMembers : "---", icon: Users2, color: "text-blue-400", bg: "bg-blue-500/10" },
    { label: "Active Projects", value: githubStars !== null ? githubStars : "---", icon: Star, color: "text-amber-400", bg: "bg-amber-500/10" },
    { label: "Lines Pushed", value: "24.5k", icon: MessageSquare, color: "text-green-400", bg: "bg-green-500/10" }, // Simulated
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Network</h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          The AshcrestHQ collective is distributed across the globe. We collaborate in the open, build infrastructure for the future, and welcome engineers of all skill levels.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Link href="https://discord.gg/35ubQnrzD" className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Join Discord
          </Link>
          <Link href="/docs" className="glass-button text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2">
            Read Guidelines
          </Link>
        </div>
      </motion.div>

      {/* Live Stats Bento Box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
      >
        {stats.map((stat, i) => (
          <div key={stat.label} className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className={`absolute top-0 w-full h-1 ${stat.bg}`}></div>
            <div className={`p-4 rounded-2xl mb-4 ${stat.bg}`}>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <div className="text-4xl font-extrabold mb-2 font-mono tabular-nums">
              {loading ? (
                <div className="h-10 w-24 bg-white/10 rounded animate-pulse mx-auto"></div>
              ) : (
                stat.value
              )}
            </div>
            <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Aegis Integration Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="flex-1 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <Shield className="w-4 h-4" />
            Moderation Core
          </div>
          <h2 className="text-3xl font-bold mb-6">Meet Aegis.</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Our Discord isn't just a chat room; it's integrated directly into our CI/CD pipelines. Aegis, our custom-built bot, handles automated issue triage, deployment notifications, and keeps the signal-to-noise ratio high.
          </p>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              Automated code reviews via GitHub webhooks
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              Zero-tolerance automated spam filtering
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              Role-based access synced with repository permissions
            </li>
          </ul>
        </div>
        
        <div className="flex-1 w-full relative z-10">
          <div className="glass-card p-6 rounded-2xl border border-primary/20 shadow-[0_0_30px_rgba(224,123,57,0.1)]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
              <Shield className="w-10 h-10 text-primary p-2 bg-primary/10 rounded-xl" />
              <div>
                <div className="font-bold text-white flex items-center gap-2">
                  Aegis <span className="bg-[#5865F2] text-white text-[10px] px-1.5 rounded font-semibold uppercase">Bot</span>
                </div>
                <div className="text-xs text-gray-500">Today at 14:02</div>
              </div>
            </div>
            <div className="pl-2 border-l-2 border-primary space-y-2">
              <div className="text-sm font-semibold text-primary">Deployment Successful 🚀</div>
              <div className="text-sm text-gray-300">ashcresthq-site has been deployed to production.</div>
              <div className="text-xs text-gray-500 font-mono mt-2">Commit: 48a52ee • Branch: main</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
