"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { weddingConfig } from "@/lib/config";
import { Copy, Check } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
} as const;

export default function WeddingGift() {
  const { gifts } = weddingConfig;
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="gift" className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Wedding Gift
          </h2>
          <div className="w-12 h-px bg-[#1b3d2b] mx-auto opacity-50 mb-8" />
          <p className="text-sm md:text-base text-gray-600 font-serif leading-relaxed italic px-4">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun, jika
            Anda ingin memberikan tanda kasih, Anda dapat memberikannya melalui
            nomor rekening berikut:
          </p>
        </motion.div>

        {/* Bank Account Cards */}
        <div className="flex flex-col gap-8 w-full">
          {gifts.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-center shadow-lg shadow-gray-200/50">
              <span className="text-sm tracking-widest text-[#1b3d2b] font-bold uppercase mb-4">
                {item.bankName}
              </span>
              <p className="text-2xl md:text-3xl font-serif text-gray-800 tracking-widest mb-2">
                {item.accountNumber}
              </p>
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">
                a.n {item.accountHolder}
              </p>
              <button
                onClick={() => copyToClipboard(item.accountNumber, index)}
                className="flex items-center gap-2 py-2.5 px-8 bg-[#1b3d2b] text-white rounded-xl shadow-md hover:bg-[#234d36] transition-all">
                {copiedIndex === index ? (
                  <>
                    <Check size={16} />
                    <span className="text-xs font-sans font-medium">
                      Copied!
                    </span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span className="text-xs font-sans font-medium">
                      Copy Number
                    </span>
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
