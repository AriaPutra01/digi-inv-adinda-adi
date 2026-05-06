"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { weddingConfig } from "@/lib/config";
import { MessageCircle, Send } from "lucide-react";

export default function RSVPSection() {
  const { whatsapp, photos } = weddingConfig;
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      alert("Silakan isi nama dan ucapan Anda.");
      return;
    }

    const text = `Halo, saya ${name}. \n\nUcapan: ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsapp}?text=${encodedText}`, "_blank");
  };

  return (
    <section
      id="rsvp"
      ref={containerRef}
      className="relative py-24 px-6 overflow-hidden min-h-[600px] flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          <Image
            src={photos[6] || photos[0]}
            alt="RSVP Background"
            fill
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-[40px] border border-white/20 shadow-2xl"
      >
        <div className="flex flex-col items-center text-center mb-10">
          <MessageCircle className="text-white mb-4" size={32} />
          <h2 className="text-4xl font-serif text-white mb-2">RSVP</h2>
          <p className="text-sm text-gray-300 font-serif italic">
            Berikan ucapan selamat & konfirmasi kehadiran Anda
          </p>
        </div>

        <form onSubmit={handleSendWhatsApp} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-300 ml-2">
              Nama
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40 transition-all font-serif"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-300 ml-2">
              Ucapan
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis ucapan & doa restu..."
              rows={4}
              className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40 transition-all font-serif resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="mt-4 w-full py-4 bg-white text-gray-900 rounded-2xl font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg hover:bg-gray-100 transition-all"
          >
            <Send size={18} />
            Kirim WhatsApp
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
