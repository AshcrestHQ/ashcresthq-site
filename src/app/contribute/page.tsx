"use client";

import { motion } from "framer-motion";
import { GitPullRequest, GitBranch, GitCommit, Code, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Contribute() {
  const steps = [
    {
      title: "1. Fork & Clone",
      desc: "Fork the repository to your own GitHub account and clone it locally.",
      icon: GitBranch
    },
    {
      title: "2. Create Branch",
      desc: "Create a new branch for your feature or bug fix. Use a descriptive name.",
      icon: GitPullRequest
    },
    {
      title: "3. Commit & Push",
      desc: "Write clean code, add tests, and commit with a clear message.",
      icon: Code
    },
    {
      title: "4. Open PR",
      desc: "Submit a Pull Request against the main repository for review.",
      icon: GitCommit
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Contributing</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Join the collective. Help us build high-performance tools for the next generation of the web.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {steps.map((step, i) => (
          <motion.div 
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 rounded-3xl relative group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors"></div>
            <step.icon className="w-10 h-10 text-primary mb-6 p-2 bg-primary/10 rounded-xl" />
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-10 relative overflow-hidden border-t border-l border-white/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
        <h2 className="text-2xl font-bold mb-6">Code of Conduct</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white mb-1">Be Respectful</h4>
              <p className="text-sm text-gray-400">Treat everyone in the community with respect. Harassment will not be tolerated.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white mb-1">Be Collaborative</h4>
              <p className="text-sm text-gray-400">We build in the open. Discuss major changes in an issue before writing code.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white mb-1">No AI-Generated SPAM</h4>
              <p className="text-sm text-gray-400">Do not mass-submit AI-generated PRs without manual verification and testing.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">Ready to write some code?</p>
          <div className="flex gap-4">
            <Link href="/docs" className="glass-button text-white text-sm font-semibold px-6 py-2 rounded-full">
              Read Docs
            </Link>
            <Link href="https://github.com/AshcrestHQ" className="bg-white text-black hover:bg-gray-200 transition-colors text-sm font-semibold px-6 py-2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Find an Issue
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
