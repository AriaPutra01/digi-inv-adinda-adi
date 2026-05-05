"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { weddingConfig } from "@/lib/config";

export default function Gallery() {
  const { photos, poem } = weddingConfig;

  return (
    <section className="relative min-h-[150vh] bg-[#1a0a08] py-20 px-4 overflow-hidden">
      {/* Background Floral Line Art */}
      <div className="absolute inset-0 opacity-10 pointer-events-none p-20">
        <Image
          src="/lineart.png"
          alt="Floral Background"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative w-full h-full max-w-lg mx-auto">
        {/* 1. Top Left: Ornate Silver Frame (Simulated) */}
        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
          whileInView={{ opacity: 1, rotate: -5, scale: 1 }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 w-40 h-40 z-20">
          <div className="w-full h-full border-8 border-double border-[#a0a0a0] bg-[#2a1208] p-2 shadow-2xl">
            <div className="w-full h-full relative overflow-hidden bg-black rounded-full border-4 border-[#808080]">
              <Image
                src={photos[0]}
                alt="Gallery 1"
                fill
                className="object-cover grayscale opacity-70"
              />
            </div>
          </div>
        </motion.div>

        {/* 2. Top Right: Small Polaroid */}
        <motion.div
          initial={{ opacity: 0, rotate: 10, y: 20 }}
          whileInView={{ opacity: 1, rotate: 8, y: 0 }}
          viewport={{ once: true }}
          className="absolute top-10 right-0 w-36 h-44 bg-[#fdfbf7] p-2 shadow-xl z-10">
          <div className="w-full h-[80%] relative bg-[#2a1208]">
            <Image
              src={photos[1]}
              alt="Gallery 2"
              fill
              className="object-cover grayscale"
            />
          </div>
        </motion.div>

        {/* 3. Our Poem Tag */}
        <motion.div
          initial={{ opacity: 0, rotate: 15 }}
          whileInView={{ opacity: 1, rotate: 12 }}
          viewport={{ once: true }}
          className="absolute top-48 right-4 bg-[#fdfbf7] px-6 py-2 shadow-md z-30">
          <span
            className="text-[#8B5A2B] text-lg italic font-script"
            style={{ fontFamily: "var(--font-dancing)" }}>
            Our Poem
          </span>
        </motion.div>

        {/* 4. Middle Left: Postcard Poem */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute top-56 left-4 w-56 h-40 bg-[#f5ede0] p-6 shadow-xl z-20 border-t-4 border-[#e8ddd0]">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start opacity-30">
              <div className="w-8 h-8 border border-[#8B5A2B] rounded-full" />
              <div className="w-10 h-6 border border-[#8B5A2B]" />
            </div>
            <p
              className="text-[10px] md:text-xs leading-relaxed text-[#8B5A2B] font-script mt-2"
              style={{ fontFamily: "var(--font-dancing)" }}>
              {poem[0]}
              <br />
              {poem[1]}
            </p>
          </div>
        </motion.div>

        {/* 5. Middle Right: Large Polaroid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="absolute top-[400px] right-2 w-48 h-64 bg-[#fdfbf7] p-3 shadow-2xl z-10">
          <div className="w-full h-[85%] relative bg-[#2a1208]">
            <Image
              src={photos[2]}
              alt="Gallery 3"
              fill
              className="object-cover grayscale"
            />
          </div>
        </motion.div>

        {/* 6. Middle Left (Below Postcard): Horizontal Polaroid */}
        <motion.div
          initial={{ opacity: 0, rotate: -5 }}
          whileInView={{ opacity: 1, rotate: 2 }}
          viewport={{ once: true }}
          className="absolute top-[460px] left-2 w-52 h-44 bg-[#fdfbf7] p-2 shadow-xl z-20">
          <div className="w-full h-[80%] relative bg-[#2a1208]">
            <Image
              src={photos[3]}
              alt="Gallery 4"
              fill
              className="object-cover grayscale"
            />
          </div>
        </motion.div>

        {/* 7. Bottom: Large Lace Frame */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute top-[750px] left-0 w-full px-2 z-30">
          <div className="relative w-full aspect-video bg-[#fdfbf7] p-8 shadow-2xl">
            {/* Lace Border SVG */}
            <div className="absolute inset-0 pointer-events-none">
              <svg
                viewBox="0 0 200 120"
                className="w-full h-full"
                preserveAspectRatio="none">
                <path
                  d="M5,5 Q10,0 15,5 Q20,0 25,5 Q30,0 35,5 Q40,0 45,5 Q50,0 55,5 Q60,0 65,5 Q70,0 75,5 Q80,0 85,5 Q90,0 95,5 Q100,0 105,5 Q110,0 115,5 Q120,0 125,5 Q130,0 135,5 Q140,0 145,5 Q150,0 155,5 Q160,0 165,5 Q170,0 175,5 Q180,0 185,5 Q190,0 195,5 L195,115 Q190,120 185,115 Q180,120 175,115 Q170,120 165,115 Q160,120 155,115 Q150,120 145,115 Q140,120 135,115 Q130,120 125,115 Q120,120 115,115 Q110,120 105,115 Q100,120 95,115 Q90,120 85,115 Q80,120 75,115 Q70,120 65,115 Q60,120 55,115 Q50,120 45,115 Q40,120 35,115 Q30,120 25,115 Q20,120 15,115 Q10,120 5,115 Z"
                  fill="none"
                  stroke="#d4c5b5"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <div className="w-full h-full relative overflow-hidden bg-[#2a1208]">
              <Image
                src={photos[0]}
                alt="Gallery 5"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
