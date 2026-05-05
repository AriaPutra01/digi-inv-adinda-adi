"use client";

import { motion } from "motion/react";
import Image from "next/image";
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

export default function WeddingDetails() {
  const { akad, resepsi } = weddingConfig;

  return (
    <motion.section
      id="details"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-[70vh] relative flex flex-col items-center justify-start gap-8 bg-[#1a0a08] px-8 py-20 overflow-hidden">
      {/* Floral Accent (Right side) */}
      <div className="absolute top-[10%] right-[-40px] w-56 h-72 opacity-15 pointer-events-none rotate-12">
        <Image
          src="/lineart.png"
          alt="Flower Accent"
          fill
          className="object-contain"
        />
      </div>

      {/* Date Header Layout */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center mb-16 z-10">
        <p
          className="text-xs md:text-sm tracking-[0.4em] uppercase mb-6 text-[#c8b8a8]"
          style={{ fontFamily: "var(--font-montserrat)" }}>
          SUNDAY
        </p>
        <div className="flex items-center gap-6 md:gap-12">
          <span
            className="text-sm md:text-base tracking-[0.2em] uppercase text-[#c8b8a8]"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            JUNE
          </span>
          <span
            className="text-7xl md:text-9xl font-serif text-[#f0e8e0]"
            style={{ fontFamily: "var(--font-cormorant)" }}>
            28
          </span>
          <span
            className="text-sm md:text-base tracking-[0.2em] uppercase text-[#c8b8a8]"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            2026
          </span>
        </div>
      </motion.div>

      {/* Event Details Card with cover.png (Horizontal) */}
      <motion.div
        variants={itemVariants}
        className="relative z-10 w-full max-w-[360px] md:max-w-[450px] aspect-video flex items-center justify-center">
        {/* Background Card (cover.png - Horizontal) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cover.png"
            alt="Card Background"
            fill
            className="object-contain"
          />
        </div>

        {/* Content on Top of Card - Compact Layout */}
        <div className="relative z-10 flex flex-col items-center gap-2 py-4 px-8 text-center">
          {/* Akad Nikah */}
          <div className="flex flex-col items-center gap-1">
            <h3
              className="text-lg font-serif text-[#1a0a08]"
              style={{ fontFamily: "var(--font-cormorant)" }}>
              Akad Nikah
            </h3>
            <p
              className="text-xs font-medium text-[#632a26]"
              style={{ fontFamily: "var(--font-montserrat)" }}>
              {akad.time}
            </p>
          </div>

          {/* Divider Icon */}
          <div className="text-[#c9a96e] opacity-40 text-sm">✦</div>

          {/* Resepsi */}
          <div className="flex flex-col items-center gap-1">
            <h3
              className="text-lg font-serif text-[#1a0a08]"
              style={{ fontFamily: "var(--font-cormorant)" }}>
              Resepsi Pernikahan
            </h3>
            <p
              className="text-xs font-medium text-[#632a26]"
              style={{ fontFamily: "var(--font-montserrat)" }}>
              {resepsi.time}
            </p>
          </div>

          {/* Location Hint */}
          <div className="mt-2">
            <div className="w-8 h-[1px] bg-[#1a0a08]/10 mx-auto mb-1" />
            <p className="text-[9px] tracking-widest text-[#1a0a08]/60 uppercase">
              Kediaman Mempelai Wanita
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
