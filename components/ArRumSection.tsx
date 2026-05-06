"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { weddingConfig } from "@/lib/config";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
} as const;

export default function ArRumSection() {
  const { photos } = weddingConfig;

  return (
    <section className="relative flex flex-col items-center justify-center bg-white px-6 py-10 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-xl w-full flex flex-col items-center text-center z-10">
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-lg md:text-xl font-serif font-bold text-gray-800 mb-8">
          QS. Ar-Rum Ayat 21
        </motion.h2>

        {/* Arabic Text */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-800 mb-8 leading-loose font-serif"
          dir="rtl">
          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
          لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً
          ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
        </motion.p>

        {/* Translation */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-gray-600 font-serif leading-relaxed mb-12 italic px-4">
          Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
        </motion.p>

        {/* Couple Photo */}
        <motion.div
          variants={itemVariants}
          className="relative w-full aspect-[4/5] max-w-[340px] rounded-[40px] overflow-hidden shadow-2xl">
          <Image
            src={photos[1]} // Using a different photo if available
            alt="Couple Photo"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
