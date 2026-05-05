"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { weddingConfig } from "@/lib/config";

/* ── Botanical/Floral Motif Overlay ── */
function FloralMotif() {
  const flowers = [
    { top: "5%", left: "5%", size: "300px", rotate: "-15deg" },
    { top: "15%", left: "60%", size: "250px", rotate: "20deg" },
    { top: "40%", left: "-10%", size: "350px", rotate: "10deg" },
    { top: "35%", left: "70%", size: "280px", rotate: "-25deg" },
    { top: "65%", left: "20%", size: "320px", rotate: "45deg" },
    { top: "80%", left: "65%", size: "260px", rotate: "-10deg" },
    { top: "55%", left: "45%", size: "220px", rotate: "160deg" },
  ];

  return (
    <div className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none overflow-hidden">
      {flowers.map((flower, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            top: flower.top,
            left: flower.left,
            width: flower.size,
            height: flower.size,
            rotate: flower.rotate,
          }}>
          <Image
            src="/lineart.png"
            alt={`Flower Motif ${index}`}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.5 },
  },
} as const;

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export default function Hero() {
  const { bride, groom } = weddingConfig;

  // Split names into characters for staggered layout
  const brideLetters = bride.name.toUpperCase().split("");
  const groomLetters = groom.name.toUpperCase().split("");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1a0a08]">
      {/* Background Motif */}
      <FloralMotif />

      {/* Scattered Letters Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center select-none">
        {/* Bride Name Layout */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-4">
          {/* A D */}
          <motion.span
            variants={letterVariants}
            className="text-5xl md:text-7xl font-serif text-[#f0e8e0] translate-x-[-10px]">
            {brideLetters[0]}
          </motion.span>
          <motion.span
            variants={letterVariants}
            className="text-5xl md:text-7xl font-serif text-[#f0e8e0] translate-x-[20px] translate-y-[10px]">
            {brideLetters[1]}
          </motion.span>

          {/* I N */}
          <motion.span
            variants={letterVariants}
            className="text-5xl md:text-7xl font-serif text-[#f0e8e0] translate-x-[30px] translate-y-[-5px]">
            {brideLetters[2]}
          </motion.span>
          <motion.span
            variants={letterVariants}
            className="text-5xl md:text-7xl font-serif text-[#f0e8e0] translate-x-[-5px] translate-y-[20px]">
            {brideLetters[3]}
          </motion.span>

          {/* D A */}
          <motion.span
            variants={letterVariants}
            className="text-5xl md:text-7xl font-serif text-[#f0e8e0] translate-x-[-25px] translate-y-[10px]">
            {brideLetters[4]}
          </motion.span>
          <motion.span
            variants={letterVariants}
            className="text-5xl md:text-7xl font-serif text-[#f0e8e0] translate-x-[15px] translate-y-[-10px]">
            {brideLetters[5]}
          </motion.span>
        </div>

        {/* Ampersand */}
        <motion.div
          variants={letterVariants}
          className="text-4xl md:text-5xl font-script text-[#c9a96e] my-4">
          &
        </motion.div>

        {/* Groom Name Layout */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-6">
          {/* A D */}
          <motion.span
            variants={letterVariants}
            className="text-5xl md:text-7xl font-serif text-[#f0e8e0] translate-x-[10px]">
            {groomLetters[0]}
          </motion.span>
          <motion.span
            variants={letterVariants}
            className="text-5xl md:text-7xl font-serif text-[#f0e8e0] translate-x-[-20px] translate-y-[15px]">
            {groomLetters[1]}
          </motion.span>

          {/* I */}
          <div className="col-span-2 flex justify-center">
            <motion.span
              variants={letterVariants}
              className="text-5xl md:text-7xl font-serif text-[#f0e8e0] translate-y-[10px] translate-x-[10px]">
              {groomLetters[2]}
            </motion.span>
          </div>
        </div>

        {/* Small Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-[-80px] flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#d4c5b5]" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8b8a8]">
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
