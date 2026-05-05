"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { weddingConfig } from "@/lib/config";

// --- Countdown Logic ---
const TARGET_DATE = new Date("2026-06-28T09:00:00").getTime();

export default function LocationSection() {
  const { akad } = weddingConfig;
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="location"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#1a0a08] px-8 py-20 overflow-hidden text-center">
      {/* Location Header with Floral Overlay */}
      <div className="absolute top-0 left-0 w-full flex flex-col items-center opacity-15 pt-10">
        <h2
          className="text-8xl md:text-9xl font-serif italic text-[#f0e8e0] mb-[-40px]"
          style={{ fontFamily: "var(--font-cormorant)" }}>
          Location
        </h2>
        <div className="relative w-64 h-32">
          <Image
            src="/lineart.png"
            alt="Flower Overlay"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 mt-20">
        {/* Venue Name */}
        <motion.h3
          variants={itemVariants}
          className="text-2xl md:text-3xl italic font-serif text-[#f0e8e0] mb-2"
          style={{ fontFamily: "var(--font-cormorant)" }}>
          {akad.venue}
        </motion.h3>

        {/* Address */}
        <motion.p
          variants={itemVariants}
          className="max-w-md text-sm md:text-base leading-relaxed text-[#c8b8a8] mb-6"
          style={{ fontFamily: "var(--font-montserrat)" }}>
          {akad.address}
        </motion.p>

        {/* Maps Button */}
        <motion.a
          variants={itemVariants}
          href={akad.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#d4c5b5] text-[#1a0a08] px-8 py-3 rounded-xl font-medium text-sm tracking-wide shadow-lg mb-12"
          style={{ fontFamily: "var(--font-montserrat)" }}>
          View Google Maps Here
        </motion.a>

        {/* Countdown Timer */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 md:gap-4">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#fdfbf7] rounded-xl flex items-center justify-center shadow-md">
                <span className="text-xl md:text-2xl font-bold text-[#1a0a08]">
                  {item.value.toString().padStart(2, "0")}
                </span>
              </div>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#c8b8a8]">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
