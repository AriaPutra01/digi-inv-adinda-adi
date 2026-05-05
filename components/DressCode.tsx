"use client";

import { motion } from "motion/react";
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
    transition: { duration: 0.8, ease: "easeOut" },
  },
} as const;

export default function DressCode() {
  const { dressCode } = weddingConfig;

  return (
    <motion.section
      id="dress-code"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="py-24 px-8 bg-[#1a0a08] text-center flex flex-col items-center justify-center min-h-[40vh]"
    >
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl italic mb-6 text-[#f0e8e0]"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        Dress Code
      </motion.h2>
      
      <motion.p
        variants={itemVariants}
        className="max-w-md text-sm md:text-base leading-relaxed text-[#c8b8a8] font-light italic"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        {dressCode}
      </motion.p>

      {/* Subtle Divider at bottom */}
      <motion.div 
        variants={itemVariants}
        className="mt-12 w-12 h-px bg-[#d4c5b5] opacity-30"
      />
    </motion.section>
  );
}
