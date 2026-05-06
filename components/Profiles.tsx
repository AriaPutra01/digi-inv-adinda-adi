"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { weddingConfig } from "@/lib/config";
import { Camera } from "lucide-react";

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

  return (
    <section
      id="profiles"
      className="relative flex flex-col items-center bg-white px-6 py-20 overflow-hidden">
      <div className="relative z-10 w-full max-w-xl flex flex-col items-center text-center">
        {/* Bride Profile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex flex-col items-center mb-20">
          {/* Photo */}
          <motion.div
            variants={itemVariants}
            className="relative w-full aspect-[4/5] max-w-[320px] rounded-[30px] overflow-hidden shadow-xl mb-10">
            <Image
              src={photos[2] || photos[0]} // Using photo from config
              alt={bride.fullName}
              fill
              className="object-cover"
            />
          </motion.div>

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

          {/* Instagram Button */}
          <motion.a
            variants={itemVariants}
            href={`https://instagram.com/`}
            target="_blank"
            className="flex items-center gap-2 px-6 py-2 bg-[#1b3d2b] text-white rounded-xl shadow-md hover:opacity-90 transition-all">
            <Camera size={18} />
            <span className="text-sm font-sans">Instagram</span>
          </motion.a>
        </motion.div>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-7xl md:text-8xl font-serif text-gray-400 mb-20 select-none italic">
          &
        </motion.div>

        {/* Groom Profile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex flex-col items-center">
          {/* Photo */}
          <motion.div
            variants={itemVariants}
            className="relative w-full aspect-[4/5] max-w-[320px] rounded-[30px] overflow-hidden shadow-xl mb-10">
            <Image
              src={photos[3] || photos[0]} // Using photo from config
              alt={groom.fullName}
              fill
              className="object-cover"
            />
          </motion.div>

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

          {/* Instagram Button */}
          <motion.a
            variants={itemVariants}
            href={`https://instagram.com/`}
            target="_blank"
            className="flex items-center gap-2 px-6 py-2 bg-[#1b3d2b] text-white rounded-xl shadow-md hover:opacity-90 transition-all">
            <Camera size={18} />
            <span className="text-sm font-sans">Instagram</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
