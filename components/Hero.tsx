"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { weddingConfig } from "@/lib/config";

export default function Hero() {
  const { bride, groom, photos, akad } = weddingConfig;
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-end justify-center overflow-hidden px-6">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhotoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0">
            <Image
              src={photos[currentPhotoIndex]}
              alt="Wedding Background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Layout - Right Aligned */}
      <div className="relative z-10 text-right text-white max-w-xs md:max-w-md">
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl font-serif mb-2">
          The Wedding Of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif leading-none mb-2">
          {bride.name}
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif leading-none mb-6">
          {groom.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl font-serif italic">
          {akad.date}
        </motion.p>
      </div>

      {/* Layered White Frame at Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none drop-shadow-[0_-5px_15px_rgba(0,0,0,0.1)]">
        {/* Layer 1  */}
        <svg
          className="absolute bottom-0 w-full h-40 opacity-20 translate-y-2"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none">
          <path fill="white" d="M0,12L1440,40L1440,120L0,120Z"></path>
        </svg>

        {/* Layer 2  */}
        <svg
          className="absolute bottom-0 w-full h-40 opacity-40 translate-y-2"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none">
          <path fill="white" d="M0,50L1440,60L1440,120L0,120Z"></path>
        </svg>

        {/* Layer 3 */}
        <svg
          className="relative block w-full h-40 opacity-60"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none">
          <path fill="white" d="M0,80L1440,70L1440,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
}
