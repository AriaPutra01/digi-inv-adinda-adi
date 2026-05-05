"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 3 detik
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
          {/* Ikon Kopi (SVG) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4">
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 8H20C21.1046 8 22 8.89543 22 10V12C22 13.1046 21.1046 14 20 14H18"
                stroke="#632a26"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M2 8H18V15C18 17.2091 16.2091 19 14 19H6C3.79086 19 2 17.2091 2 15V8Z"
                stroke="#632a26"
                strokeWidth="2"
              />
              <path
                d="M6 3V5"
                stroke="#632a26"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M10 3V5"
                stroke="#632a26"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M14 3V5"
                stroke="#632a26"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* Bar LOADING... */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#632a26] px-8 py-1.5 mb-6">
            <span className="text-white text-xs font-bold tracking-[0.2em]">
              LOADING...
            </span>
          </motion.div>

          {/* Teks Mohon Tunggu */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[#632a26] text-xl italic"
            style={{ fontFamily: "var(--font-cormorant)" }}>
            Mohon Tunggu...
          </motion.p>

          {/* Efek Gelombang (Wave) di Bagian Bawah */}
          <div className="absolute bottom-[-50px] left-0 w-full overflow-hidden leading-[0]">
            <svg
              className="relative block w-full h-[60px]"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="#ffffff"></path>
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
