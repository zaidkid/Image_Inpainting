"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Image as ImageIcon } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Preserve Heritage",
    desc: "Protect and restore cultural artifacts with historical accuracy."
  },
  {
    icon: <Cpu size={28} />,
    title: "AI Precision",
    desc: "Deep-learning inpainting rebuilds missing textures intelligently."
  },
  {
    icon: <ImageIcon size={28} />,
    title: "Museum-Grade Results",
    desc: "Designed for restoration standards used by museums and experts."
  }
];

export const Features = () => {
  return (
    <section id="learn" className="bg-[#F5EFE3] py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-[#2C241C] font-serif text-2xl font-semibold mb-12"
      >
        Why Restore Artifacts?
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className="bg-[#FAF7F2] border border-[#D5CFC5] rounded-xl p-6 text-center shadow-sm"
          >
            <div className="text-[#2C241C] mb-3 flex justify-center">
              {item.icon}
            </div>
            <h3 className="font-serif text-lg text-[#2C241C] font-medium mb-1">
              {item.title}
            </h3>
            <p className="text-[#6A645A] text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
