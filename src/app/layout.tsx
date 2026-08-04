import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "AshcrestHQ",
  description: "High-performance developer tools forged in the cosmic void.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrains.variable} antialiased min-h-screen flex flex-col relative`}
      >
        <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
        <Navbar />
        <main className="flex-grow pt-32 pb-16 relative z-10 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
