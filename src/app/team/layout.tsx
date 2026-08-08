import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team building AshcrestHQ's high-performance developer tools.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
