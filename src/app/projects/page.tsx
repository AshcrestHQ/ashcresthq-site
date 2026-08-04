"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Shield, Terminal, Rocket, Code2, BookOpen } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    name: "Aegis",
    category: "Bot",
    tech: ["Rust", "PostgreSQL", "gRPC"],
    icon: Shield,
    color: "blue",
    description: "Advanced automated security protocol and moderation bot for distributed community networks.",
    link: "https://github.com/AshcrestHQ/aegis",
    stars: "1.2k",
    updated: "2h ago"
  },
  {
    name: "Janus",
    category: "OS",
    tech: ["TypeScript", "React", "Tailwind"],
    icon: Terminal,
    color: "primary",
    description: "Next-generation operating environment for high-availability distributed nodes.",
    link: "https://github.com/AshcrestHQ/janus",
    stars: "840",
    updated: "1d ago"
  },
  {
    name: "Project Helios",
    category: "Tools",
    tech: [],
    icon: Rocket,
    color: "gray",
    description: "",
    link: "https://github.com/AshcrestHQ/helios",
    status: "Coming Soon",
    stars: "3.4k",
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
    // Slight hack for matching singular/plural for bots/tools
    return matchesSearch && (techFilter === "" || matchesTech) && (activeCategory === "all" || p.category.toLowerCase().startsWith(activeCategory.toLowerCase().slice(0, -1)));
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-gray-400 max-w-2xl">Explore the core systems, bots, and libraries built by the Ashcrest collective.</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 pb-6 border-b border-white/10">
        <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === "All Projects" ? "all" : cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                (activeCategory === "all" && cat === "All Projects") || activeCategory === cat
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "bg-transparent text-gray-400 hover:bg-white/5 border border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex gap-4 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-64">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Filter by tech..."
              value={techFilter}
              onChange={(e) => setTechFilter(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <div className="relative flex-1 lg:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card p-6 rounded-2xl cursor-pointer group flex flex-col relative overflow-hidden ${
              project.status ? 'border-dashed opacity-60 hover:opacity-100' : ''
            }`}
            onClick={() => window.location.href = project.link}
          >
            {project.color === 'blue' && <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>}
            {project.color === 'primary' && <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>}
            
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <project.icon className={`w-6 h-6 ${project.color === 'blue' ? 'text-blue-400' : project.color === 'primary' ? 'text-primary' : 'text-gray-400'}`} />
                <h3 className="text-xl font-bold">{project.name}</h3>
              </div>
              <span className="px-2 py-1 bg-white/5 rounded text-xs uppercase tracking-wider">{project.category}</span>
            </div>

            {project.status ? (
              <div className="flex-grow flex items-center justify-center">
                <span className="px-3 py-1 bg-white/10 rounded text-sm uppercase tracking-widest">{project.status}</span>
              </div>
            ) : (
              <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
            )}

            {!project.status && (
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 bg-black/40 rounded text-xs text-gray-300">{t}</span>
                ))}
              </div>
            )}

            <div className="flex justify-between items-center pt-4 border-t border-white/5">
              <div className="flex gap-4 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1">★ {project.stars}</span>
                <span>Updated {project.updated}</span>
              </div>
              <div className="flex gap-2 text-gray-400">
                <BookOpen className="w-4 h-4 hover:text-white transition-colors" />
                <Code2 className="w-4 h-4 hover:text-white transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
