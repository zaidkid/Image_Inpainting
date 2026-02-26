"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ResultPage() {
  const [original, setOriginal] = useState<string | null>(null);
  const [restored, setRestored] = useState<string | null>(null);

  useEffect(() => {
    const orig = localStorage.getItem("original");
    const rest = localStorage.getItem("restored");

    if (orig) setOriginal(orig);
    if (rest) setRestored(rest);
  }, []);

  const handleDownload = () => {
    if (!restored) return;
    const link = document.createElement("a");
    link.href = `http://localhost:5000${restored}`;
    link.download = "restored_artifact.png";
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#F5EFE3] flex flex-col items-center pt-32 pb-24 px-6">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-serif font-semibold text-[#2C241C]"
      >
        Restoration Completed
      </motion.h1>

      {/* Status */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-2 text-xs font-medium tracking-wide text-green-600 bg-green-100/70 px-3 py-1 rounded-full"
      >
        AI Restoration Successful
      </motion.span>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-sm text-[#6B645B] mt-6 mb-12 max-w-md text-center leading-relaxed"
      >
        Compare the original and restored artifact processed by our AI inpainting model.
      </motion.p>

      {/* Images */}
      {original && restored ? (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10"
        >

          {/* BEFORE */}
          <div className="space-y-4">
            <h3 className="text-xs text-[#423B35] uppercase tracking-wide font-medium">Before</h3>
            <div className="bg-white rounded-xl p-4 border border-[#C5BCAD] shadow-sm">
              <img
                src={`http://localhost:5000${original}`}
                alt="Before Restoration"
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* AFTER */}
          <div className="space-y-4">
            <h3 className="text-xs text-[#423B35] uppercase tracking-wide font-medium">After</h3>
            <div className="bg-white rounded-xl p-4 border border-[#C5BCAD] shadow-sm">
              <img
                src={`http://localhost:5000${restored}`}
                alt="After Restoration"
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>

        </motion.div>
      ) : (
        <p className="mt-16 text-[#7A736A] text-sm">
          No image found — please upload again.
        </p>
      )}

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="flex flex-wrap gap-4 mt-14"
      >
        <button
          onClick={handleDownload}
          disabled={!restored}
          className="px-6 py-2.5 flex items-center gap-2 rounded-full text-sm font-medium bg-[#2C241C] text-white hover:bg-black disabled:opacity-50 transition"
        >
          <Download size={16} />
          Download
        </button>

        <Link
          href="/upload"
          className="px-6 py-2.5 rounded-full text-sm font-medium border border-[#2C241C] text-[#2C241C] hover:bg-[#E6DDCF] transition"
        >
          Restore Another
        </Link>

        <Link
          href="/"
          className="px-6 py-2.5 rounded-full text-sm font-medium border border-[#B7AFA5] text-[#6A645C] hover:bg-[#E6DDCF] transition flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back Home
        </Link>
      </motion.div>

    </div>
  );
}
