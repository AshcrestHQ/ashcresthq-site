"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Shield, Terminal, Rocket, Code2, BookOpen } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    name: "Aegis",
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
    category: "OS",
    tech: ["TypeScript", "React", "Tailwind"],
    icon: Terminal,
    color: "primary",
    description: "The core operating environment. It's fast, it's loud, and it runs everywhere.",
    link: "https://github.com/AshcrestHQ/janus",
    updated: "1d ago"
  },
  {
    name: "Project Helios",
    category: "Tools",
    tech: [],
    icon: Rocket,
    color: "gray",
    description: "Something massive is brewing in the dark. We aren't ready to talk about it yet.",
    link: "https://github.com/AshcrestHQ/helios",
    status: "REDACTED",
    updated: "5h ago"
  }
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [techFilter, setTechFilter] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["All Projects", "Bots", "OS", "Tools", "Libraries"];

  const filteredProjects = PROJECTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = p.tech.some(t => t.toLowerCase().includes(techFilter.toLowerCase()));
    const matchesCat = activeCategory === "all" || activeCategory.toLowerCase() === p.category.toLowerCase() + "s";
    return matchesSearch && (techFilter === "" || matchesTech) && (activeCategory === "all" || p.category.toLowerCase().startsWith(activeCategory.toLowerCase().slice(0, -1)));
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="mb-16 mt-8 pl-4 border-l-4 border-primary/50"
      >
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">The Arsenal.</h1>
        <p className="text-xl text-gray-400 max-w-2xl font-medium leading-relaxed">Everything we've built, open sourced, and shipped to production. Poke around.</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-16 pb-8 border-b border-white/5">
        <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === "All Projects" ? "all" : cat)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-all ${
                (activeCategory === "all" && cat === "All Projects") || activeCategory === cat
                  ? "bg-primary text-black shadow-[0_5px_15px_rgba(224,123,57,0.3)]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex gap-4 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-64">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Tech stack..."
              value={techFilter}
              onChange={(e) => setTechFilter(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-sm font-medium focus:outline-none focus:border-primary/50 transition-all focus:bg-black/40"
            />
          </div>
          <div className="relative flex-1 lg:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search repo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-sm font-medium focus:outline-none focus:border-primary/50 transition-all focus:bg-black/40"
            />
          </div>
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.02, rotateX: 2 }}
              style={{ perspective: "1000px" }}
              className={`glass-card-organic p-8 cursor-pointer group flex flex-col relative overflow-hidden ${
                project.status ? 'border-dashed border-gray-600/50 opacity-60 hover:opacity-100' : `border-t-${project.color === 'blue' ? 'blue-500' : project.color === 'primary' ? 'primary' : 'gray-400'}/30`
              }`}
              onClick={() => window.location.href = project.link}
            >
              {project.color === 'blue' && <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[50px] -mr-16 -mt-16 group-hover:bg-blue-500/20 transition-all duration-700"></div>}
              {project.color === 'primary' && <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[50px] -mr-16 -mt-16 group-hover:bg-primary/20 transition-all duration-700"></div>}
              
              <div className="relative z-10 flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-2xl rotate-[-3deg] group-hover:rotate-0 transition-transform ${project.color === 'blue' ? 'bg-blue-500/10' : project.color === 'primary' ? 'bg-primary/10' : 'bg-gray-500/10'}`}>
                    <project.icon className={`w-6 h-6 ${project.color === 'blue' ? 'text-blue-400' : project.color === 'primary' ? 'text-primary' : 'text-gray-400'}`} />
                  </div>
                  <h3 className="text-2xl font-black tracking-tight">{project.name}</h3>
                </div>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-wider">{project.category}</span>
              </div>

              {project.status ? (
                <div className="flex-grow flex items-center justify-center relative z-10">
                  <span className="px-4 py-2 bg-black/40 border border-white/10 rounded-xl text-sm font-black uppercase tracking-widest text-red-400/80">{project.status}</span>
                </div>
              ) : (
                <p className="text-gray-300 text-base mb-8 flex-grow font-medium relative z-10 leading-relaxed">{project.description}</p>
              )}

              {!project.status && (
                <div className="flex flex-wrap gap-2 mb-8 mt-auto relative z-10">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1.5 bg-black/30 border border-white/5 rounded-xl text-xs font-bold text-gray-300 shadow-inner">{t}</span>
                  ))}
                </div>
              )}

              <div className="flex justify-between items-center pt-5 border-t border-white/5 relative z-10">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-4 text-xs text-gray-500 font-bold uppercase tracking-wider">
                    <span>Updated {project.updated}</span>
                  </div>
                  {project.name === 'Aegis' && (
                    <div className="flex gap-3 text-[10px] font-bold uppercase tracking-wider">
                      <Link href="/aegis/privacy" className="text-gray-500 hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>Privacy Policy</Link>
                      <span className="text-gray-700">•</span>
                      <Link href="/aegis/terms" className="text-gray-500 hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>Terms of Service</Link>
                    </div>
                  )}
                </div>
                <div className="flex gap-3 text-gray-400 self-end">
                  <BookOpen className="w-5 h-5 hover:text-white hover:scale-110 transition-all" />
                  <Code2 className="w-5 h-5 hover:text-white hover:scale-110 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
