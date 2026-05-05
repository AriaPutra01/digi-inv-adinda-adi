"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingNav() {
  const [playing, setPlaying] = useState(false);
  const [readMode, setReadMode] = useState(false);
  const [visible, setVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Show nav after scroll
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Read mode: increase body font size
  useEffect(() => {
    document.documentElement.style.fontSize = readMode ? "19px" : "";
  }, [readMode]);

  function handleMusic() {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying((p) => !p);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const btnStyle: React.CSSProperties = {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(26,10,8,0.85)",
    border: "1px solid rgba(201,169,110,0.35)",
    backdropFilter: "blur(8px)",
    cursor: "pointer",
    color: "#c9a96e",
    fontSize: "16px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
          aria-label="Floating navigation"
        >
          {/* Scroll to top */}
          <motion.button
            id="nav-scroll-top"
            onClick={scrollToTop}
            style={btnStyle}
            whileHover={{ scale: 1.1, borderColor: "#c9a96e" }}
            whileTap={{ scale: 0.9 }}
            title="Ke atas"
            aria-label="Scroll ke atas"
          >
            ↑
          </motion.button>

          {/* Music */}
          <motion.button
            id="nav-music"
            onClick={handleMusic}
            style={{
              ...btnStyle,
              background: playing
                ? "linear-gradient(135deg, #c9a96e, #a8884e)"
                : "rgba(26,10,8,0.85)",
              color: playing ? "#1a0a08" : "#c9a96e",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={playing ? "Pause musik" : "Play musik"}
            aria-label={playing ? "Pause musik" : "Play musik"}
          >
            <motion.span
              animate={playing ? { rotate: [0, 10, -10, 0] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {playing ? "⏸" : "♪"}
            </motion.span>
          </motion.button>

          {/* Read mode */}
          <motion.button
            id="nav-read-mode"
            onClick={() => setReadMode((r) => !r)}
            style={{
              ...btnStyle,
              background: readMode
                ? "linear-gradient(135deg, #c9a96e, #a8884e)"
                : "rgba(26,10,8,0.85)",
              color: readMode ? "#1a0a08" : "#c9a96e",
              fontSize: "11px",
              fontFamily: "var(--font-montserrat)",
              fontWeight: "600",
              letterSpacing: "0.05em",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={readMode ? "Mode normal" : "Mode baca"}
            aria-label={readMode ? "Mode normal" : "Mode baca"}
          >
            Aa
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
