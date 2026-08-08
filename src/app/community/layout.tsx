import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
  description: "Join the AshcrestHQ community. Connect with developers on Discord and GitHub.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
