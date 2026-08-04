"use client";

import { motion } from "framer-motion";
import { Rocket, Shield, Terminal, ArrowRight, BookOpen, Code2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section 
        className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-button mb-8 text-sm font-medium text-primary shadow-[0_0_15px_rgba(224,123,57,0.2)]">
          <Rocket className="w-4 h-4" />
          <span>v3.0 Protocol Live</span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
          Forged in the <br className="hidden md:block" /> Cosmic Void.
        </motion.h1>
        
        <motion.p variants={itemVariants} className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          High-performance developer tools, bots, and libraries. Join a community of engineers pushing the boundaries of infrastructure and collaboration.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/projects" className="bg-primary hover:bg-primary-hover text-white text-base font-semibold px-8 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(224,123,57,0.3)] hover:shadow-[0_0_30px_rgba(224,123,57,0.5)] flex items-center gap-2">
            Explore Projects
            <Rocket className="w-5 h-5" />
          </Link>
          <Link href="https://github.com/AshcrestHQ" className="glass-button text-white text-base font-semibold px-8 py-3 rounded-full flex items-center gap-2 group">
            View on GitHub
            <Code2 className="w-5 h-5 group-hover:text-primary transition-colors" />
          </Link>
        </motion.div>
      </motion.section>

      {/* Featured Projects Bento Box */}
      <motion.section 
        className="w-full py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Systems</h2>
          <p className="text-gray-400">The pillars of the Ashcrest network.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Aegis Card */}
          <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl group cursor-pointer hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden" onClick={() => window.location.href='https://github.com/AshcrestHQ/aegis'}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/20 transition-all"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-500/10 rounded-2xl">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">Aegis</h3>
            </div>
            <p className="text-gray-400 mb-8 h-12">Universal Discord bot powered by Java 26 Virtual Threads. Engineered for server protection.</p>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider uppercase">Java</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-semibold tracking-wider uppercase">Bot</span>
            </div>
          </motion.div>
          
          {/* Janus Card */}
          <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl group cursor-pointer hover:border-primary/30 transition-all duration-300 relative overflow-hidden" onClick={() => window.location.href='https://github.com/AshcrestHQ/janus'}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Terminal className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Janus</h3>
            </div>
            <p className="text-gray-400 mb-8 h-12">Next-generation operating environment for high-availability distributed nodes.</p>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">TypeScript</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-semibold tracking-wider uppercase">OS</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Join Community CTA */}
      <motion.section 
        className="w-full max-w-5xl mx-auto py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="glass rounded-[3rem] p-12 text-center relative overflow-hidden flex flex-col items-center border-t border-l border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Join the Collective</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 relative z-10 text-lg">
            AshcrestHQ is built in the open. Whether you're fixing a typo, squashing a bug, or building a whole feature, you're welcome here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link href="https://discord.gg/35ubQnrzD" className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 rounded-full transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Join Discord
            </Link>
            <Link href="/docs" className="glass-button text-white font-semibold px-8 py-3 rounded-full flex items-center gap-2 group">
              Read Guidelines
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
