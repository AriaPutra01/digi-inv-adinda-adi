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

export default function Profiles() {
  const { bride, groom } = weddingConfig;

  return (
    <motion.section
      id="profiles"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#1a0a08] px-8 py-24 overflow-hidden">
      {/* Floral Accent (Left side) */}
      <div className="absolute top-[20%] left-[-60px] w-80 h-[60%] opacity-15 pointer-events-none">
        <Image
          src="/lineart.png"
          alt="Flower Accent"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center text-center">
        {/* Bride Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2
            className="text-4xl md:text-6xl mb-4 text-[#f0e8e0]"
            style={{ fontFamily: "var(--font-cormorant)" }}>
            {bride.fullName}
          </h2>
          <p
            className="text-xs md:text-sm tracking-widest text-[#c8b8a8] font-light"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            Daughter of Mr. {bride.fatherName} & Mrs. {bride.motherName}
          </p>
        </motion.div>

        {/* Ampersand */}
        <motion.div
          variants={itemVariants}
          className="text-4xl md:text-5xl font-script text-[#c9a96e] mb-12"
          style={{ fontFamily: "var(--font-dancing)" }}>
          &
        </motion.div>

        {/* Groom Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2
            className="text-4xl md:text-6xl mb-4 text-[#f0e8e0]"
            style={{ fontFamily: "var(--font-cormorant)" }}>
            {groom.fullName}
          </h2>
          <p
            className="text-xs md:text-sm tracking-widest text-[#c8b8a8] font-light"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            Son of Mr. {groom.fatherName} & Mrs. {groom.motherName}
          </p>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          variants={itemVariants}
          className="w-px h-24 bg-[#d4c5b5] opacity-40 mb-12"
        />

        {/* Invitation Text */}
        <motion.div variants={itemVariants} className="max-w-sm">
          <p
            className="text-sm md:text-base leading-relaxed text-[#c8b8a8] font-light italic"
            style={{ fontFamily: "var(--font-montserrat)" }}>
            With joyful hearts, <br />
            you are cordially invited <br />
            to the celebrate our wedding
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
