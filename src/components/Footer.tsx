import Link from "next/link";
import { Code2, MessagesSquare, Mail, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto py-16 px-4 md:px-12 relative z-10 overflow-hidden">
      <div className="absolute top-0 right-[10%] w-[30vw] h-[30vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto glass-card-organic p-10 md:p-14 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6 border-white/10">
        <div className="flex flex-col items-start gap-4 max-w-sm">
          <div className="font-extrabold text-3xl tracking-tighter flex items-center gap-2 group cursor-default">
            <span className="bg-primary text-black px-2.5 py-1 rounded-lg rotate-6 group-hover:-rotate-3 transition-transform duration-500">A</span>
            shcrest
          </div>
          <p className="text-gray-400 text-sm leading-relaxed font-medium">
            Built by humans in the dark. Open source by default. Everything is released under the MIT License unless stated otherwise.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-2 opacity-50">Code</h4>
            <Link href="https://github.com/AshcrestHQ" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-3 text-sm font-bold group">
              <div className="p-2 rounded-xl bg-white/5 group-hover:bg-primary/20 transition-colors">
                <Code2 className="w-4 h-4 group-hover:text-primary transition-colors" />
              </div>
              GitHub
            </Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-2 opacity-50">Chat</h4>
            <Link href="https://discord.gg/35ubQnrzD" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-3 text-sm font-bold group">
              <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#5865F2]/20 transition-colors">
                <MessagesSquare className="w-4 h-4 group-hover:text-[#5865F2] transition-colors" />
              </div>
              Discord
            </Link>
            <Link href="mailto:medhansh.hq@outlook.com" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-3 text-sm font-bold group">
              <div className="p-2 rounded-xl bg-white/5 group-hover:bg-amber-500/20 transition-colors">
                <Mail className="w-4 h-4 group-hover:text-amber-400 transition-colors" />
              </div>
              Email Us
            </Link>
            <Link href="https://linkedin.com/company/AshcrestHQ" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-3 text-sm font-bold group">
              <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#0A66C2]/20 transition-colors">
                <Users className="w-4 h-4 group-hover:text-[#0A66C2] transition-colors" />
              </div>
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
