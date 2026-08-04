"use client";

import { motion } from "framer-motion";
import { BookOpen, Terminal, Code2, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Docs() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-gray-400">Everything you need to build with AshcrestHQ.</p>
        </div>
        <div className="relative group">
          <input
            type="text"
            placeholder="Search docs (Ctrl+K)"
            className="bg-black/20 border border-white/10 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all w-full md:w-64 placeholder-gray-500 text-white"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-mono bg-white/5 px-1.5 rounded border border-white/10">⌘K</span>
        </div>
      </motion.div>

      {/* Main Docs Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.1 }}
        className="prose prose-invert prose-p:text-gray-400 prose-headings:text-white max-w-none"
      >
        <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          Protocol Overview
        </h2>
        <p className="mb-8 leading-relaxed">
          AshcrestHQ is an organisation building open source software for anyone to see how its built, copy, modify and contribute to.
          We believe in the power of open-source infrastructure for the next generation of the web.
        </p>

        <div className="glass p-8 rounded-3xl mb-12 border-l-4 border-primary">
          <h3 className="text-xl font-bold mb-4">Quick Start</h3>
          <p className="mb-4 text-gray-400">To get started with our core protocol, run the following command in your terminal:</p>
          <div className="bg-black/50 rounded-xl p-4 font-mono text-sm border border-white/5 flex items-center justify-between">
            <code className="text-gray-300">curl -sSL https://ashcresthq.com/install.sh | bash</code>
            <Terminal className="w-4 h-4 text-gray-500" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2 mt-12">
          <Code2 className="w-6 h-6" />
          Contributing to AshcrestHQ
        </h2>
        <p className="mb-6 leading-relaxed">
          AshcrestHQ is built in the open — every line of Aegis and Janus exists because someone decided to contribute. Whether you're fixing a typo, squashing a bug, or building a whole feature, you're welcome here.
        </p>

        <h3 className="text-xl font-bold mb-4 mt-8">What Can You Contribute?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="glass-card p-4 rounded-xl">
            <h4 className="font-bold text-white mb-2">Code & Features</h4>
            <p className="text-sm text-gray-400">Tackle open issues, submit bug fixes, or propose new features.</p>
          </div>
          <div className="glass-card p-4 rounded-xl">
            <h4 className="font-bold text-white mb-2">Documentation</h4>
            <p className="text-sm text-gray-400">Improve these very docs, add examples, or fix typos.</p>
          </div>
          <div className="glass-card p-4 rounded-xl">
            <h4 className="font-bold text-white mb-2">Design & UI</h4>
            <p className="text-sm text-gray-400">Help refine the user interface and user experience of our tools.</p>
          </div>
          <div className="glass-card p-4 rounded-xl">
            <h4 className="font-bold text-white mb-2">Translation</h4>
            <p className="text-sm text-gray-400">Localize Aegis, Janus, or the website into other languages.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4 mt-12">Reporting Security Issues</h3>
        <div className="glass-card p-6 rounded-2xl border-l-4 border-amber-500 bg-amber-500/5 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            <p className="font-semibold text-amber-500 m-0">Do not open a public issue for security vulnerabilities.</p>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Instead, email <a href="mailto:medhansh5@outlook.com" className="text-amber-400 hover:underline font-medium">medhansh5@outlook.com</a> or DM a Maintainer directly with:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
            <li>A description of the vulnerability</li>
            <li>Steps to reproduce</li>
            <li>Potential impact</li>
          </ul>
        </div>
        
        <div className="flex items-center justify-between border-t border-white/10 pt-8 mt-12">
          <Link href="/projects" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
            View Projects
          </Link>
          <Link href="/contribute" className="text-primary hover:text-primary-hover font-medium transition-colors flex items-center gap-2">
            Read Full Contribution Guide
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
