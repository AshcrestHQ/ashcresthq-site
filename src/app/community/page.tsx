"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users2, MessageSquare, Terminal, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

export default function Community() {
  const [discordMembers, setDiscordMembers] = useState<number | null>(null);
  const [githubStars, setGithubStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const discordRes = await fetch("https://discord.com/api/guilds/1533786147279339540/widget.json");
        if (discordRes.ok) {
          const discordData = await discordRes.json();
          setDiscordMembers(discordData.presence_count);
        }

        const githubRes = await fetch("https://api.github.com/orgs/AshcrestHQ");
        if (githubRes.ok) {
          const githubData = await githubRes.json();
          setGithubStars(githubData.public_repos);
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
    { label: "Active Projects", value: githubStars !== null ? githubStars : "---", icon: Terminal, color: "text-amber-400", bg: "bg-amber-500/10" },
    { label: "Lines Pushed", value: "24.5k", icon: MessageSquare, color: "text-green-400", bg: "bg-green-500/10" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="text-center max-w-4xl mx-auto mb-24 mt-10"
      >
        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter relative inline-block">
          The Network.
          <svg className="absolute w-full h-4 -bottom-1 md:-bottom-2 left-0 text-primary opacity-80" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M2 6.5C45.5 2.5 120 -1.5 198 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="drop-shadow-[0_2px_4px_rgba(224,123,57,0.5)]"/>
          </svg>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium">
          AshcrestHQ is distributed. We collaborate in the open, build ruthless infrastructure, and welcome engineers who actually want to ship things.
        </p>
        <div className="flex justify-center gap-6 mt-12">
          <motion.div whileHover={{ scale: 1.05, rotate: -2 }} whileTap={{ scale: 0.95 }}>
            <Link href="https://discord.gg/35ubQnrzD" className="bg-white text-black font-black px-10 py-4 rounded-3xl hover:bg-gray-200 transition-all shadow-[0_10px_30px_-10px_rgba(255,255,255,0.4)]">
              Join Discord
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }}>
            <Link href="/docs" className="glass-button text-white font-bold px-10 py-4 rounded-3xl flex items-center gap-2 border-white/20">
              Read Guidelines
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Live Stats Bento Box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
      >
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.label} 
            whileHover={{ y: -8, scale: 1.02 }}
            className={`glass-card-organic p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group border-t-white/10`}
          >
            <div className={`absolute top-0 w-full h-1.5 ${stat.bg} group-hover:h-2 transition-all`}></div>
            <div className={`p-5 rounded-3xl mb-6 rotate-[-5deg] group-hover:rotate-0 transition-transform ${stat.bg}`}>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <div className="text-5xl font-black mb-3 font-mono tabular-nums tracking-tighter">
              {loading ? (
                <div className="h-12 w-24 bg-white/10 rounded animate-pulse mx-auto"></div>
              ) : (
                stat.value
              )}
            </div>
            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Aegis Integration Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="glass-card-organic rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden mb-20"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
        
        <div className="flex-1 relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-xl bg-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-8 border border-primary/20">
            <Shield className="w-4 h-4" />
            Automated Bouncer
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight leading-tight">Meet Aegis.</h2>
          <p className="text-gray-300 mb-8 leading-relaxed text-lg font-medium">
            Our Discord isn't just a chat room; it's wired directly into our production pipelines. Aegis, our custom-built bot, handles the noise so we can focus on code.
          </p>
          <ul className="space-y-5 text-base text-gray-300 font-medium">
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-primary shadow-[0_0_10px_rgba(224,123,57,0.8)]"></div>
              Automated code reviews via GitHub webhooks.
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-primary shadow-[0_0_10px_rgba(224,123,57,0.8)]"></div>
              Zero-tolerance automated spam destruction.
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-primary shadow-[0_0_10px_rgba(224,123,57,0.8)]"></div>
              Role-based access dynamically synced with repository permissions.
            </li>
          </ul>
        </div>
        
        <div className="flex-1 w-full relative z-10 perspective-1000">
          <motion.div 
            whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
            className="glass-card-organic p-8 rounded-3xl border border-primary/30 shadow-[0_20px_50px_-10px_rgba(224,123,57,0.2)] bg-black/40 backdrop-blur-3xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10 relative z-10">
              <Shield className="w-12 h-12 text-primary p-2.5 bg-primary/20 rounded-2xl rotate-[-5deg]" />
              <div>
                <div className="font-black text-white flex items-center gap-3 text-lg">
                  Aegis <span className="bg-[#5865F2] text-white text-[10px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">Bot</span>
                </div>
                <div className="text-xs text-gray-500 font-bold mt-1">Today at 14:02</div>
              </div>
            </div>
            <div className="pl-4 border-l-4 border-primary space-y-3 relative z-10">
              <div className="text-base font-black text-primary">Deployment Successful 🚀</div>
              <div className="text-sm text-gray-300 font-medium">ashcresthq-site has been deployed to production.</div>
              <div className="text-xs text-gray-500 font-mono mt-4 font-bold bg-white/5 inline-block px-2 py-1 rounded">Commit: 48a52ee • Branch: main</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
