"use client";

import { motion, Variants } from "framer-motion";
import { Rocket, Shield, Terminal, ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", bounce: 0, duration: 0.6 } 
    },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section 
        className="w-full min-h-[75vh] flex flex-col items-start justify-center text-left relative mt-10 md:mt-24 pl-4 md:pl-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.a 
          href="https://github.com/AshcrestHQ/Aegis"
          variants={itemVariants} 
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-12 text-[13px] font-bold text-primary tracking-widest uppercase cursor-pointer hover:bg-white/10 transition-colors"
        >
          <Rocket className="w-4 h-4" />
          <span>AEGIS V3.5.1 IS LIVE</span>
        </motion.a>
        
        <motion.h1 variants={itemVariants} className="text-6xl md:text-[7rem] font-black tracking-tighter mb-10 leading-[0.95] relative z-10 max-w-4xl text-white">
          Open Source Software, <br className="hidden md:block" />
          <span className="relative inline-block mt-2 md:mt-4 text-gray-300">
            Built Together.
          </span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="max-w-xl text-lg md:text-xl text-gray-400 mb-16 leading-loose font-medium">
          AshcrestHQ builds free, open source tools for developers — including Janus, a security-first microkernel OS, and Aegis, a full-featured Discord bot. Everything we build is public from day one.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6">
          <Link href="/projects" className="bg-primary hover:bg-primary-hover text-black text-sm font-bold px-10 py-5 rounded-full transition-colors flex items-center gap-3 group">
            See what we built
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="https://github.com/AshcrestHQ" className="text-gray-400 hover:text-white text-sm font-bold px-10 py-5 rounded-full flex items-center gap-3 transition-colors">
            Read the code
          </Link>
        </motion.div>
      </motion.section>

      {/* Featured Projects Offset Grid */}
      <motion.section 
        className="w-full py-40 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <motion.div variants={itemVariants} className="flex flex-col items-start mb-24 relative z-10 md:ml-32 max-w-lg">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">The Engines</h2>
          <p className="text-lg text-gray-400 font-medium leading-relaxed">What keeps our collective running in the dark.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto relative z-10 w-full">
          {/* Aegis Card */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            className="w-full glass-card-organic p-6 md:p-12 group cursor-pointer border-t-blue-500/20 relative overflow-hidden flex flex-col justify-between" 
            onClick={() => window.location.href='https://github.com/AshcrestHQ/aegis'}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-10">
                <Shield className="w-8 h-8 text-blue-400" />
                <h3 className="text-3xl font-black tracking-tight text-white">Aegis</h3>
              </div>
              <p className="text-gray-300 text-base mb-12 leading-relaxed font-medium">
                Our custom Discord moderation bot powered by Java 26 Virtual Threads. It literally never sleeps.
              </p>
            </div>

            <div className="flex items-center gap-4 relative z-10">
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Java</span>
              <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">Bot</span>
            </div>
          </motion.div>
          
          {/* Janus Card - Offset vertically */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            className="w-full glass-card-organic p-6 md:p-12 group cursor-pointer border-t-primary/20 relative overflow-hidden flex flex-col justify-between md:mt-32" 
            onClick={() => window.location.href='https://github.com/AshcrestHQ/janus'}
          >
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px] -mr-16 -mb-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-10">
                <Terminal className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-black tracking-tight text-white">Janus</h3>
              </div>
              <p className="text-gray-400 text-base mb-12 leading-relaxed">
                The next-generation operating environment for high-availability distributed nodes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 relative z-10">
              <span className="text-primary text-xs font-bold tracking-widest uppercase">TypeScript</span>
            </div>
          </motion.div>

          {/* Holocron Card - Offset vertically differently */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            className="w-full glass-card-organic p-6 md:p-12 group cursor-pointer border-t-purple-500/20 relative overflow-hidden flex flex-col justify-between md:mt-16" 
            onClick={() => window.location.href='https://github.com/AshcrestHQ/holocron'}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[60px] -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-10">
                <Code2 className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-black tracking-tight text-white">Holocron</h3>
              </div>
              <p className="text-gray-400 text-base mb-12 leading-relaxed">
                Our learn-by-doing CLI. Teaches security fundamentals and open source contribution side by side, so you're actually ready to open a PR by the time you're done.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 relative z-10">
              <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">CLI</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Join Community CTA */}
      <motion.section 
        className="w-full max-w-4xl mx-auto py-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="glass-card-organic p-8 md:p-16 lg:p-24 text-center relative overflow-hidden flex flex-col items-center border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10 tracking-tighter text-white">Come build with us.</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-16 relative z-10 text-lg leading-loose">
            We don't care about your resume. If you love shipping fast code and breaking things, you belong in our Discord.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 relative z-10">
            <Link href="https://discord.gg/35ubQnrzD" className="bg-white hover:bg-gray-200 text-black text-sm font-bold px-10 py-5 rounded-full transition-colors shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)]">
              Jump into Discord
            </Link>
            <Link href="/docs" className="text-gray-400 hover:text-white text-sm font-bold px-8 py-5 flex items-center gap-3 transition-colors group">
              Read the Docs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
