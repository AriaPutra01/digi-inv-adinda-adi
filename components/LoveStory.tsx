"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { weddingConfig } from "@/lib/config";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
} as const;

export default function LoveStory() {
  const { openingLetter, photos } = weddingConfig;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="love-story"
      ref={containerRef}
      className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
            Love Story
          </h2>
        </motion.div>

        {/* Featured Image with Overlay Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="relative w-full aspect-[3/4] max-w-[340px] rounded-[20px] overflow-hidden shadow-2xl mb-10">
          <motion.div style={{ y: imageY }} className="absolute inset-0">
            <Image
              src={photos[6]}
              alt="Love Story"
              fill
              className="object-cover scale-110"
            />
          </motion.div>
        </motion.div>

        {/* Content from openingLetter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="flex flex-col gap-4">
          {openingLetter.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm md:text-base text-gray-600 font-serif leading-relaxed italic">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
