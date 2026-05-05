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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
} as const;

export default function GalleryGrid() {
  const { photos, bride, groom } = weddingConfig;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-[#1a0a08] overflow-hidden">
      {/* --- PART 1: Vertical Stack (Full Width Images) --- */}
      <div className="flex flex-col gap-1 w-full mb-20">
        {photos.slice(0, 3).map((photo, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full aspect-[4/5] relative overflow-hidden">
            <Image
              src={photo}
              alt={`Gallery Stack ${index}`}
              fill
              className="object-cover grayscale"
            />
          </motion.div>
        ))}
      </div>

      {/* --- PART 2: Scattered Polaroids & Text --- */}
      <div className="relative min-h-[100vh] px-6 py-20 flex flex-col items-center">
        {/* Top Right Text: WE ARE GETTING MARRIED */}
        <motion.div
          variants={itemVariants}
          className="absolute top-10 right-8 text-right z-20">
          <p className="text-[10px] tracking-[0.2em] text-[#c8b8a8] uppercase">
            We Are
          </p>
          <p className="text-xs tracking-[0.4em] text-[#f0e8e0] uppercase font-bold mt-2">
            Getting
          </p>
          <p className="text-xs tracking-[0.4em] text-[#f0e8e0] uppercase font-bold">
            Married
          </p>
        </motion.div>

        {/* Polaroid 1 (Left) */}
        <motion.div
          variants={itemVariants}
          className="relative z-10 w-64 h-80 bg-[#fdfbf7] p-3 shadow-2xl mb-12 mr-10"
          style={{ rotate: "-2deg" }}>
          {/* Tape Effect */}
          <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-20 h-8 bg-white/30 backdrop-blur-sm rotate-2 z-20" />
          <div className="w-full h-[85%] relative bg-black">
            <Image
              src={photos[1]}
              alt="Polaroid 1"
              fill
              className="object-cover grayscale"
            />
          </div>
        </motion.div>

        {/* Scattered Text: Names & Date */}
        <div className="relative w-full max-w-xs flex flex-col gap-4 mb-20 ml-[-40px]">
          <motion.p
            variants={itemVariants}
            className="text-xs tracking-widest text-[#c8b8a8] uppercase">
            {bride.name}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-xs text-[#c9a96e] ml-12">
            &
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-xs tracking-widest text-[#c8b8a8] uppercase ml-20">
            {groom.name}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8">
            <p className="text-[10px] tracking-widest text-[#c9a96e]">
              28.06.26
            </p>
            <p className="text-[10px] tracking-[0.3em] text-[#f0e8e0] uppercase font-bold">
              Love Locked
            </p>
          </motion.div>
        </div>

        {/* Polaroid 2 (Right) */}
        <motion.div
          variants={itemVariants}
          className="relative z-10 w-64 h-80 bg-[#fdfbf7] p-3 shadow-2xl self-end mt-[-100px]"
          style={{ rotate: "3deg" }}>
          {/* Tape Effect */}
          <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-20 h-8 bg-white/30 backdrop-blur-sm -rotate-2 z-20" />
          <div className="w-full h-[85%] relative bg-black">
            <Image
              src={photos[2]}
              alt="Polaroid 2"
              fill
              className="object-cover grayscale"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Floral Accent */}
      <div className="absolute bottom-[-40px] left-[-40px] w-64 h-64 opacity-10 pointer-events-none rotate-12">
        <Image
          src="/lineart.png"
          alt="Flower Accent"
          fill
          className="object-contain"
        />
      </div>
    </motion.section>
  );
}
