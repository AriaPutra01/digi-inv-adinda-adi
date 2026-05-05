"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { weddingConfig } from "@/lib/config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
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

export default function ArRumSection() {
  const { photos } = weddingConfig;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex flex-col items-center justify-center bg-[#1a0a08] px-8 py-20 overflow-hidden">
      {/* Floral Accent (Left side) */}
      <div className="absolute top-[10%] left-[-40px] w-56 h-72 opacity-15 pointer-events-none">
        <Image
          src="/lineart.png"
          alt="Flower Accent"
          fill
          className="object-contain"
        />
      </div>

      {/* Verse Text */}
      <motion.div
        variants={itemVariants}
        className="max-w-xl text-center mb-10 z-10 px-4">
        <p
          className="text-base md:text-lg leading-relaxed text-[#f0e8e0] mb-8 italic"
          style={{ fontFamily: "var(--font-cormorant)" }}>
          &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang.&quot;
        </p>
        <p
          className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] font-bold"
          style={{ fontFamily: "var(--font-montserrat)" }}>
          QS. Ar-Rum : 21
        </p>
      </motion.div>

      {/* Vertical Container for the Frame and Photo */}
      <motion.div
        variants={itemVariants}
        className="relative z-10 w-full max-w-[380px] aspect-3/4 flex items-center justify-center">
        {/* 1. The frame/card (Bottom Layer) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cover.png"
            alt="Frame Cover"
            fill
            className="object-contain rotate-90"
          />
        </div>

        {/* 2. The actual photo (Top Layer - Sized to fit inside the lace area) */}
        <div className="relative z-10 w-[48%] h-[50%] overflow-hidden rounded-sm shadow-md bg-[#2a1208] mt-[-5%]">
          <Image
            src={photos[0]}
            alt="Wedding Photo"
            fill
            className="object-cover grayscale brightness-95"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
