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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-6 md:px-8 pointer-events-none"
    >
      <nav className="max-w-5xl mx-auto glass backdrop-blur-3xl bg-white/10 px-8 py-3 rounded-[2rem] rounded-bl-[1rem] pointer-events-auto border border-white/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-extrabold text-2xl tracking-tighter text-white hover:text-primary transition-colors flex items-center gap-2 group">
              <span className="bg-primary text-black px-2 py-0.5 rounded-md -rotate-3 group-hover:rotate-0 transition-transform">A</span>
              shcrest
            </Link>
            <div className="hidden md:flex items-center gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-all px-4 py-2 rounded-xl relative overflow-hidden group ${
                    pathname === link.href ? "text-primary" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {pathname === link.href && (
                    <motion.div 
                      layoutId="navIndicator"
                      className="absolute inset-0 bg-primary/10 rounded-xl"
                      transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-black/20 border border-white/10 rounded-full pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 focus:bg-black/40 transition-all w-48 focus:w-64 placeholder-gray-500 text-white shadow-inner"
              />
            </div>
            <motion.div whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }}>
              <Link href="/docs" className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-hover text-black text-sm font-bold px-6 py-2.5 rounded-2xl rounded-tr-md transition-all shadow-[0_5px_20px_rgba(224,123,57,0.4)]">
                Get Started
                <Rocket className="w-4 h-4" />
              </Link>
            </motion.div>
            <button 
              className="md:hidden p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
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
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="md:hidden mt-4 pt-4 border-t border-white/10 overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 text-sm font-bold transition-all p-4 rounded-2xl ${
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
                    className="w-full bg-black/20 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-primary/50 text-white"
                  />
                </div>
                <Link 
                  href="/docs" 
                  onClick={() => setIsOpen(false)}
                  className="bg-primary text-center text-black hover:bg-primary-hover text-sm font-bold px-5 py-4 rounded-2xl mt-4 shadow-[0_5px_20px_rgba(224,123,57,0.4)]"
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
