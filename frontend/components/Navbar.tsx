"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Landmark } from "lucide-react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 
        border-b ${
          scrolled
            ? "backdrop-blur-xl bg-white/70 border-black/10"
            : "bg-white/50 backdrop-blur-md border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Landmark size={22} className="text-[#2D2A27]" />
          <span className="text-2xl font-serif font-semibold text-[#2D2A27] tracking-wide">
            Artifact Restore
          </span>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center space-x-8 text-m font-bold">
          <NavLink label="Home" href="/" active={pathname === "/"} />
          <NavLink label="Upload" href="/upload" active={pathname === "/upload"} />
        </div>

        {/* CTA */}
        <Link
          href="/upload"
          className="px-5 py-2 rounded-full text-2x font-medium border border-[#2D2A27]/40 text-[#2D2A27]
            hover:bg-[#E9E5DD] transition-all duration-200"
        >
          Try Now
        </Link>

      </div>
    </motion.nav>
  );
};

// 🔹 Elegant Underline on Hover
const NavLink = ({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) => (
  <Link
    href={href}
    className={`relative transition ${
      active ? "text-[#2D2A27]" : "text-[#55524E] hover:text-[#2D2A27]"
    }`}
  >
    {label}
    <span
      className={`absolute left-0 -bottom-1 h-[1.4px] w-full bg-[#2D2A27] 
        origin-left scale-x-0 transition-transform duration-300 
        ${
          active
            ? "scale-x-100"
            : "group-hover:scale-x-100"
        }`}
    />
  </Link>
);
