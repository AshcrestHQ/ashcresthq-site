"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Filter, 
  Shield, 
  Terminal, 
  Cpu, 
  Eye, 
  Sparkles, 
  Monitor, 
  Tv,
  Star,
  GitFork,
  ExternalLink,
  ArrowUpRight,
  Copy,
  Check,
  RotateCcw
} from "lucide-react";
import Link from "next/link";
import { timeAgo } from "@/lib/timeAgo";

type Project = {
  name: string;
  repoName: string;
  category: "OS & Microkernels" | "Security & Privacy" | "AI & Vision" | "DevTools & CLI" | "Web & Games";
  tech: string[];
  icon: any;
  color: string;
  accentBg: string;
  description: string;
  link: string;
  updated: string;
  stars?: number;
  forks?: number;
  install?: string;
  featured?: boolean;
};

const INITIAL_PROJECTS: Project[] = [
  {
    name: "Blindside",
    repoName: "Blindside",
    category: "Security & Privacy",
    tech: ["C++20", "OpenCV", "ONNX", "Linux"],
    icon: Eye,
    color: "emerald",
    accentBg: "bg-emerald-500/10",
    description: "Paranoia, but automated. A physical privacy daemon that monitors webcam feeds with computer vision and locks or blurs your screen when someone looks over your shoulder.",
    link: "https://github.com/AshcrestHQ/Blindside",
    updated: "Recently",
    install: "cmake -B build && cmake --build build",
    featured: true
  },
  {
    name: "Aegis",
    repoName: "Aegis",
    category: "Security & Privacy",
    tech: ["Java 26", "Virtual Threads", "Gemini AI", "Discord DAVE"],
    icon: Shield,
    color: "blue",
    accentBg: "bg-blue-500/10",
    description: "Universal Discord operations bot for security recon, moderation, anti-raid protection, Cyber RPG, AI assistance, and Discord DAVE E2EE with zero paid API dependencies.",
    link: "https://github.com/AshcrestHQ/Aegis",
    updated: "Recently",
    featured: true
  },
  {
    name: "Janus",
    repoName: "janus",
    category: "OS & Microkernels",
    tech: ["Rust", "x86-64", "OSDev", "Capabilities"],
    icon: Cpu,
    color: "amber",
    accentBg: "bg-amber-500/10",
    description: "Security-first microkernel OS built from scratch in Rust. Features kernel-enforced capabilities, zero ambient authority, synchronous IPC, and preemptive scheduling.",
    link: "https://github.com/AshcrestHQ/janus",
    updated: "Recently",
    featured: true
  },
  {
    name: "Holocron",
    repoName: "Holocron",
    category: "DevTools & CLI",
    tech: ["Python 3", "Typer", "Git", "CLI"],
    icon: Terminal,
    color: "purple",
    accentBg: "bg-purple-500/10",
    description: "Interactive, gamified command-line application teaching cybersecurity fundamentals and open-source workflow practices (git branching, PR etiquette, XP, streaks).",
    link: "https://github.com/AshcrestHQ/Holocron",
    updated: "Recently",
    install: "pip install -e . && holocron list",
    featured: true
  },
  {
    name: "Terra",
    repoName: "Terra",
    category: "Web & Games",
    tech: ["Next.js", "React Three Fiber", "Zustand", "PWA"],
    icon: Sparkles,
    color: "cyan",
    accentBg: "bg-cyan-500/10",
    description: "A 3D habit-tracking garden built with Next.js and React Three Fiber. Every habit kept grows a living plant through five visual stages set on a floating island with dynamic weather.",
    link: "https://github.com/AshcrestHQ/Terra",
    updated: "Recently",
    featured: true
  },
  {
    name: "Spectre",
    repoName: "spectre",
    category: "AI & Vision",
    tech: ["Python", "PyQt6", "Gemini AI", "Computer Vision"],
    icon: Monitor,
    color: "indigo",
    accentBg: "bg-indigo-500/10",
    description: "Privacy-first AI screen assistant for Linux. Press a custom hotkey for instant multimodal AI analysis and insights on your active screen contents.",
    link: "https://github.com/AshcrestHQ/spectre",
    updated: "Recently",
    install: "python3 -m spectre --hotkey Super+Alt+S"
  },
  {
    name: "90s-Nostalgia",
    repoName: "90s-nostalgia",
    category: "Web & Games",
    tech: ["HTML5", "Vanilla JS", "WebAudio API", "CSS3"],
    icon: Tv,
    color: "rose",
    accentBg: "bg-rose-500/10",
    description: "Single HTML file recreating late-90s internet as a working desktop OS. Live WebAudio synthesized 8-bit chiptune music, GeoCities site, guestbook, and Matrix rain mode.",
    link: "https://github.com/AshcrestHQ/90s-nostalgia",
    updated: "Recently"
  }
];

