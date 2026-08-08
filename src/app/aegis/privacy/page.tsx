import { Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Aegis",
  description: "Privacy Policy for Aegis, AshcrestHQ's zero-tolerance moderation bot.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 mb-20">
      <div className="mb-20 border-l border-primary/30 pl-8">
        <h1 className="text-4xl md:text-[3.5rem] font-black mb-6 tracking-tighter text-white leading-none">Privacy Policy — Aegis</h1>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-[11px]">Last updated: August 5, 2026</p>
      </div>

      <div className="space-y-10 text-gray-400 text-lg leading-loose font-medium">
        <p className="text-xl text-gray-300">
          Aegis is a Discord bot operated by AshcrestHQ. This policy explains what 
          data Aegis collects, why, and how it's handled.
        </p>

        <h2 className="text-3xl font-black text-white mt-16 mb-8 flex items-center gap-4 tracking-tight">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          What We Collect
        </h2>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="w-1.5 h-1.5 mt-3.5 rounded-full bg-primary shrink-0"></div>
            <div><strong className="text-white">Discord identifiers</strong>: your Discord user ID, username, and the ID of servers (guilds) where Aegis is active. This is how Discord bots work — we can't avoid seeing this.</div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-1.5 h-1.5 mt-3.5 rounded-full bg-primary shrink-0"></div>
            <div><strong className="text-white">Message content</strong>: only when you directly use the <code className="bg-white/5 border border-white/10 px-2 py-1 rounded-md text-[13px] text-gray-300">/ask</code> command. That message is sent to Google's Gemini API to generate a response and is not stored by us afterward.</div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-1.5 h-1.5 mt-3.5 rounded-full bg-primary shrink-0"></div>
            <div><strong className="text-white">Game/economy data</strong>: if you use Aegis's Cyber Breach RPG features (<code className="bg-white/5 border border-white/10 px-2 py-1 rounded-md text-[13px] text-gray-300">/hack</code>, <code className="bg-white/5 border border-white/10 px-2 py-1 rounded-md text-[13px] text-gray-300">/daily</code>, <code className="bg-white/5 border border-white/10 px-2 py-1 rounded-md text-[13px] text-gray-300">/profile</code>), we store your credits, XP, level, and hack success/failure counts to make the game persistent.</div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-1.5 h-1.5 mt-3.5 rounded-full bg-primary shrink-0"></div>
            <div><strong className="text-white">Wiki contributions</strong>: if you submit an entry via <code className="bg-white/5 border border-white/10 px-2 py-1 rounded-md text-[13px] text-gray-300">/wikiadd</code>, we store the content and your username as the contributor, visible to others in the server.</div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-1.5 h-1.5 mt-3.5 rounded-full bg-primary shrink-0"></div>
            <div><strong className="text-white">Security audit logs</strong>: <code className="bg-white/5 border border-white/10 px-2 py-1 rounded-md text-[13px] text-gray-300">/audit</code> and anti-raid monitoring log event type, the target's ID, and relevant details, for server moderation purposes.</div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-1.5 h-1.5 mt-3.5 rounded-full bg-primary shrink-0"></div>
            <div><strong className="text-white">Voice channel activity</strong>: only while actively playing music via <code className="bg-white/5 border border-white/10 px-2 py-1 rounded-md text-[13px] text-gray-300">/play</code> — we access voice state to connect and stream audio. We do not record or store audio.</div>
          </li>
        </ul>

        <h2 className="text-3xl font-black text-white mt-20 mb-8 tracking-tight">What We Don't Collect</h2>
        <p>
          We do not read, log, or store message content outside of active <code className="bg-white/5 border border-white/10 px-2 py-1 rounded-md text-[13px] text-gray-300">/ask</code> requests. We do not track your activity across servers Aegis isn't in. 
          We do not sell or share your data with advertisers — Aegis is not ad-supported.
        </p>

        <h2 className="text-3xl font-black text-white mt-20 mb-8 tracking-tight">Third-Party Services</h2>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="w-1.5 h-1.5 mt-3.5 rounded-full bg-blue-400 shrink-0"></div>
            <div><strong className="text-white">Google Gemini API</strong> — processes <code className="bg-white/5 border border-white/10 px-2 py-1 rounded-md text-[13px] text-gray-300">/ask</code> prompts. Subject to Google's own privacy policy for API usage.</div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-1.5 h-1.5 mt-3.5 rounded-full bg-blue-400 shrink-0"></div>
            <div><strong className="text-white">YouTube / Apple Music</strong> — used only to resolve song metadata and stream audio for the <code className="bg-white/5 border border-white/10 px-2 py-1 rounded-md text-[13px] text-gray-300">/play</code> command. No account linking or personal data is sent.</div>
          </li>
        </ul>

        <h2 className="text-3xl font-black text-white mt-20 mb-8 tracking-tight">Data Storage & Retention</h2>
        <p>
          Data is stored in a PostgreSQL database operated by AshcrestHQ. Economy, 
          wiki, and audit data persist until you request deletion or a server 
          removes Aegis and requests its data be purged.
        </p>

        <h2 className="text-3xl font-black text-white mt-20 mb-8 tracking-tight">Your Rights</h2>
        <p>
          You can request deletion of your economy/game data, wiki contributions, 
          or audit log entries by contacting us at <a href="mailto:medhansh.hq@outlook.com" className="text-primary hover:text-primary-hover font-bold transition-colors">medhansh.hq@outlook.com</a> or opening an 
          issue at <a href="https://github.com/AshcrestHQ/Aegis" className="text-primary hover:text-primary-hover font-bold transition-colors">github.com/AshcrestHQ/Aegis</a>. We'll respond within a reasonable 
          timeframe.
        </p>

        <h2 className="text-3xl font-black text-white mt-20 mb-8 tracking-tight">Children's Privacy</h2>
        <p>
          Aegis is intended for use in accordance with Discord's own Terms of 
          Service, which requires users to be at least 13 years old (or the 
          applicable age in your region). We do not knowingly collect data from 
          users below this age beyond what Discord itself requires.
        </p>

        <h2 className="text-3xl font-black text-white mt-20 mb-8 tracking-tight">Changes to This Policy</h2>
        <p>
          We may update this policy as Aegis's features change. Material changes 
          will be announced in our Discord server and reflected here with an 
          updated date.
        </p>

        <h2 className="text-3xl font-black text-white mt-20 mb-8 tracking-tight">Contact</h2>
        <p>
          Questions about this policy: <a href="mailto:medhansh.hq@outlook.com" className="text-primary hover:text-primary-hover font-bold transition-colors">medhansh.hq@outlook.com</a> or via our Discord server: <a href="https://discord.gg/hjYnzP4Dth" className="text-primary hover:text-primary-hover font-bold transition-colors">discord.gg/hjYnzP4Dth</a>
        </p>
      </div>
    </div>
  );
}
