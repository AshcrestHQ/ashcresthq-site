"use client";

import { motion } from "framer-motion";
import { Server, Users, Code2, Mail, Palette, Terminal } from "lucide-react";
import Link from "next/link";

const TEAM = [
  {
    name: "Placeholder Member 1",
    role: "Lead Protocol Engineer",
    bio: "Architect of the core communication systems. Previously scaled infrastructure at major tech firms.",
    avatar: "https://ui-avatars.com/api/?name=P+1&background=0D1117&color=E07B39",
    skills: ["Rust", "Systems Design", "Networking"],
    icons: [Code2, Mail]
  },
  {
    name: "Placeholder Member 2",
    role: "Frontend Architect",
    bio: "Obsessed with performance and micro-interactions. Brings the cosmic void to life in the browser.",
    avatar: "https://ui-avatars.com/api/?name=P+2&background=0D1117&color=E07B39",
    skills: ["TypeScript", "React", "WebGL"],
    icons: [Palette, Code2]
  },
  {
    name: "Placeholder Member 3",
    role: "Security & Operations",
    bio: "Ensures the network remains impenetrable. Builds automated moderation tools like Aegis.",
    avatar: "https://ui-avatars.com/api/?name=P+3&background=0D1117&color=E07B39",
    skills: ["Java", "PostgreSQL", "DevSecOps"],
    icons: [Terminal, Server]
  }
];

export default function Team() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">The Collective</h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          AshcrestHQ is maintained by a small, dedicated team of engineers distributed across the globe, united by a passion for high-performance open-source tools.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {TEAM.map((member, i) => (
          <motion.div 
            key={member.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 rounded-3xl relative group flex flex-col"
          >
            <div className="w-20 h-20 rounded-full mb-6 overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-semibold tracking-wide uppercase">{member.role}</p>
            </div>
            
            <p className="text-gray-400 text-sm text-center leading-relaxed mb-8 flex-grow">
              {member.bio}
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {member.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 font-medium">
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="flex justify-center gap-4 pt-6 border-t border-white/5 mt-auto">
              {member.icons.map((Icon, index) => (
                <Link key={index} href="#" className="text-gray-500 hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-10 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
        <h2 className="text-2xl font-bold mb-4 relative z-10">Join the Core Team</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8 relative z-10">
          We are always looking for exceptional engineers to join as Maintainers. The best way to join is to start contributing to our open repositories.
        </p>
        <Link href="/contribute" className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 rounded-full transition-all shadow-[0_0_15px_rgba(224,123,57,0.3)] relative z-10 inline-block">
          Start Contributing
        </Link>
      </motion.div>
    </div>
  );
}
