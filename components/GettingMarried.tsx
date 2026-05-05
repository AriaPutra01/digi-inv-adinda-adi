"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { weddingConfig } from "@/lib/config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export default function GettingMarried() {
  const { bride, groom, akad } = weddingConfig;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1a0a08] px-6">
      {/* Floral Background Overlay (Right side) */}
      <div className="absolute top-1/4 right-[-10%] w-[80%] h-[60%] opacity-15 pointer-events-none rotate-12">
        <Image
          src="/lineart.png"
          alt="Flower Backdrop"
          fill
          className="object-contain"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 w-full max-w-lg flex flex-col items-center text-center">
        {/* Names Header (Small) */}
        <motion.p
          variants={itemVariants}
          className="text-xs tracking-[0.4em] uppercase mb-16 text-[#c8b8a8] font-sans">
          {bride.name} & {groom.name}
        </motion.p>

        {/* Main Text: We are getting married */}
        <div className="flex flex-col items-center gap-2">
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-serif text-[#f0e8e0] -translate-x-12"
            style={{ fontFamily: "var(--font-cormorant)" }}>
            we are
          </motion.h2>

          <div className="flex items-center gap-4 md:gap-8">
            <motion.h2
              variants={itemVariants}
              className="text-6xl md:text-8xl italic font-serif text-[#f0e8e0]"
              style={{ fontFamily: "var(--font-cormorant)" }}>
              getting
            </motion.h2>

            {/* Date Badge (Oval Dotted) - Now Side by Side */}
            <motion.div
              variants={itemVariants}
              className="w-24 h-12 md:w-32 md:h-18 flex items-center justify-center rounded-[50%] border border-dashed border-[#c9a96e] rotate-[-5deg] shrink-0">
              <span className="text-xs md:text-base tracking-widest text-[#c9a96e] font-serif italic">
                28.06.26
              </span>
            </motion.div>
          </div>

          <motion.h2
            variants={itemVariants}
            className="text-6xl md:text-8xl italic font-serif text-[#f0e8e0] translate-x-16"
            style={{ fontFamily: "var(--font-cormorant)" }}>
            married
          </motion.h2>
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-10 flex flex-col items-center gap-3">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#d4c5b5] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
