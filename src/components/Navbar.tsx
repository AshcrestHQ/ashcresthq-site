"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Rocket, Shield, BookOpen, Users, Radio, Users2, Menu, X } from "lucide-react";
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
      className="fixed top-0 left-0 right-0 z-50 px-4 py-6 md:px-8 pointer-events-none"
    >
      <nav className="max-w-6xl mx-auto backdrop-blur-[60px] bg-black/50 px-8 py-4 rounded-3xl pointer-events-auto border border-white/10 border-t-white/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="font-black text-2xl tracking-tighter text-white hover:text-primary transition-colors flex items-center gap-2 group">
              <img src="/ashcresthq-logo.png" alt="AshcrestHQ Logo" className="w-8 h-8 object-contain" />
              AshcrestHQ
            </Link>
            <div className="hidden md:flex items-center gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium tracking-wide transition-all px-2 py-1 relative group ${
                    pathname === link.href ? "text-primary" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {pathname === link.href && (
                    <motion.div 
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full opacity-80"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-primary/40 focus:bg-white/10 transition-all w-48 focus:w-64 placeholder-gray-500 text-white"
              />
            </div>
            <Link href="/docs" className="hidden md:flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 text-[13px] font-bold px-6 py-2.5 rounded-xl transition-colors">
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
              className="md:hidden mt-6 pt-6 border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 text-sm font-medium transition-colors p-4 rounded-2xl ${
                      pathname === link.href ? "bg-primary/10 text-primary" : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <div className={`p-2 rounded-xl ${pathname === link.href ? 'bg-primary/20' : 'bg-white/5'}`}>
                      <link.icon className="w-4 h-4" />
                    </div>
                    {link.label}
                  </Link>
                ))}
                <div className="relative mt-4">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-primary/40 text-white"
                  />
                </div>
                <Link 
                  href="/docs" 
                  onClick={() => setIsOpen(false)}
                  className="bg-primary/10 text-center text-primary hover:bg-primary/20 text-sm font-bold px-5 py-4 rounded-xl mt-4 transition-colors"
                >
                  Get Started Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
}
