"use client";

import { motion } from "motion/react";
import { weddingConfig } from "@/lib/config";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
} as const;

const paraVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

export default function LoveStory() {
  const { openingLetter } = weddingConfig;

  return (
    <motion.section
      id="love-story"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-16 px-4"
      style={{ background: "linear-gradient(180deg, #0d0503, #1a0a08)" }}>
      {/* Heading */}
      <div className="text-center mb-10">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-2"
          style={{ color: "#c8b8a8", fontFamily: "var(--font-montserrat)" }}>
          From Our Hearts
        </p>
        <h2
          className="text-4xl italic mb-3"
          style={{ fontFamily: "var(--font-cormorant)", color: "#f0e8e0" }}>
          Cerita Kami
        </h2>
        <div className="flex items-center gap-3 justify-center">
          <div
            className="h-px w-10"
            style={{
              background: "linear-gradient(90deg, transparent, #d4c5b5)",
            }}
          />
          <span style={{ color: "#c9a96e", fontSize: "14px" }}>✦</span>
          <div
            className="h-px w-10"
            style={{
              background: "linear-gradient(90deg, #d4c5b5, transparent)",
            }}
          />
        </div>
      </div>

      {/* Paper card */}
      <div
        className="relative rounded-2xl p-7 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #f5ede0 0%, #ede3d4 50%, #e8ddd0 100%)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
        }}>
        {/* Aged paper texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background:
              "radial-gradient(ellipse at top left, rgba(201,169,110,0.12) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(139,90,43,0.1) 0%, transparent 60%)",
          }}
        />

        {/* Corner floral accent */}
        <div className="absolute top-3 right-3 opacity-20">
          <svg viewBox="0 0 60 60" width="48" height="48" fill="none">
            <path
              d="M30 55 Q25 35 15 20 Q10 12 5 5"
              stroke="#8B5A2B"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M15 20 Q8 18 5 12"
              stroke="#8B5A2B"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
            <ellipse
              cx="5"
              cy="11"
              rx="4"
              ry="2.5"
              transform="rotate(-30 5 11)"
              fill="#8B5A2B"
            />
            <ellipse cx="5" cy="5" rx="3" ry="4" fill="#8B5A2B" />
          </svg>
        </div>

        {/* Bismillah / opening */}
        <p
          className="text-center text-sm mb-5 italic"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#8B5A2B",
            opacity: 0.8,
          }}>
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </p>

        <div
          className="h-px w-20 mx-auto mb-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, #c9a96e, transparent)",
          }}
        />

        {/* Letter paragraphs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-4">
          {openingLetter.map((para, i) => (
            <motion.p
              key={i}
              variants={paraVariants}
              className="text-sm leading-relaxed"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#3d2010",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                fontStyle: i === 0 ? "italic" : "normal",
              }}>
              {para}
            </motion.p>
          ))}
        </motion.div>

        <div
          className="h-px w-20 mx-auto mt-6"
          style={{
            background:
              "linear-gradient(90deg, transparent, #c9a96e, transparent)",
          }}
        />

        {/* Signature */}
        <p
          className="text-center mt-4 text-xl"
          style={{ fontFamily: "var(--font-dancing)", color: "#8B5A2B" }}>
          Adinda &amp; Adi
        </p>
      </div>
    </motion.section>
  );
}
