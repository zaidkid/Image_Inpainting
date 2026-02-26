"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center text-center justify-center px-6 pt-32 pb-24 overflow-hidden">

      {/* Clean minimal background */}
      <div className="absolute inset-0 -z-20 bg-[#F5EFE3]" />
      <div className="absolute inset-0 -z-10 bg-[url('/grain.jpg')] opacity-[0.06]" />

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="font-serif text-[2.3rem] md:text-[3.3rem] leading-[1.15] font-semibold text-[#2C241C] max-w-2xl"
      >
        AI Artifact Inpainting
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.65 }}
        className="text-[#61594D] text-[0.95rem] md:text-[1.05rem] max-w-xl mt-3 leading-relaxed font-light"
      >
        Restore damaged museum artifacts using advanced deep-learning inpainting —
        preserving true cultural details with AI.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.65 }}
        className="flex flex-wrap gap-4 mt-10 justify-center"
      >
        <Link
          href="/upload"
          className="px-8 py-3 rounded-full text-sm font-medium bg-[#2C241C] text-white hover:bg-black transition-all duration-200"
        >
          Try Now
        </Link>

        <Link
          href="#learn"
          className="px-8 py-3 rounded-full text-sm font-medium border border-[#2C241C]/90 text-[#2C241C] hover:bg-[#E7E0D6] transition-all duration-200"
        >
          How It Works
        </Link>
      </motion.div>

    </section>
  );
};
