import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore AshcrestHQ's open source developer tools, including Janus, Aegis, Holocron, and Terra.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
