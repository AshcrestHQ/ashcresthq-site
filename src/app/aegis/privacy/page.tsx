import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="mb-12 border-l-4 border-primary/50 pl-6">
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-white">Privacy Policy — Aegis</h1>
        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Last updated: August 5, 2026</p>
      </div>

      <div className="space-y-8 text-gray-300 text-lg leading-relaxed font-medium">
        <p>
          Aegis is a Discord bot operated by AshcrestHQ. This policy explains what 
          data Aegis collects, why, and how it's handled.
        </p>

        <h2 className="text-2xl font-black text-white mt-12 mb-6 flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-xl rotate-[-5deg]">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          What We Collect
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary/80 shrink-0"></div>
            <div><strong>Discord identifiers</strong>: your Discord user ID, username, and the ID of servers (guilds) where Aegis is active. This is how Discord bots work — we can't avoid seeing this.</div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary/80 shrink-0"></div>
            <div><strong>Message content</strong>: only when you directly use the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-white">/ask</code> command. That message is sent to Google's Gemini API to generate a response and is not stored by us afterward.</div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary/80 shrink-0"></div>
            <div><strong>Game/economy data</strong>: if you use Aegis's Cyber Breach RPG features (<code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-white">/hack</code>, <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-white">/daily</code>, <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-white">/profile</code>), we store your credits, XP, level, and hack success/failure counts to make the game persistent.</div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary/80 shrink-0"></div>
            <div><strong>Wiki contributions</strong>: if you submit an entry via <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-white">/wikiadd</code>, we store the content and your username as the contributor, visible to others in the server.</div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary/80 shrink-0"></div>
            <div><strong>Security audit logs</strong>: <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-white">/audit</code> and anti-raid monitoring log event type, the target's ID, and relevant details, for server moderation purposes.</div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-primary/80 shrink-0"></div>
            <div><strong>Voice channel activity</strong>: only while actively playing music via <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-white">/play</code> — we access voice state to connect and stream audio. We do not record or store audio.</div>
          </li>
        </ul>

        <h2 className="text-2xl font-black text-white mt-12 mb-6">What We Don't Collect</h2>
        <p>
          We do not read, log, or store message content outside of active <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-white">/ask</code> requests. We do not track your activity across servers Aegis isn't in. 
          We do not sell or share your data with advertisers — Aegis is not ad-supported.
        </p>

        <h2 className="text-2xl font-black text-white mt-12 mb-6">Third-Party Services</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-blue-400 shrink-0"></div>
            <div><strong>Google Gemini API</strong> — processes <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-white">/ask</code> prompts. Subject to Google's own privacy policy for API usage.</div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-blue-400 shrink-0"></div>
            <div><strong>YouTube / Apple Music</strong> — used only to resolve song metadata and stream audio for the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-white">/play</code> command. No account linking or personal data is sent.</div>
          </li>
        </ul>

        <h2 className="text-2xl font-black text-white mt-12 mb-6">Data Storage & Retention</h2>
        <p>
          Data is stored in a PostgreSQL database operated by AshcrestHQ. Economy, 
          wiki, and audit data persist until you request deletion or a server 
          removes Aegis and requests its data be purged.
        </p>

        <h2 className="text-2xl font-black text-white mt-12 mb-6">Your Rights</h2>
        <p>
          You can request deletion of your economy/game data, wiki contributions, 
          or audit log entries by contacting us at <a href="mailto:medhansh.hq@outlook.com" className="text-primary hover:underline font-bold">medhansh.hq@outlook.com</a> {/* TODO: add real contact email */} or opening an 
          issue at <a href="https://github.com/AshcrestHQ/Aegis" className="text-primary hover:underline font-bold">github.com/AshcrestHQ/Aegis</a>. We'll respond within a reasonable 
          timeframe.
        </p>

        <h2 className="text-2xl font-black text-white mt-12 mb-6">Children's Privacy</h2>
        <p>
          Aegis is intended for use in accordance with Discord's own Terms of 
          Service, which requires users to be at least 13 years old (or the 
          applicable age in your region). We do not knowingly collect data from 
          users below this age beyond what Discord itself requires.
        </p>

        <h2 className="text-2xl font-black text-white mt-12 mb-6">Changes to This Policy</h2>
        <p>
          We may update this policy as Aegis's features change. Material changes 
          will be announced in our Discord server and reflected here with an 
          updated date.
        </p>

        <h2 className="text-2xl font-black text-white mt-12 mb-6">Contact</h2>
        <p>
          Questions about this policy: <a href="mailto:medhansh.hq@outlook.com" className="text-primary hover:underline font-bold">medhansh.hq@outlook.com</a> {/* TODO: add real contact email */} or via our Discord server: <a href="https://discord.gg/hjYnzP4Dth" className="text-primary hover:underline font-bold">discord.gg/hjYnzP4Dth</a>
        </p>
      </div>
    </div>
  );
}
