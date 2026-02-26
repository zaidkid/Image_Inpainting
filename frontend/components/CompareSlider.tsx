"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function CompareSlider({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const [position, setPosition] = useState(50);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setPosition(percent);
  };

  return (
    <div
      className="relative w-full h-[320px] md:h-[420px] rounded-xl overflow-hidden cursor-ew-resize"
      onMouseMove={handleMove}
      onTouchMove={(e) => {
        const touch = e.touches[0];
        const rect = e.currentTarget.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setPosition(percent);
      }}
    >
      <Image src={after} alt="After" fill className="object-cover select-none" />
      <div
        className="absolute top-0 left-0 h-full bg-black/50"
        style={{ width: `${position}%` }}
      >
        <Image
          src={before}
          alt="Before"
          fill
          className="object-cover mix-blend-normal select-none"
        />
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 h-full w-[2px] bg-[#2C241C]"
        style={{ left: `${position}%` }}
      />

      {/* Grab Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-[#2C241C] shadow-md"
        style={{ left: `calc(${position}% - 12px)` }}
      />
    </div>
  );
}
