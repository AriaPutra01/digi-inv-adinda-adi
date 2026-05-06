"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { weddingConfig } from "@/lib/config";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
} as const;

export default function Gallery() {
  const { photos } = weddingConfig;

  return (
    <section id="gallery" className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Our Moments</h2>
          <div className="w-12 h-px bg-[#1b3d2b] mx-auto opacity-50" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 gap-6 w-full space-y-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-full rounded-2xl overflow-hidden shadow-md break-inside-avoid"
            >
              <Image
                src={photo}
                alt={`Gallery photo ${index + 1}`}
                width={500}
                height={700}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
