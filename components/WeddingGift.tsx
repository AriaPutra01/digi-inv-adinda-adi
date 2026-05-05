"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { weddingConfig } from "@/lib/config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
} as const;

export default function WeddingGift() {
  const { gifts } = weddingConfig;
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <motion.section
      id="gift"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative min-h-screen bg-[#1a0a08] px-8 py-24 flex flex-col items-center justify-center overflow-hidden text-center"
    >
      {/* Floral Accent (Top Corners) */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full rotate-[-45deg]">
          <path d="M0 50 Q50 0 100 50" stroke="#d4c5b5" strokeWidth="0.5" />
          <path d="M20 30 Q50 10 80 30" stroke="#d4c5b5" strokeWidth="0.3" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full rotate-[45deg]">
          <path d="M0 50 Q50 0 100 50" stroke="#d4c5b5" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Heading */}
      <motion.div variants={itemVariants} className="mb-12">
        <h2 className="text-5xl md:text-6xl text-[#f0e8e0] mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
          Wedding
        </h2>
        <h2 className="text-6xl md:text-7xl italic text-[#f0e8e0]" style={{ fontFamily: "var(--font-cormorant)" }}>
          Gift
        </h2>
      </motion.div>

      {/* Description */}
      <motion.div variants={itemVariants} className="max-w-md mb-16">
        <p className="text-sm md:text-base leading-relaxed text-[#c8b8a8] italic font-light" style={{ fontFamily: "var(--font-montserrat)" }}>
          Your presence on our big day means the world to us, and we truly appreciate you being part of this special moment.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-[#c8b8a8] italic font-light mt-4" style={{ fontFamily: "var(--font-montserrat)" }}>
          We would be incredibly grateful. Feel free to send the gift to our bank account.
        </p>
      </motion.div>

      {/* Bank Account Boxes (Curved) */}
      <div className="flex flex-col gap-6 w-full max-w-sm">
        {gifts.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-[#2a1208] border border-[#d4c5b5]/20 p-8 rounded-[40px] flex flex-col items-center gap-4 shadow-xl"
          >
            <span className="text-xs tracking-[0.3em] text-[#c9a96e] font-bold uppercase">
              {item.bankName}
            </span>
            <p className="text-xl md:text-2xl font-serif text-[#f0e8e0] tracking-widest" style={{ fontFamily: "var(--font-cormorant)" }}>
              {item.accountNumber}
            </p>
            <p className="text-xs text-[#c8b8a8] uppercase tracking-wider mb-2">
              a.n {item.accountHolder}
            </p>
            <button
              onClick={() => copyToClipboard(item.accountNumber, index)}
              className="text-[10px] tracking-widest uppercase py-2 px-6 border border-[#c9a96e] text-[#c9a96e] rounded-full hover:bg-[#c9a96e] hover:text-white transition-all"
            >
              {copiedIndex === index ? "Copied!" : "Copy Number"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
