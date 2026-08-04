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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section 
        className="w-full min-h-[75vh] flex flex-col items-center justify-center text-center relative mt-10 md:mt-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl rounded-tr-md glass-button mb-10 text-sm font-bold text-primary shadow-[0_5px_20px_rgba(224,123,57,0.2)] rotate-[-1deg] hover:rotate-0 transition-transform cursor-default">
          <Rocket className="w-4 h-4" />
          <span>We just shipped v3.0</span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1] relative z-10">
          Built for the <br className="hidden md:block" />
          <span className="relative inline-block mt-2 md:mt-4">
            Cosmic Void
            {/* Hand-drawn SVG underline */}
            <svg className="absolute w-full h-4 -bottom-1 md:-bottom-2 left-0 text-primary opacity-80" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M2 6.5C45.5 2.5 120 -1.5 198 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="drop-shadow-[0_2px_4px_rgba(224,123,57,0.5)]"/>
            </svg>
          </span>
          .
        </motion.h1>
        
        <motion.p variants={itemVariants} className="max-w-2xl text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed font-medium">
          We engineer high-performance systems and build tools for developers who actually care about their craft.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6">
          <motion.div whileHover={{ scale: 1.05, rotate: -2 }} whileTap={{ scale: 0.95 }}>
            <Link href="/projects" className="bg-primary text-black text-lg font-black px-10 py-4 rounded-3xl rounded-bl-lg transition-all shadow-[0_10px_30px_-10px_rgba(224,123,57,0.6)] flex items-center gap-3">
              See what we built
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }}>
            <Link href="https://github.com/AshcrestHQ" className="glass-button text-white text-lg font-bold px-10 py-4 rounded-3xl rounded-tr-lg flex items-center gap-3 group border-white/20">
              Read the code
              <Code2 className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Featured Projects Bento Box */}
      <motion.section 
        className="w-full py-32 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.div variants={itemVariants} className="flex flex-col items-start mb-16 relative z-10 pl-4 md:pl-8 border-l-4 border-primary/50">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">The Engines.</h2>
          <p className="text-xl text-gray-400 font-medium">What keeps our collective running in the dark.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {/* Aegis Card - Spans 2 columns on Desktop */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -8, scale: 1.02, rotateX: 2 }}
            className="lg:col-span-2 glass-card-organic p-10 md:p-14 group cursor-pointer border-t-blue-500/30 border-l-blue-500/20 relative overflow-hidden flex flex-col justify-between" 
            onClick={() => window.location.href='https://github.com/AshcrestHQ/aegis'}
            style={{ perspective: "1000px" }}
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-blue-500/20 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-blue-500/10 rounded-2xl rounded-tr-sm rotate-[-5deg] group-hover:rotate-0 transition-transform">
                  <Shield className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-4xl font-black tracking-tight">Aegis</h3>
              </div>
              <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-md leading-relaxed font-medium">
                Our custom Discord moderation bot powered by Java 26 Virtual Threads. It literally never sleeps.
              </p>
            </div>

            <div className="flex items-center gap-3 relative z-10">
              <span className="px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold tracking-wider uppercase">Java</span>
              <span className="px-4 py-1.5 rounded-full bg-white/10 text-gray-200 text-sm font-bold tracking-wider uppercase border border-white/5">Bot</span>
            </div>
          </motion.div>
          
          {/* Janus Card - Spans 1 column */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -8, scale: 1.02, rotateX: 2 }}
            className="lg:col-span-1 glass-card-organic p-10 group cursor-pointer border-t-primary/30 border-l-primary/20 relative overflow-hidden flex flex-col justify-between" 
            onClick={() => window.location.href='https://github.com/AshcrestHQ/janus'}
          >
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[60px] -mr-16 -mb-16 group-hover:bg-primary/20 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-primary/10 rounded-2xl rounded-bl-sm rotate-[5deg] group-hover:rotate-0 transition-transform">
                  <Terminal className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-black tracking-tight">Janus</h3>
              </div>
              <p className="text-gray-300 text-lg mb-12 leading-relaxed font-medium">
                The next-generation operating environment for high-availability distributed nodes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 relative z-10">
              <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary-hover text-sm font-bold tracking-wider uppercase">TypeScript</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Join Community CTA */}
      <motion.section 
        className="w-full max-w-5xl mx-auto py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="glass-card-organic rounded-[4rem] rounded-tl-[2rem] p-16 text-center relative overflow-hidden flex flex-col items-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 relative z-10 tracking-tighter">Come build with us.</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-12 relative z-10 text-xl font-medium leading-relaxed">
            We don't care about your resume. If you love shipping fast code and breaking things, you belong in our Discord.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="https://discord.gg/35ubQnrzD" className="bg-white text-black font-black px-10 py-4 rounded-3xl rounded-tr-lg shadow-[0_10px_30px_-10px_rgba(255,255,255,0.4)]">
                Jump into Discord
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/docs" className="glass-button text-white font-bold px-10 py-4 rounded-3xl rounded-bl-lg flex items-center gap-2 group border-white/20">
                Read the Docs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
