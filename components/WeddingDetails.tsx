"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { weddingConfig } from "@/lib/config";
import { Calendar, MapPin } from "lucide-react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date from config: Minggu, 28 Juni 2026
    const targetDate = new Date("2026-06-28T09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
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

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 md:gap-8 mb-10">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <span className="text-3xl md:text-4xl font-serif text-white">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm font-sans text-gray-300 uppercase tracking-widest mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function WeddingDetails() {
  const { akad, resepsi, photos, calendarUrl } = weddingConfig;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="details"
      ref={containerRef}
      className="relative flex flex-col items-center px-6 py-20 overflow-hidden">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          <Image
            src={photos[0]}
            alt="Background"
            fill
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/80" />
        </motion.div>
      </div>
      {/* Save The Date Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-xl flex flex-col items-center text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-10">
          Save The Date
        </h2>

        <Countdown />

        <motion.a
          href={calendarUrl}
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-2.5 bg-[#1b3d2b] text-white rounded-xl border border-white/40 shadow-lg mb-16 transition-all">
          <Calendar size={18} />
          <span className="text-sm font-sans">Save The Date</span>
        </motion.a>

        {/* Big Photo with Rounded Corners */}
        <div className="relative w-full aspect-[4/5] max-w-[340px] rounded-[30px] overflow-hidden shadow-2xl">
          <Image
            src={photos[0]}
            alt="Engagement Photo"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Event Details Section (Akad & Resepsi) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-xl bg-black/40 backdrop-blur-sm rounded-[40px] p-8 md:p-12 border border-white/10 shadow-2xl text-center flex flex-col items-center gap-16">
        {/* Akad Nikah */}
        <div className="flex flex-col items-center w-full">
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">
            Akad Nikah
          </h3>

          <div className="flex flex-col items-center gap-2 text-gray-300 font-serif mb-8">
            <p className="text-lg">{akad.date}</p>
            <p className="text-base">Pukul {akad.time}</p>
            <p className="text-sm tracking-widest uppercase mt-4 mb-2 text-white">
              Bertempat di:
            </p>
            <p className="text-lg font-bold text-white">{akad.venue}</p>
            <p className="text-sm max-w-[250px] leading-relaxed">
              {akad.address}
            </p>
          </div>

          <motion.a
            href={akad.mapsUrl}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-2 bg-[#1b3d2b] text-white rounded-full shadow-md hover:bg-[#234d36] transition-all">
            <MapPin size={16} />
            <span className="text-sm font-sans font-medium">Google Maps</span>
          </motion.a>
        </div>

        {/* Resepsi */}
        <div className="flex flex-col items-center w-full">
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">
            Resepsi
          </h3>

          <div className="flex flex-col items-center gap-2 text-gray-300 font-serif mb-8">
            <p className="text-lg">{resepsi.date}</p>
            <p className="text-base">Pukul {resepsi.time}</p>
            <p className="text-sm tracking-widest uppercase mt-4 mb-2 text-white">
              Bertempat di:
            </p>
            <p className="text-lg font-bold text-white">{resepsi.venue}</p>
            <p className="text-sm max-w-[250px] leading-relaxed">
              {resepsi.address}
            </p>
          </div>

          <motion.a
            href={resepsi.mapsUrl}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-2 bg-[#1b3d2b] text-white rounded-full shadow-md hover:bg-[#234d36] transition-all">
            <MapPin size={16} />
            <span className="text-sm font-sans font-medium">Google Maps</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
