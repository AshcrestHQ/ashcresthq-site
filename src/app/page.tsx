"use client";

import { motion, Variants } from "framer-motion";
import { Rocket, Shield, Terminal, ArrowRight, Code2, Eye, Sparkles, Cpu, GitBranch, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", bounce: 0, duration: 0.6 } 
    },
  };

  const FLAGSHIP_PROJECTS = [
    {
      name: "Blindside",
      repo: "Blindside",
      badge: "V3 RELEASE",
      tech: "C++20 / OpenCV / ONNX",
      icon: Eye,
      color: "emerald",
      accentGlow: "bg-emerald-500/10",
      description: "Paranoia, but automated. A physical privacy daemon that monitors webcam feeds and locks/blurs screen when an unauthorized watcher looks over your shoulder.",
      link: "https://github.com/AshcrestHQ/Blindside"
    },
    {
      name: "Aegis",
      repo: "Aegis",
      badge: "V3.5.1 LIVE",
      tech: "Java 26 / Virtual Threads / Gemini",
      icon: Shield,
      color: "blue",
      accentGlow: "bg-blue-500/10",
      description: "Universal Discord operations bot powering anti-raid security, moderation, Cyber RPG, AI assistance, and Discord DAVE E2EE audio.",
      link: "https://github.com/AshcrestHQ/Aegis"
    },
    {
      name: "Janus",
      repo: "janus",
      badge: "MICROKERNEL",
      tech: "Rust / x86-64 / Capabilities",
      icon: Cpu,
      color: "amber",
      accentGlow: "bg-amber-500/10",
      description: "Security-first microkernel OS built from scratch in Rust. Kernel-enforced capabilities, zero ambient authority, and synchronous IPC.",
      link: "https://github.com/AshcrestHQ/janus"
    },
    {
      name: "Holocron",
      repo: "Holocron",
      badge: "CLI TOOL",
      tech: "Python 3 / Typer / Git",
      icon: Terminal,
      color: "purple",
      accentGlow: "bg-purple-500/10",
      description: "Learn-by-doing CLI teaching cybersecurity fundamentals and open-source workflow practices (git branching, PR etiquette, XP, streaks).",
      link: "https://github.com/AshcrestHQ/Holocron"
    },
    {
      name: "Terra",
      repo: "Terra",
      badge: "3D HABIT GARDEN",
      tech: "Next.js / React Three Fiber / PWA",
      icon: Sparkles,
      color: "cyan",
      accentGlow: "bg-cyan-500/10",
      description: "3D habit-tracking garden built with Next.js & Three.js. Every habit you keep grows living plants across 5 visual growth stages on a floating island.",
      link: "https://github.com/AshcrestHQ/Terra"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section 
        className="w-full min-h-[70vh] flex flex-col items-start justify-center text-left relative mt-10 md:mt-20 pl-4 md:pl-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.a 
          href="https://github.com/AshcrestHQ/Blindside"
          variants={itemVariants} 
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-10 text-xs font-bold text-emerald-400 tracking-widest uppercase cursor-pointer hover:bg-emerald-500/20 transition-all shadow-lg shadow-emerald-500/5"
        >
          <Rocket className="w-4 h-4 text-emerald-400" />
          <span>BLINDSIDE V3 & AEGIS V3.5 ARE LIVE</span>
        </motion.a>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-[6.5rem] font-black tracking-tighter mb-8 leading-[0.98] relative z-10 max-w-5xl text-white">
          Open Source Software, <br className="hidden md:block" />
          <span className="relative inline-block mt-2 text-gray-300">
            Built Without Compromise.
          </span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="max-w-2xl text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-medium">
          AshcrestHQ is an open-source engineering collective building security tools, operating systems, AI assistants, and developer utilities. Everything we build is public, transparent, and open from day one.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5">
          <Link href="/projects" className="bg-primary hover:bg-primary-hover text-black text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all flex items-center gap-3 shadow-lg shadow-primary/20 group">
            Explore The Arsenal
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="https://github.com/AshcrestHQ" target="_blank" className="text-gray-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full flex items-center gap-3 transition-all">
            <GitBranch className="w-4 h-4 text-primary" />
            GitHub Organization
          </Link>
        </motion.div>

        {/* Collective Stats Bar */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/10 w-full max-w-4xl text-xs font-mono text-gray-400">
          <div>
            <span className="block text-2xl font-black text-white font-sans">7+</span>
            <span>PUBLIC PROJECTS</span>
          </div>
          <div>
            <span className="block text-2xl font-black text-white font-sans">100%</span>
            <span>FREE & OPEN SOURCE</span>
          </div>
          <div>
            <span className="block text-2xl font-black text-white font-sans">Rust / C++ / Java</span>
            <span>SYSTEMS & APPS</span>
          </div>
          <div>
            <span className="block text-2xl font-black text-white font-sans">MIT / Open</span>
            <span>LICENSE GOVERNANCE</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Featured Projects Offset Grid */}
      <motion.section 
        className="w-full py-20 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none -z-10"></div>

        <motion.div variants={itemVariants} className="flex flex-col items-start mb-16 relative z-10 pl-4 md:pl-12 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-400 tracking-wider uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Flagship Initiatives
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">The Engines</h2>
          <p className="text-lg text-gray-400 font-medium leading-relaxed">High-performance tools, microkernels, and privacy engines crafted by the collective.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10 w-full">
          {FLAGSHIP_PROJECTS.map((project, idx) => {
            const Icon = project.icon;

            return (
              <motion.div 
                key={project.name}
                variants={itemVariants} 
                whileHover={{ y: -6 }}
                transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                className={`w-full glass-card-organic p-8 group cursor-pointer border border-white/10 hover:border-white/20 relative overflow-hidden flex flex-col justify-between rounded-2xl ${idx % 2 === 1 ? "md:translate-y-6" : ""}`} 
                onClick={() => window.open(project.link, "_blank")}
              >
                <div className={`absolute top-0 right-0 w-56 h-56 ${project.accentGlow} rounded-full blur-[70px] -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-primary transition-colors">{project.name}</h3>
                        <span className="text-[11px] font-mono text-gray-500">{project.badge}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-8 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between relative z-10 pt-4 border-t border-white/10">
                  <span className="text-gray-400 text-xs font-mono">{project.tech}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Join Community CTA */}
      <motion.section 
        className="w-full max-w-5xl mx-auto py-6 mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="glass-card-organic p-8 md:p-16 text-center relative overflow-hidden flex flex-col items-center border border-white/10 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 relative z-10 tracking-tighter text-white">Come build with us.</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 relative z-10 text-lg leading-relaxed">
            Whether you hack on Rust microkernels, C++ computer vision, Java security bots, or 3D web graphics — you're welcome in our collective.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10">
            <Link href="https://discord.gg/35ubQnrzD" target="_blank" className="bg-white hover:bg-gray-200 text-black text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-lg shadow-white/10">
              Jump into Discord
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-white border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full flex items-center gap-3 transition-all group">
              Read Documentation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
