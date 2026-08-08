import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs",
  description: "Documentation for AshcrestHQ tools. Learn how to use and contribute to our ecosystem.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
