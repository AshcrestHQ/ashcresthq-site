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
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-left max-w-4xl mb-16 mt-8 md:ml-12"
      >
        <h1 className="text-5xl md:text-[6rem] font-black mb-10 tracking-tighter relative inline-block text-white leading-none">
          The Network.
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 leading-loose font-medium max-w-2xl">
          AshcrestHQ is distributed. We collaborate in the open, build ruthless infrastructure, and welcome engineers who actually want to ship things.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 mt-12">
          <Link href="https://discord.gg/35ubQnrzD" className="bg-white text-black text-sm font-bold px-10 py-5 rounded-full hover:bg-gray-200 transition-colors shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)] text-center flex items-center justify-center gap-3">
            Join Discord
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/docs" className="text-gray-400 hover:text-white text-sm font-bold px-10 py-5 flex items-center justify-center transition-colors">
            Read Guidelines
          </Link>
        </div>
      </motion.div>

      {/* Live Stats Offset Box */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="flex flex-col md:flex-row items-stretch justify-center gap-6 mb-16 relative z-10"
      >
        {stats.map((stat, i) => (
          <div 
            key={stat.label} 
            className={`glass-card-organic p-12 flex-1 flex flex-col items-start justify-center relative overflow-hidden group border-t-white/10 ${i === 1 ? 'md:-mt-12 md:mb-12' : ''} ${i === 2 ? 'md:-mt-24 md:mb-24' : ''}`}
          >
            <div className={`absolute top-0 left-0 bottom-0 w-1.5 ${stat.bg} group-hover:w-2 transition-all`}></div>
            <div className={`p-4 rounded-2xl mb-8 ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="text-4xl md:text-5xl font-black mb-4 font-mono tabular-nums tracking-tighter text-white">
              {loading ? (
                <div className="h-10 w-20 bg-white/10 rounded animate-pulse"></div>
              ) : (
                stat.value
              )}
            </div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Aegis Integration Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card-organic rounded-[2rem] p-16 md:p-24 flex flex-col lg:flex-row items-center gap-20 relative overflow-hidden mb-6"
      >
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -ml-32 -mt-32 pointer-events-none"></div>
        
        <div className="flex-1 relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-widest mb-10 border border-primary/20">
            <Shield className="w-4 h-4" />
            Automated Bouncer
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight leading-none text-white">Meet Aegis.</h2>
          <p className="text-gray-400 mb-10 leading-loose text-lg font-medium">
            Our Discord isn't just a chat room; it's wired directly into our production pipelines. Aegis, our custom-built bot, handles the noise so we can focus on code.
          </p>
          <ul className="space-y-6 text-[15px] text-gray-300 font-medium">
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 mt-2 rounded-full bg-primary shrink-0"></div>
              Automated code reviews via GitHub webhooks.
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 mt-2 rounded-full bg-primary shrink-0"></div>
              Zero-tolerance automated spam destruction.
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 mt-2 rounded-full bg-primary shrink-0"></div>
              Role-based access dynamically synced with repository permissions.
            </li>
          </ul>
        </div>
        
        <div className="flex-1 w-full relative z-10 lg:-mr-12">
          <div className="glass-card-organic p-10 md:p-12 rounded-3xl border border-primary/20 bg-black/40 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
            <div className="flex items-center gap-5 mb-10 pb-8 border-b border-white/5 relative z-10">
              <Shield className="w-10 h-10 text-primary p-2 bg-primary/10 rounded-xl" />
              <div>
                <div className="font-black text-white flex items-center gap-3 text-lg">
                  Aegis <span className="bg-[#5865F2] text-white text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Bot</span>
                </div>
                <div className="text-[11px] text-gray-500 font-bold mt-2 uppercase tracking-widest">Today at 14:02</div>
              </div>
            </div>
            <div className="pl-6 border-l-2 border-primary space-y-4 relative z-10">
              <div className="text-lg font-black text-primary tracking-tight">Deployment Successful 🚀</div>
              <div className="text-[15px] text-gray-300 font-medium leading-relaxed">ashcresthq-site has been deployed to production.</div>
              <div className="text-[11px] text-gray-400 font-mono mt-6 font-bold bg-white/5 inline-block px-3 py-1.5 rounded-lg border border-white/5 tracking-wider">Commit: 48a52ee • Branch: main</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
