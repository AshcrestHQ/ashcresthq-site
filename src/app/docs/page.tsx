"use client";

import { motion } from "framer-motion";
import { BookOpen, Terminal, Code2, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Docs() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }} 
        className="mb-16 mt-8 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="relative pl-4 border-l-4 border-primary/50">
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
            The Manual.
          </h1>
          <p className="text-xl text-gray-400 font-medium">How to wire into the AshcrestHQ network.</p>
        </div>
        <div className="relative group w-full md:w-auto">
          <input
            type="text"
            placeholder="Search docs (Ctrl+K)"
            className="bg-black/20 border border-white/10 rounded-2xl pl-4 pr-12 py-3 text-sm font-medium focus:outline-none focus:border-primary/50 transition-all w-full md:w-64 placeholder-gray-500 text-white focus:bg-black/40"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-[10px] font-black uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md border border-white/10">⌘K</span>
        </div>
      </motion.div>

      {/* Main Docs Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.1, type: "spring", stiffness: 100, damping: 15 }}
        className="max-w-none"
      >
        <h2 className="text-3xl font-black mb-6 text-white flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-xl rotate-[-5deg]">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          Protocol Overview
        </h2>
        <p className="mb-10 leading-relaxed text-lg text-gray-300 font-medium">
          AshcrestHQ is an organization building open-source software for anyone to see how it's built, copy, modify, and contribute to.
          We believe in the power of open-source infrastructure for the next generation of the web. No black boxes.
        </p>


        <h2 className="text-3xl font-black mb-6 text-white flex items-center gap-3 mt-16">
          <div className="p-2 bg-blue-500/10 rounded-xl rotate-[5deg]">
            <Code2 className="w-6 h-6 text-blue-400" />
          </div>
          Contributing to AshcrestHQ
        </h2>
        <p className="mb-10 leading-relaxed text-lg text-gray-300 font-medium">
          AshcrestHQ is built in the open — every line of Aegis and Janus exists because someone decided to contribute. Whether you're fixing a typo, squashing a bug, or building a whole feature, you're welcome here.
        </p>

        <h3 className="text-xl font-black mb-6 uppercase tracking-widest text-gray-400 text-sm">What Can You Contribute?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            { title: "Code & Features", desc: "Tackle open issues, submit bug fixes, or propose new features.", delay: 0 },
            { title: "Documentation", desc: "Improve these very docs, add examples, or fix typos.", delay: 0.05 },
            { title: "Design & UI", desc: "Help refine the user interface and user experience of our tools.", delay: 0.1 },
            { title: "Translation", desc: "Localize Aegis, Janus, or the website into other languages.", delay: 0.15 }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + item.delay, type: "spring" }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card-organic p-6 flex flex-col justify-center cursor-default"
            >
              <h4 className="font-black text-white mb-2 text-lg">{item.title}</h4>
              <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-xl font-black mb-6 mt-16 uppercase tracking-widest text-gray-400 text-sm">Reporting Security Issues</h3>
        <div className="glass-card-organic p-8 border-l-4 border-amber-500 bg-amber-500/5 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[40px] pointer-events-none"></div>
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-2 bg-amber-500/20 rounded-xl text-amber-500 rotate-[-5deg]">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <p className="font-black text-amber-500 text-lg m-0">Do not open a public issue for security vulnerabilities.</p>
          </div>
          <p className="text-gray-300 text-base mb-6 font-medium relative z-10">
            Instead, email <a href="mailto:medhansh.hq@outlook.com" className="text-amber-400 hover:text-amber-300 transition-colors font-bold underline decoration-amber-500/30 underline-offset-4">medhansh.hq@outlook.com</a> or DM a Maintainer directly with:
          </p>
          <ul className="space-y-3 text-base text-gray-300 font-medium relative z-10">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
              A description of the vulnerability
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
              Steps to reproduce
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
              Potential impact
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-10 mt-16 gap-6">
          <Link href="/projects" className="text-gray-400 hover:text-white transition-colors text-sm font-bold flex items-center gap-2">
            View Projects
          </Link>
          <Link href="/contribute" className="bg-white/10 hover:bg-primary/20 text-white hover:text-primary px-6 py-3 rounded-2xl font-black transition-all flex items-center gap-2">
            Read Full Contribution Guide
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
