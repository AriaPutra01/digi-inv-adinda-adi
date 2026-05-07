"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { weddingConfig } from "@/lib/config";
import { Mail } from "lucide-react";

function CoverContent() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const guestNameParam = searchParams.get("to");
  // Decode and replace plus with space if needed, though useSearchParams handles URL decoding
  const guestName = guestNameParam ? guestNameParam.replace(/\+/g, " ") : "";

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const { bride, groom, akad, photos } = weddingConfig;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={photos[4]}
              alt="Cover Image"
              fill
              className="object-cover opacity-60"
              priority
            />
            {/* Gradient Overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-20 h-full text-center w-full px-6 pt-24 pb-12">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-white font-sans text-sm md:text-base mb-2">
                The Wedding Of
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-white font-script text-6xl md:text-8xl mb-4 leading-tight drop-shadow-md">
                {bride.fullName}
                <p className="font-serif italic mx-1 text-4xl md:text-6xl">
                  &
                </p>
                {groom.fullName}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="text-white font-sans text-base md:text-lg drop-shadow-sm">
                {akad.date}
              </motion.p>
            </div>

            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="flex flex-col items-center space-y-2 mb-8">
                <p className="text-sm md:text-base text-white font-sans">
                  Kpd Bpk/Ibu/Saudara/i
                </p>
                {guestName && (
                  <h2 className="text-2xl md:text-3xl font-serif text-white font-bold drop-shadow-md">
                    {guestName}
                  </h2>
                )}
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
                onClick={() => {
                  setIsOpen(true);
                  window.dispatchEvent(new CustomEvent("play-music"));
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#1b3d2b] hover:bg-[#153022] text-white rounded-xl border border-white/80 shadow-lg transition-all duration-300 font-sans text-sm md:text-base">
                <Mail size={18} />
                Buka Undangan
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Cover() {
  return (
    <Suspense fallback={null}>
      <CoverContent />
    </Suspense>
  );
}
