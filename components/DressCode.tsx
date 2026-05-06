"use client";

import { motion } from "motion/react";
import { weddingConfig } from "@/lib/config";

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
    <section
      id="dress-code"
      className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Dress Code
          </h2>
          <div className="w-12 h-px bg-[#1b3d2b] mx-auto opacity-50 mb-8" />
          <p className="text-sm md:text-base text-gray-600 font-serif leading-relaxed italic">
            {dressCode}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