const CATEGORIES = [
  "All Projects",
  "OS & Microkernels",
  "Security & Privacy",
  "AI & Vision",
  "DevTools & CLI",
  "Web & Games"
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [techFilter, setTechFilter] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOrgRepos() {
      const cacheKey = "ashcresthq_org_repos_v4";
      const cached = sessionStorage.getItem(cacheKey);

      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < 1800 * 1000) {
            mergeRepoData(parsed.data);
            return;
          }
        } catch (e) {
          console.error("Cache parsing error:", e);
        }
      }

      try {
        const res = await fetch("https://api.github.com/orgs/AshcrestHQ/repos");
        if (res.ok) {
          const reposData = await res.json();
          if (Array.isArray(reposData)) {
            sessionStorage.setItem(cacheKey, JSON.stringify({
              timestamp: Date.now(),
              data: reposData
            }));
            mergeRepoData(reposData);
          }
        }
      } catch (e) {
        console.error("Failed to fetch AshcrestHQ repos:", e);
      }
    }

    function mergeRepoData(apiRepos: any[]) {
      const repoMap = new Map(apiRepos.map(r => [r.name.toLowerCase(), r]));

      setProjects(prevProjects => 
        prevProjects.map(p => {
          const apiRepo = repoMap.get(p.repoName.toLowerCase());
          if (!apiRepo) return p;

          return {
            ...p,
            stars: apiRepo.stargazers_count ?? p.stars,
            forks: apiRepo.forks_count ?? p.forks,
            updated: apiRepo.pushed_at ? timeAgo(apiRepo.pushed_at) : p.updated,
            description: p.description || apiRepo.description
          };
        })
      );
    }

    fetchOrgRepos();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(text);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = techFilter === "" || p.tech.some(t => t.toLowerCase().includes(techFilter.toLowerCase()));
    const matchesCat = activeCategory === "All Projects" || p.category === activeCategory;
    return matchesSearch && matchesTech && matchesCat;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 pl-6 md:pl-10 border-l-2 border-primary/40 max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary tracking-wider uppercase mb-4">
          Open Source Arsenal • {projects.length} Repositories
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">The Arsenal</h1>
        <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
          Free, open-source software maintained by AshcrestHQ. Security tools, operating systems, AI assistants, and interactive web environments.
        </p>
      </motion.div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 pb-6 border-b border-white/10">
        
        {/* Category Tabs Container - Clean Unclipped Wrap */}
        <div className="flex flex-wrap gap-2.5 items-center w-full lg:w-auto">
          {CATEGORIES.map(cat => (
            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-primary text-black shadow-lg shadow-primary/20 font-extrabold"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5 hover:border-white/10"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>


        {/* Search Inputs & Active Filter Stats */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          { (techFilter !== "" || searchTerm !== "" || activeCategory !== "All Projects") && (
            <button
              onClick={() => { setSearchTerm(""); setTechFilter(""); setActiveCategory("All Projects"); }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-gray-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          )}

          <div className="relative flex-1 lg:w-52">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Filter tech stack..."
              value={techFilter}
              onChange={(e) => setTechFilter(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-2.5 text-xs font-medium focus:outline-none focus:border-primary/40 transition-colors focus:bg-white/10 text-white placeholder-gray-500"
            />
          </div>

          <div className="relative flex-1 lg:w-60">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search repository..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-2.5 text-xs font-medium focus:outline-none focus:border-primary/40 transition-colors focus:bg-white/10 text-white placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      {/* Filter Counter Badge */}
      <div className="flex justify-between items-center mb-8 text-xs font-mono text-gray-400">
        <span>Showing <strong className="text-white">{filteredProjects.length}</strong> of {projects.length} repositories</span>
        {techFilter && <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-md border border-primary/20">Tech filter: {techFilter}</span>}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4">
        <AnimatePresence>
          {filteredProjects.map((project, i) => {
            const Icon = project.icon;

            return (
              <motion.div
                layout
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", bounce: 0.15, duration: 0.4, delay: i * 0.04 }}
                className="glass-card-organic p-8 cursor-pointer group flex flex-col justify-between relative overflow-hidden border border-white/10 hover:border-white/20 transition-all rounded-2xl"
                onClick={() => window.open(project.link, "_blank")}
              >
                {/* Background Ambient Glow */}
                <div className={`absolute top-0 right-0 w-48 h-48 ${project.accentBg} rounded-full blur-[70px] -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

                <div>
                  {/* Top Bar: Icon + Category */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-primary transition-colors flex items-center gap-2">
                          {project.name}
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                        </h3>
                        <span className="text-[11px] font-mono text-gray-500">AshcrestHQ/{project.repoName}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 font-normal leading-relaxed relative z-10">
                    {project.description}
                  </p>

                  {/* Terminal Copy Snippet */}
                  {project.install && (
                    <div className="mb-6 relative z-10" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-xl p-3 text-xs font-mono text-gray-300">
                        <span className="truncate mr-2 text-[11px]">{project.install}</span>
                        <button
                          onClick={() => copyToClipboard(project.install!)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors flex-shrink-0"
                          title="Copy install command"
                        >
                          {copiedSnippet === project.install ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Interactive Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-8 relative z-10" onClick={(e) => e.stopPropagation()}>
                    {project.tech.map(t => (
                      <button
                        key={t}
                        onClick={() => setTechFilter(techFilter === t ? "" : t)}
                        className={`px-2.5 py-1 border rounded-md text-[11px] font-mono font-medium transition-all ${
                          techFilter.toLowerCase() === t.toLowerCase()
                            ? "bg-primary/20 border-primary text-primary"
                            : "bg-white/5 border-white/5 hover:border-white/20 text-gray-400 hover:text-white"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className="pt-5 border-t border-white/10 flex justify-between items-center relative z-10 text-xs text-gray-400 font-medium">
                  <div className="flex items-center gap-4">
                    {project.stars !== undefined && (
                      <span className="flex items-center gap-1.5 text-amber-400 font-mono font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        {project.stars}
                      </span>
                    )}
                    {project.forks !== undefined && project.forks > 0 && (
                      <span className="flex items-center gap-1 font-mono text-gray-400">
                        <GitFork className="w-3.5 h-3.5" />
                        {project.forks}
                      </span>
                    )}
                    <span className="text-[11px] text-gray-500 font-mono">Updated {project.updated}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.name === 'Aegis' && (
                      <div className="flex gap-2 text-[10px] font-mono text-gray-500 mr-1">
                        <Link href="/aegis/privacy" className="hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>Privacy</Link>
                        <span>•</span>
                        <Link href="/aegis/terms" className="hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>Terms</Link>
                      </div>
                    )}
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 border border-white/10 rounded-2xl glass-card-organic">
          <p className="text-gray-400 text-base mb-4 font-mono">No repositories match your active search filters.</p>
          <button 
            onClick={() => { setSearchTerm(""); setTechFilter(""); setActiveCategory("All Projects"); }}
            className="px-6 py-2.5 rounded-full bg-primary text-black font-bold text-xs uppercase tracking-wider hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
