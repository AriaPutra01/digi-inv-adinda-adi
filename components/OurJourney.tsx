"use client";

import { motion } from "motion/react";
import { weddingConfig } from "@/lib/config";

const journeyData = [
  {
    year: "2017",
    content: "The year we met — our first chapter began with a swipe on Tinder.",
  },
  {
    year: "2018",
    content: "Our second year was filled with growing pains and challenges. It tested us more than we expected..",
  },
  {
    year: "2020",
    content: "Love brought us back. Slowly, we began to rebuild, learning to understand and heal.",
  },
  {
    year: "2021",
    content: "We found new strength in each other, and our relationship began to grow healthier and happier.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
} as const;

export default function OurJourney() {
  return (
    <section id="journey" className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Our Journey</h2>
          <div className="w-12 h-px bg-[#1b3d2b] mx-auto opacity-50" />
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-gray-100 ml-4 md:ml-8 space-y-12">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative pl-8"
            >
              {/* Dot */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#1b3d2b]" />
              
              <span className="text-xl font-serif text-gray-800 mb-2 block">
                {item.year}
              </span>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
