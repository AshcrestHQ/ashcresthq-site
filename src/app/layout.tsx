import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ashcresthq.dpdns.org"),
  title: { default: "AshcrestHQ", template: "%s | AshcrestHQ" },
  description: "Open source software, built together. High-performance developer tools forged in the cosmic void.",
  openGraph: {
    type: "website",
    siteName: "AshcrestHQ",
    images: ["/ashcresthq-logo.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${jetbrains.variable} font-sans antialiased min-h-[100dvh] flex flex-col relative`}
      >
        <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.04] pointer-events-none mix-blend-overlay"></div>
        <Navbar />
        <main className="flex-grow pt-28 pb-4 relative z-10 w-full overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
