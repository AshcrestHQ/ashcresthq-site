"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Rocket, Shield, BookOpen, Users, Radio, Users2 } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: Rocket },
    { href: "/projects", label: "Projects", icon: Shield },
    { href: "/docs", label: "Docs", icon: BookOpen },
    { href: "/contribute", label: "Contribute", icon: Users },
    { href: "/community", label: "Community", icon: Users2 },
    { href: "/blog", label: "Blog", icon: Radio },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <nav className="max-w-5xl mx-auto glass rounded-2xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl tracking-tight text-white hover:text-primary transition-colors">
            AshcrestHQ
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  pathname === link.href ? "text-primary" : "text-gray-400"
                }`}
              >
                {link.label}
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
              className="bg-black/20 border border-white/10 rounded-full pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all w-48 placeholder-gray-500 text-white"
            />
          </div>
          <Link href="/docs" className="bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-5 py-2 rounded-full transition-all shadow-[0_0_15px_rgba(224,123,57,0.4)] hover:shadow-[0_0_25px_rgba(224,123,57,0.6)]">
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
}
