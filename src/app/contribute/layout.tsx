import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contribute",
  description: "Get involved with AshcrestHQ. Fork, clone, and build the future of open source with us.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
