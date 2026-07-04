"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, pointerEvents: "none" }}
          transition={{ duration: 0.45 }}
          role="status"
          aria-label="Loading Asthetic Pravin"
        >
          <div className="relative grid h-24 w-24 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent-2 to-emerald-300 opacity-30 blur-2xl" />
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-accent" />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
