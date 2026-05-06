"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { weddingConfig } from "@/lib/config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
} as const;

export default function Profiles() {
  const { bride, groom, photos } = weddingConfig;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <section
      id="profiles"
      ref={containerRef}
      className="relative flex flex-col items-center bg-white px-6 py-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 w-full max-w-xl flex flex-col gap-10 items-center text-center">
        {/* Bride Profile */}
        <motion.div className="w-full flex flex-col items-center">
          {/* Nickname */}
          <motion.h3
            variants={itemVariants}
            className="text-5xl md:text-6xl font-script text-gray-800 mb-2">
            {bride.name}
          </motion.h3>

          {/* Full Name */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-serif text-gray-800 mb-4 px-4">
            {bride.fullName}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-gray-600 font-serif mb-8 px-6">
            {bride.position} dari Bapak {bride.fatherName} dan Ibu{" "}
            {bride.motherName}
          </motion.p>
        </motion.div>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-7xl md:text-8xl font-serif text-gray-400 select-none italic">
          &
        </motion.div>

        {/* Groom Profile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex flex-col items-center">
          {/* Nickname */}
          <motion.h3
            variants={itemVariants}
            className="text-5xl md:text-6xl font-script text-gray-800 mb-2">
            {groom.name}
          </motion.h3>

          {/* Full Name */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-serif text-gray-800 mb-4 px-4">
            {groom.fullName}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-gray-600 font-serif mb-8 px-6">
            {groom.position} dari Bapak {groom.fatherName} dan Ibu{" "}
            {groom.motherName}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
