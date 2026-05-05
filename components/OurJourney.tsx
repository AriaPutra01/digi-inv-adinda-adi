"use client";

import { motion } from "motion/react";
import Image from "next/image";

const journeyData = [
  {
    year: "2017",
    content:
      "The year we met — our first chapter began with a swipe on Tinder.",
  },
  {
    year: "2018",
    content:
      "Our second year was filled with growing pains and challenges. It tested us more than we expected..",
  },
  {
    year: "2020",
    content:
      "Love brought us back. Slowly, we began to rebuild, learning to understand and heal.",
  },
  {
    year: "2021",
    content:
      "We found new strength in each other, and our relationship began to grow healthier and happier.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
} as const;

export default function OurJourney() {
  return (
    <motion.section
      id="journey"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative min-h-screen bg-[#1a0a08] py-24 px-8 overflow-hidden">
      {/* Vertical Lace Border (Right Side) */}
      <div className="absolute top-0 right-0 h-full w-12 md:w-16 z-20 pointer-events-none opacity-90">
        <svg
          viewBox="0 0 40 400"
          className="w-full h-full"
          preserveAspectRatio="none">
          <rect width="100%" height="100%" fill="#2a1208" opacity="0.3" />
          {/* Scalloped Lace Pattern */}
          <path
            d="M10,0 Q0,10 10,20 Q0,30 10,40 Q0,50 10,60 Q0,70 10,80 Q0,90 10,100 Q0,110 10,120 Q0,130 10,140 Q0,150 10,160 Q0,170 10,180 Q0,190 10,200 Q0,210 10,220 Q0,230 10,240 Q0,250 10,260 Q0,270 10,280 Q0,290 10,300 Q0,310 10,320 Q0,330 10,340 Q0,350 10,360 Q0,370 10,380 Q0,390 10,400"
            fill="none"
            stroke="#fdfbf7"
            strokeWidth="3"
          />
          {/* Inner dots/pattern */}
          <circle cx="20" cy="10" r="1.5" fill="#fdfbf7" />
          <circle cx="20" cy="30" r="1.5" fill="#fdfbf7" />
          <circle cx="20" cy="50" r="1.5" fill="#fdfbf7" />
          {/* ... repeated circles simulated by pattern later if needed ... */}
        </svg>
      </div>

      {/* Floral Accent (Bottom Left) */}
      <div className="absolute bottom-0 left-[-40px] w-64 h-64 opacity-15 pointer-events-none">
        <Image
          src="/lineart.png"
          alt="Flower Accent"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-lg">
        {/* Heading */}
        <motion.div variants={itemVariants} className="mb-20">
          <h2
            className="text-5xl md:text-6xl text-[#f0e8e0] mb-2"
            style={{ fontFamily: "var(--font-cormorant)" }}>
            Our
          </h2>
          <h2
            className="text-6xl md:text-7xl italic text-[#f0e8e0] ml-4"
            style={{ fontFamily: "var(--font-cormorant)" }}>
            Journey
          </h2>
        </motion.div>

        {/* Timeline Items */}
        <div className="flex flex-col gap-16 ml-4">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col gap-3">
              <span
                className="text-xl md:text-2xl text-[#c9a96e] font-serif"
                style={{ fontFamily: "var(--font-cormorant)" }}>
                {item.year}
              </span>
              <p
                className="text-sm md:text-base text-[#c8b8a8] leading-relaxed max-w-[80%]"
                style={{ fontFamily: "var(--font-montserrat)" }}>
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
