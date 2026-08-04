import Link from "next/link";
import { Code2, MessagesSquare, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto py-12 px-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto glass rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-bold text-xl text-primary">AshcrestHQ</div>
          <div className="text-gray-400 text-sm">Released under the MIT License.</div>
        </div>
        
        <div className="flex items-center gap-6">
          <Link href="https://github.com/AshcrestHQ" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
            <Code2 className="w-5 h-5" />
            <span>GitHub</span>
          </Link>
          <Link href="https://discord.gg/35ubQnrzD" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
            <MessagesSquare className="w-5 h-5" />
            <span>Discord</span>
          </Link>
          <Link href="mailto:medhansh5@outlook.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
            <Mail className="w-5 h-5" />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
