"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music, Pause } from "lucide-react";
import { weddingConfig } from "@/lib/config";

export default function FloatingNav() {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      }
    };

    const handleAutoPlay = () => {
      if (!playing) {
        handleMusic();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("play-music", handleAutoPlay);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("play-music", handleAutoPlay);
    };
  }, [playing]);

  function handleMusic() {
    if (!audioRef.current) {
      audioRef.current = new Audio(weddingConfig.music.url);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((err) => console.log("Audio play failed:", err));
    }
    setPlaying(!playing);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleMusic}
            className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500 ${
              playing ? "bg-accent text-white" : "bg-black/40 text-white/80"
            }`}>
            {playing ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                <Music size={20} />
              </motion.div>
            ) : (
              <Pause size={20} />
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
