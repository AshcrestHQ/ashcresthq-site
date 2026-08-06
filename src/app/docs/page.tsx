"use client";

import { motion } from "framer-motion";
import { BookOpen, Terminal, Code2, AlertTriangle, ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

export default function Docs() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-32">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
        className="mb-20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5"
      >
        <div className="relative pl-6 border-l border-primary/30">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">
            The Manual
          </h1>
          <p className="text-xl text-gray-400 font-medium leading-loose">How to wire into the AshcrestHQ network.</p>
        </div>
        <div className="relative group w-full md:w-auto">
          <input
            type="text"
            placeholder="Search docs (Ctrl+K)"
            className="bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3.5 text-[13px] font-medium focus:outline-none focus:border-primary/40 transition-colors w-full md:w-64 placeholder-gray-500 text-white focus:bg-white/10"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-[9px] font-bold uppercase tracking-widest bg-black/40 px-2 py-1 rounded border border-white/5">⌘K</span>
        </div>
      </motion.div>

      {/* Main Docs Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="max-w-none"
      >
        <h2 className="text-3xl font-black mb-8 text-white flex items-center gap-4 tracking-tight">
          <div className="p-3 bg-primary/10 rounded-xl">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          Protocol Overview
        </h2>
        <p className="mb-16 leading-loose text-lg text-gray-400 font-medium max-w-3xl">
          So here's the deal. AshcrestHQ isn't a company, at least not in the traditional sense. It's a handful of people who got tired of building things that disappear behind a login screen or a paywall the moment they're finished. Everything we make gets published, warts and all, from the first messy commit to whatever it eventually turns into.
        </p>
        <p className="mb-16 leading-loose text-lg text-gray-400 font-medium max-w-3xl">
          That means you can read the code for Janus right now and see exactly how a microkernel handles memory allocation. You can pull up Aegis and see how anti-raid detection actually works under the hood instead of trusting a marketing page that says "advanced security." Nothing here is a black box, and honestly, we think that's how software should work more often than it does.
        </p>

        <h2 className="text-3xl font-black mb-8 text-white flex items-center gap-4 mt-24 tracking-tight">
          <div className="p-3 bg-purple-500/10 rounded-xl">
            <Rocket className="w-6 h-6 text-purple-400" />
          </div>
          What We're Building
        </h2>
        <p className="mb-8 leading-loose text-lg text-gray-400 font-medium max-w-3xl">
          So here's the deal. Right now there are three main projects, and they're pretty different from each other.
        </p>
        <p className="mb-8 leading-loose text-lg text-gray-400 font-medium max-w-3xl">
          Janus is an operating system. Specifically, it's a microkernel written in Rust, built around the idea that nothing on the system should be trusted by default. Every single action needs an explicit permission from the kernel, no exceptions. It's still early days for Janus, there's no filesystem yet and no shell, but the core security model actually works and we've stress tested it to prove that.
        </p>
        <p className="mb-8 leading-loose text-lg text-gray-400 font-medium max-w-3xl">
          Aegis is the more approachable entry point if you're not into low level systems work. It's a Discord bot written in Java that handles security auditing, anti-raid protection, an AI assistant, and even runs music through voice channels.
        </p>
        <p className="mb-16 leading-loose text-lg text-gray-400 font-medium max-w-3xl">
          Holocron ties the two together. It's a CLI that teaches security fundamentals and real open source contribution skills side by side, so if you finish enough of it, you're not just learning, you're actually ready to open a PR on Janus or Aegis.
        </p>

        <h2 className="text-3xl font-black mb-8 text-white flex items-center gap-4 mt-24 tracking-tight">
          <div className="p-3 bg-blue-500/10 rounded-xl">
            <Code2 className="w-6 h-6 text-blue-400" />
          </div>
          Contributing to AshcrestHQ
        </h2>
        <p className="mb-8 leading-loose text-lg text-gray-400 font-medium max-w-3xl">
          Every line of Aegis and Janus exists because someone sat down and decided to write it. That's not a metaphor, it's literally true, since this whole thing started with just a couple of friends. If you fix a typo, that typo stays fixed because you fixed it. If you squash a bug, that bug is gone because of you.
        </p>
        <p className="mb-16 leading-loose text-lg text-gray-400 font-medium max-w-3xl">
          Here's roughly how it goes once you find something you want to work on. Fork the repo, make a branch with a name that actually describes what you're doing, and get your changes working locally. When you open a pull request, write a description that explains what changed and why, not just what file you touched. A maintainer will look it over, usually within a few days depending on how big the project is at the time, and they might ask you to tweak something. That's normal. Nobody's first PR gets merged without a comment or two, and that's not a bad sign, it just means someone actually read your code.
        </p>

        <h3 className="text-xs font-bold mb-8 uppercase tracking-widest text-gray-500 pl-4 border-l-2 border-white/10">What Can You Contribute?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {[
            { title: "Code & Features", desc: "If you like writing code, there's always open issues waiting for someone to pick them up, whether that's a small bug fix or a bigger feature nobody's had time to build yet.", delay: 0 },
            { title: "Documentation", desc: "If you'd rather write words than code, these docs need it too. If something here confused you, that's useful information, tell us or fix it yourself.", delay: 0.05 },
            { title: "Design & UI", desc: "If you have an eye for how things look and feel, both Aegis's interactions and the website itself could always use a second pair of eyes on the design side.", delay: 0.1 },
            { title: "Translation", desc: "Aegis, Janus, and Holocron are all English only right now, which means there's a lot of people out there who can't easily use any of it. Translation work matters more than people usually give it credit for.", delay: 0.15 }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 + item.delay }}
              className="glass-card-organic p-10 flex flex-col justify-center cursor-default hover:border-white/20 transition-colors group"
            >
              <h4 className="font-black text-white mb-4 text-xl tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-[15px] text-gray-400 font-medium leading-loose">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-xs font-bold mb-8 uppercase tracking-widest text-gray-500 pl-4 border-l-2 border-white/10">Reporting Security Issues</h3>
        <div className="glass-card-organic p-12 border-l-2 border-amber-500 bg-amber-500/5 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none -mr-32 -mt-32"></div>
          <div className="flex items-center gap-5 mb-10 relative z-10">
            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <p className="font-black text-amber-500 text-xl tracking-tight">Do not open a public issue for security vulnerabilities.</p>
          </div>
          <p className="text-gray-400 text-lg mb-8 font-medium leading-loose relative z-10 max-w-2xl">
            Quick but important one: if you find a security vulnerability, please don't open a public GitHub issue about it. That just tells anyone watching the repo exactly how to exploit it before we've had a chance to fix it.
            <br/><br/>
            Instead, email <a href="mailto:medhansh.hq@outlook.com" className="text-amber-400 hover:text-amber-300 transition-colors font-bold underline decoration-amber-500/30 underline-offset-4">medhansh.hq@outlook.com</a> or DM a Maintainer directly with:
          </p>
          <ul className="space-y-4 text-[15px] text-gray-300 font-medium relative z-10 mb-8">
            <li className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50 shrink-0"></div>
              A description of the vulnerability
            </li>
            <li className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50 shrink-0"></div>
              Steps to reproduce
            </li>
            <li className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50 shrink-0"></div>
              Potential impact
            </li>
          </ul>
          <p className="text-gray-400 text-[15px] font-medium leading-loose relative z-10">
            We'll get back to you and, unless you'd rather stay anonymous, you'll get credit once it's fixed.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-12 gap-8">
          <Link href="/projects" className="text-gray-400 hover:text-white transition-colors text-sm font-bold flex items-center gap-2 tracking-wide uppercase">
            View Projects
          </Link>
          <Link href="/contribute" className="bg-primary/10 hover:bg-primary/20 text-primary px-8 py-4 rounded-full text-sm font-bold transition-colors flex items-center gap-3">
            Read Full Contribution Guide
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
