"use client";

import { motion } from "motion/react";
import { weddingConfig } from "@/lib/config";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
} as const;

export default function Closing() {
  const { bride, groom } = weddingConfig;

  return (
    <section id="closing" className="relative bg-white py-32 px-6 overflow-hidden text-center">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2 className="text-5xl md:text-7xl font-serif text-gray-800 mb-8">Terima Kasih</h2>
          
          <p className="text-sm md:text-base text-gray-600 font-serif leading-relaxed italic mb-16 px-4">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami.
          </p>

          <div className="flex flex-col items-center gap-2">
            <p className="text-sm tracking-widest text-gray-400 uppercase">Kami yang berbahagia,</p>
            <h3 className="text-4xl md:text-5xl font-script text-[#1b3d2b]">
              {bride.name} & {groom.name}
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
