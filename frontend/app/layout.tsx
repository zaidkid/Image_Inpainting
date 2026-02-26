// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Museum Artifact Restore AI",
  description: "AI-powered restoration of damaged museum artifacts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0F0E0C] text-white min-h-screen relative font-sans">

        {/* 🏛️ Dark Museum Stone Background */}
        <div className="fixed inset-0 -z-30 bg-[#0F0E0C]" />

        {/* 🎨 Subtle stone texture */}
        <div className="fixed inset-0 -z-20 bg-[url('/grain-dark.png')] opacity-[0.12]" />

        {/* 🕯️ Soft vignette spotlight edges */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0)_55%,_rgba(0,0,0,0.5)_100%)]" />

        <Navbar />
        
        {/* Main content container */}
        <main className="">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
