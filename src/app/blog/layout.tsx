import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "The latest updates, technical deep dives, and announcements from AshcrestHQ.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
