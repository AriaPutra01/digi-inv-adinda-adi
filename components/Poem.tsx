"use client";

import { motion } from "motion/react";
import { weddingConfig } from "@/lib/config";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const lineVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/* Botanical floral for poem section */
function FloralBottom({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M100 100 Q95 70 80 50 Q65 30 50 10" stroke="#8B5A2B" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
      <path d="M100 100 Q105 70 120 50 Q135 30 150 10" stroke="#8B5A2B" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
      <path d="M80 50 Q65 45 55 35" stroke="#8B5A2B" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.3"/>
      <path d="M120 50 Q135 45 145 35" stroke="#8B5A2B" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.3"/>
      <ellipse cx="50" cy="10" rx="5" ry="7" fill="#8B5A2B" opacity="0.25"/>
      <ellipse cx="150" cy="10" rx="5" ry="7" fill="#8B5A2B" opacity="0.25"/>
      <circle cx="55" cy="35" r="3" fill="#c9a96e" opacity="0.3"/>
      <circle cx="145" cy="35" r="3" fill="#c9a96e" opacity="0.3"/>
    </svg>
  );
}

export default function Poem() {
  const { poem } = weddingConfig;

  return (
    <motion.section
      id="poem"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="py-16 px-4"
      style={{ background: "linear-gradient(180deg, #1a0a08, #0d0503)" }}
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-2"
          style={{ color: "#c8b8a8", fontFamily: "var(--font-montserrat)" }}
        >
          A Note For You
        </p>
        <h2
          className="text-4xl italic mb-3"
          style={{ fontFamily: "var(--font-cormorant)", color: "#f0e8e0" }}
        >
          Our Poem
        </h2>
        <div className="flex items-center gap-3 justify-center">
          <div className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, #d4c5b5)" }} />
          <span style={{ color: "#c9a96e", fontSize: "14px" }}>✦</span>
          <div className="h-px w-10" style={{ background: "linear-gradient(90deg, #d4c5b5, transparent)" }} />
        </div>
      </div>

      {/* Postcard / letter visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mx-auto rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f5ede0, #ede3d4)",
          boxShadow: "0 12px 50px rgba(0,0,0,0.6)",
          maxWidth: "360px",
        }}
      >
        {/* Postcard top stripe */}
        <div
          className="h-2 w-full"
          style={{ background: "linear-gradient(90deg, #c9a96e, #a8884e, #c9a96e)" }}
        />

        <div className="relative p-8">
          {/* Postage stamp corner */}
          <div
            className="absolute top-4 right-4 w-14 h-16 border-2 flex items-center justify-center"
            style={{
              borderColor: "#c9a96e",
              background: "linear-gradient(135deg, #f0e8e0, #e8ddd0)",
              boxShadow: "inset 0 0 0 2px rgba(201,169,110,0.2)",
            }}
          >
            <span className="text-xl">💌</span>
          </div>

          {/* Botanical decoration bottom */}
          <div className="absolute bottom-2 left-0 w-full opacity-30 pointer-events-none">
            <FloralBottom className="w-full h-16" />
          </div>

          {/* Dear label */}
          <p
            className="text-xs tracking-[0.2em] uppercase mb-6"
            style={{ color: "#8B5A2B", fontFamily: "var(--font-montserrat)", opacity: 0.7 }}
          >
            Our Dearest Guests,
          </p>

          {/* Poem lines */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3 mb-6"
          >
            {poem.map((line, i) => (
              <motion.p
                key={i}
                variants={lineVariants}
                className="text-xl leading-snug"
                style={{
                  fontFamily: "var(--font-dancing)",
                  color: "#3d2010",
                  lineHeight: 1.6,
                }}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          {/* Signature */}
          <div className="flex justify-end">
            <p
              className="text-base"
              style={{ fontFamily: "var(--font-dancing)", color: "#8B5A2B" }}
            >
              — Adinda &amp; Adi
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
