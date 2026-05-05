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
    transition: { duration: 1, ease: "easeOut" },
  },
} as const;

export default function Closing() {
  const { bride, groom } = weddingConfig;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative min-h-screen bg-[#1a0a08] flex flex-col items-center justify-center px-8 py-24 overflow-hidden text-center">
      {/* Floral Accents */}
      <div className="absolute top-[20%] right-[-50px] w-80 h-96 opacity-15 pointer-events-none rotate-12">
        <Image
          src="/lineart.png"
          alt="Flower Accent"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-10 left-[-50px] w-80 h-80 opacity-15 pointer-events-none -rotate-12">
        <Image
          src="/lineart.png"
          alt="Flower Accent"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center">
        {/* Arched Top Text */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#c8b8a8] font-light">
            Dear our Families & Friends
          </p>
        </motion.div>

        {/* Thank You Heading */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2
            className="text-6xl md:text-8xl text-[#f0e8e0] mb-2"
            style={{ fontFamily: "var(--font-cormorant)" }}>
            Thank
          </h2>
          <h2
            className="text-7xl md:text-9xl italic text-[#f0e8e0]"
            style={{ fontFamily: "var(--font-cormorant)" }}>
            You
          </h2>
        </motion.div>

        {/* Closing Messages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 text-left md:text-left">
          <motion.p
            variants={itemVariants}
            className="text-xs md:text-sm leading-relaxed text-[#c8b8a8] italic font-light"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            For being part of our lives and supporting us through our journey.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <p
              className="text-xs md:text-sm leading-relaxed text-[#c8b8a8] italic font-light"
              style={{ fontFamily: "var(--font-montserrat)" }}>
              We were so blessed to have you celebrate and be a part of our
              wedding day.
            </p>
            <p className="text-xs md:text-sm text-[#c9a96e] font-bold uppercase tracking-widest">
              See you!
            </p>
          </motion.div>
        </div>

        {/* Footer Names */}
        <motion.div variants={itemVariants} className="mt-10">
          <p className="text-xs tracking-widest text-[#c8b8a8] mb-2 uppercase">
            With love,
          </p>
          <h3
            className="text-3xl md:text-4xl text-[#f0e8e0] font-script"
            style={{ fontFamily: "var(--font-dancing)" }}>
            {bride.name} & {groom.name}
          </h3>
        </motion.div>
      </div>
    </motion.section>
  );
}
