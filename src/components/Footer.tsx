import Link from "next/link";
import { Code2, MessagesSquare, Mail, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto py-24 px-4 md:px-12 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto glass-card-organic p-12 md:p-20 flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
        <div className="flex flex-col items-start gap-6 max-w-sm">
          <div className="font-black text-3xl tracking-tighter text-white">
            <span className="text-primary mr-1">A</span>shcrest
          </div>
          <p className="text-gray-400 text-[15px] leading-relaxed font-medium">
            Built by humans in the dark. Open source by default. Everything is released under the MIT License unless stated otherwise.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12">
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-gray-500 text-xs uppercase tracking-widest mb-1">Code</h4>
            <Link href="https://github.com/AshcrestHQ" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 text-sm font-medium">
              <Code2 className="w-4 h-4 opacity-50" />
              GitHub
            </Link>
          </div>
          
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-gray-500 text-xs uppercase tracking-widest mb-1">Chat</h4>
            <Link href="https://discord.gg/35ubQnrzD" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 text-sm font-medium">
              <MessagesSquare className="w-4 h-4 opacity-50" />
              Discord
            </Link>
            <Link href="mailto:medhansh.hq@outlook.com" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 text-sm font-medium">
              <Mail className="w-4 h-4 opacity-50" />
              Email Us
            </Link>
            <Link href="https://linkedin.com/company/AshcrestHQ" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 text-sm font-medium">
              <Users className="w-4 h-4 opacity-50" />
              LinkedIn
            </Link>
          </div>
          
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-gray-500 text-xs uppercase tracking-widest mb-1">Aegis - Legal</h4>
            <Link href="/aegis/privacy" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 text-sm font-medium">
              Privacy Policy
            </Link>
            <Link href="/aegis/terms" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 text-sm font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
