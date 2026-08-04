"use client";

import { motion } from "framer-motion";
import { GitPullRequest, GitBranch, GitCommit, Code, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Contribute() {
  const steps = [
    {
      title: "Fork & Clone",
      desc: "Fork the repository to your own GitHub account and clone it locally.",
      icon: GitBranch,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Create Branch",
      desc: "Create a new branch for your feature or bug fix. Use a descriptive name.",
      icon: GitPullRequest,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      title: "Commit & Push",
      desc: "Write clean code, add tests, and commit with a clear message.",
      icon: Code,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      title: "Open PR",
      desc: "Submit a Pull Request against the main repository for review.",
      icon: GitCommit,
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }} 
        className="mb-20 mt-8 pl-4 border-l-4 border-primary/50 text-left"
      >
        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">Join the Collective.</h1>
        <p className="text-xl text-gray-400 max-w-2xl font-medium leading-relaxed">
          Help us build high-performance tools for the next generation of the web. We review PRs fast.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {steps.map((step, i) => (
          <motion.div 
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 100, damping: 15 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`glass-card-organic p-10 relative group border-t-2 ${step.border}`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${step.bg} rounded-full blur-[40px] -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 pointer-events-none`}></div>
            <div className={`w-12 h-12 flex items-center justify-center mb-6 rounded-2xl rotate-[-5deg] group-hover:rotate-0 transition-transform ${step.bg}`}>
              <step.icon className={`w-6 h-6 ${step.color}`} />
            </div>
            <h3 className="text-2xl font-black mb-3 text-white tracking-tight relative z-10">
              <span className="text-gray-600 mr-2 opacity-50">{i + 1}.</span>{step.title}
            </h3>
            <p className="text-gray-400 text-base font-medium leading-relaxed relative z-10">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="glass-card-organic rounded-[3rem] p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
        <h2 className="text-3xl font-black mb-8 relative z-10 flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-xl rotate-[5deg]">
            <CheckCircle2 className="w-6 h-6 text-blue-400" />
          </div>
          Code of Conduct
        </h2>
        <div className="space-y-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] shrink-0"></div>
            <div>
              <h4 className="font-black text-white mb-1">Be Respectful</h4>
              <p className="text-base font-medium text-gray-400">Treat everyone in the community with respect. Harassment will not be tolerated.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] shrink-0"></div>
            <div>
              <h4 className="font-black text-white mb-1">Be Collaborative</h4>
              <p className="text-base font-medium text-gray-400">We build in the open. Discuss major changes in an issue before writing code.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] shrink-0"></div>
            <div>
              <h4 className="font-black text-white mb-1">No AI-Generated SPAM</h4>
              <p className="text-base font-medium text-gray-400">Do not mass-submit AI-generated PRs without manual verification and testing.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <p className="text-base font-bold text-gray-400">Ready to write some code?</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/docs" className="glass-button text-white text-center font-bold px-8 py-3 rounded-2xl">
              Read Docs
            </Link>
            <Link href="https://github.com/AshcrestHQ" className="bg-white text-black text-center hover:bg-gray-200 transition-colors font-black px-8 py-3 rounded-2xl shadow-[0_10px_30px_-10px_rgba(255,255,255,0.4)]">
              Find an Issue
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
