"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Shield, Terminal, Rocket, Code2, BookOpen } from "lucide-react";
import Link from "next/link";
import { timeAgo } from "@/lib/timeAgo";

type Project = {
  name: string;
  repoName?: string;
  category: string;
  tech: string[];
  icon: any;
  color: string;
  description: string;
  link: string;
  updated: string;
  status?: string;
  install?: string;
};

const INITIAL_PROJECTS: Project[] = [
  {
    name: "Aegis",
    repoName: "Aegis",
    category: "Bot",
    tech: ["Rust", "PostgreSQL", "gRPC"],
    icon: Shield,
    color: "blue",
    description: "Our custom moderation bot. We got tired of spam, so we built a zero-tolerance bouncer.",
    link: "https://github.com/AshcrestHQ/aegis",
    updated: "2h ago"
  },
  {
    name: "Janus",
    repoName: "Janus",
    category: "OS",
    tech: ["TypeScript", "React", "Tailwind"],
    icon: Terminal,
    color: "primary",
    description: "The core operating environment. It's fast, it's loud, and it runs everywhere.",
    link: "https://github.com/AshcrestHQ/janus",
    updated: "1d ago"
  },
  {
    name: "Holocron",
    repoName: "Holocron",
    category: "Tools",
    tech: [],
    icon: Code2,
    color: "primary",
    description: "A learn-by-doing CLI teaching security fundamentals and open source contribution skills side by side — gets you from zero to ready-to-PR on Janus or Aegis.",
    link: "https://github.com/AshcrestHQ/Holocron",
    updated: "2d ago",
    install: "pip install -e . && holocron list"
  }
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [techFilter, setTechFilter] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);

  useEffect(() => {
    async function fetchTimestamps() {
      const cacheKey = "ashcresthq_repos_timestamps_v3";
      const cached = sessionStorage.getItem(cacheKey);
      
      let timestampsMap: Record<string, string> = {};

      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < 3600 * 1000) {
          timestampsMap = parsed.data;
          setProjects(INITIAL_PROJECTS.map(p => ({
            ...p,
            updated: timestampsMap[p.repoName || ""] ? timeAgo(timestampsMap[p.repoName || ""]) : p.updated
          })));
          return;
        }
      }

      await Promise.all(
        INITIAL_PROJECTS.map(async (p) => {
          if (!p.repoName) return;
          try {
            const res = await fetch(`https://api.github.com/repos/AshcrestHQ/${p.repoName}`);
            if (res.ok) {
              const data = await res.json();
              if (data.pushed_at) {
                timestampsMap[p.repoName] = data.pushed_at;
              }
            }
          } catch (e) {
            console.error("Failed to fetch timestamp for:", p.repoName, e);
          }
        })
      );
      
      sessionStorage.setItem(cacheKey, JSON.stringify({
        timestamp: Date.now(),
        data: timestampsMap
      }));
      
      setProjects(INITIAL_PROJECTS.map(p => ({
        ...p,
        updated: timestampsMap[p.repoName || ""] ? timeAgo(timestampsMap[p.repoName || ""]) : p.updated
      })));
    }
    fetchTimestamps();
  }, []);

  const categories = ["All Projects", "Bots", "OS", "Tools", "Libraries"];

  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = p.tech.some(t => t.toLowerCase().includes(techFilter.toLowerCase()));
    const matchesCat = activeCategory === "all" || activeCategory.toLowerCase() === p.category.toLowerCase() + "s";
    return matchesSearch && (techFilter === "" || matchesTech) && (activeCategory === "all" || p.category.toLowerCase().startsWith(activeCategory.toLowerCase().slice(0, -1)));
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24 mt-12 pl-6 md:pl-10 border-l border-primary/30 max-w-2xl"
      >
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">The Arsenal</h1>
        <p className="text-xl text-gray-400 font-medium leading-loose">Everything we've built, open sourced, and shipped to production. Poke around.</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-20 pb-8 border-b border-white/10">
        <div className="flex gap-4 overflow-x-auto w-full lg:w-auto pb-4 lg:pb-0 scrollbar-hide">
          {categories.map(cat => (
            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              key={cat}
              onClick={() => setActiveCategory(cat === "All Projects" ? "all" : cat)}
              className={`px-6 py-3 rounded-full text-[13px] font-bold whitespace-nowrap transition-colors ${
                (activeCategory === "all" && cat === "All Projects") || activeCategory === cat
                  ? "bg-primary text-black"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-64">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Tech stack..."
              value={techFilter}
              onChange={(e) => setTechFilter(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-[13px] font-medium focus:outline-none focus:border-primary/40 transition-colors focus:bg-white/10 text-white"
            />
          </div>
          <div className="relative flex-1 lg:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search repo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-[13px] font-medium focus:outline-none focus:border-primary/40 transition-colors focus:bg-white/10 text-white"
            />
          </div>
        </div>
      </div>

      <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 pb-20">
        <AnimatePresence>
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.5, delay: i * 0.05 }}
              className={`glass-card-organic p-6 md:p-10 cursor-pointer group flex flex-col relative overflow-hidden break-inside-avoid ${
                project.status ? 'border-dashed border-gray-600/30 opacity-60 hover:opacity-100' : `border-t-${project.color === 'blue' ? 'blue-500' : project.color === 'primary' ? 'primary' : 'gray-400'}/20`
              }`}
              onClick={() => window.location.href = project.link}
            >
              {project.color === 'blue' && <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>}
              {project.color === 'primary' && <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>}
              
              <div className="relative z-10 flex justify-between items-start mb-10">
                <div className="flex items-center gap-5">
                  <project.icon className={`w-7 h-7 ${project.color === 'blue' ? 'text-blue-400' : project.color === 'primary' ? 'text-primary' : 'text-gray-400'}`} />
                  <h3 className="text-2xl font-black tracking-tight text-white">{project.name}</h3>
                </div>
                <span className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-bold uppercase tracking-widest text-gray-400">{project.category}</span>
              </div>

              {project.status ? (
                <div className="flex-grow flex items-center justify-center relative z-10 py-12">
                  <span className="px-5 py-2.5 bg-black/40 border border-white/5 rounded-xl text-xs font-black uppercase tracking-widest text-red-400/80">{project.status}</span>
                </div>
              ) : (
                <p className="text-gray-400 text-[15px] mb-12 flex-grow font-medium relative z-10 leading-loose">{project.description}</p>
              )}

              {project.install && (
                <div className="mb-6 relative z-10">
                  <code className="block w-full bg-black/30 border border-white/10 rounded-lg p-3 text-xs text-gray-300 font-mono overflow-x-auto whitespace-pre">
                    {project.install}
                  </code>
                </div>
              )}

              {!project.status && (
                <div className="flex flex-wrap gap-2 mb-10 mt-auto relative z-10">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1.5 bg-white/5 rounded-md text-[11px] font-bold text-gray-300 tracking-wider uppercase">{t}</span>
                  ))}
                </div>
              )}

              <div className="flex justify-between items-end pt-6 border-t border-white/10 relative z-10">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-4 text-[11px] text-gray-500 font-bold uppercase tracking-widest">
                    <span>Updated {project.updated}</span>
                  </div>
                  {project.name === 'Aegis' && (
                    <div className="flex gap-3 text-[10px] font-bold uppercase tracking-widest mt-1">
                      <Link href="/aegis/privacy" className="text-gray-500 hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>Privacy Policy</Link>
                      <span className="text-gray-700">•</span>
                      <Link href="/aegis/terms" className="text-gray-500 hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>Terms of Service</Link>
                    </div>
                  )}
                </div>
                <div className="flex gap-4 text-gray-400 self-end">
                  <BookOpen className="w-5 h-5 hover:text-white transition-colors" />
                  <Code2 className="w-5 h-5 hover:text-white transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
