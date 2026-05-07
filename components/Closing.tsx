"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { weddingConfig } from "@/lib/config";
import { Camera, Heart } from "lucide-react";

export default function Closing() {
  const { bride, groom, photos } = weddingConfig;
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <section
      id="closing"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 overflow-hidden">
      {/* Background Slideshow (Seamless transition) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhotoIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            style={{ y: backgroundY }}
            className="absolute inset-0">
            <Image
              src={photos[currentPhotoIndex]}
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl flex flex-col items-center gap-10">
        <p className="text-white text-base md:text-lg font-serif leading-relaxed px-4">
          Atas kehadiran dan do&apos;a restu dari Bapak/Ibu/Saudara/i sekalian,
          kami mengucapkan Terima Kasih.
        </p>

        <h3 className="text-white text-xl md:text-2xl font-bold font-serif">
          Wassalamualaikum Wr. Wb.
        </h3>

        <div className="flex flex-col items-center gap-4">
          <h2
            className="text-white text-5xl md:text-7xl font-script"
            style={{ fontFamily: "var(--font-dancing)" }}>
            {groom.name} & {bride.name}
          </h2>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <p className="text-gray-300 text-sm font-sans tracking-widest flex items-center gap-2">
            Made with <Heart color="red"/> by Aria Saputra
          </p>

          <motion.a
            href="https://www.instagram.com/0ne2manyy"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-lg">
            <Camera size={20} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
