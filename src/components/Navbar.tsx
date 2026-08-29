"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rocket, Shield, BookOpen, Users, Radio, Users2, Menu, X, GitBranch } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home", icon: Rocket },
    { href: "/projects", label: "Projects", icon: Shield },
    { href: "/docs", label: "Docs", icon: BookOpen },
    { href: "/contribute", label: "Contribute", icon: Users },
    { href: "/community", label: "Community", icon: Users2 },
    { href: "/blog", label: "Blog", icon: Radio },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-5 md:px-8 pointer-events-none"
    >
      <nav className="max-w-6xl mx-auto backdrop-blur-[60px] bg-black/60 px-6 py-3.5 rounded-3xl pointer-events-auto border border-white/10 border-t-white/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-black text-xl tracking-tighter text-white hover:text-primary transition-colors flex items-center gap-2.5 group">
              <img src="/ashcresthq-logo.png" alt="AshcrestHQ Logo" className="w-7 h-7 object-contain" />
              <span>AshcrestHQ</span>
            </Link>

            <div className="hidden md:flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[12px] font-bold tracking-wide transition-all px-4 py-1.5 rounded-full relative ${
                    pathname === link.href ? "text-black font-extrabold" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {pathname === link.href && (
                    <motion.div 
                      layoutId="navIndicator"
                      className="absolute inset-0 bg-primary rounded-full shadow-md shadow-primary/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com/AshcrestHQ" 
              target="_blank"
              className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-mono font-bold px-4 py-2 rounded-full border border-white/10 transition-all"
            >
              <GitBranch className="w-3.5 h-3.5 text-primary" />
              <span>GitHub Org</span>
            </Link>

            <Link href="/docs" className="hidden md:flex items-center gap-2 bg-primary text-black hover:bg-primary-hover text-[12px] font-bold px-5 py-2 rounded-full transition-all shadow-md shadow-primary/20">
              Get Started
            </Link>

            <button 
              className="md:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="md:hidden mt-4 pt-4 border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 text-sm font-medium transition-colors p-3.5 rounded-2xl ${
                      pathname === link.href ? "bg-primary/10 text-primary font-bold" : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div className={`p-2 rounded-xl ${pathname === link.href ? 'bg-primary/20' : 'bg-white/5'}`}>
                      <link.icon className="w-4 h-4" />
                    </div>
                    {link.label}
                  </Link>
                ))}
                
                <Link 
                  href="https://github.com/AshcrestHQ"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-white/5 text-gray-300 text-xs font-mono font-bold px-5 py-3 rounded-xl mt-2 border border-white/10"
                >
                  <GitBranch className="w-4 h-4 text-primary" />
                  <span>GitHub Organization</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
}
