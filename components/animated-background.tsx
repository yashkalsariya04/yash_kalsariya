"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18]" />
      <motion.div
        className="absolute -left-24 top-0 h-80 w-[140%] -rotate-6 bg-gradient-to-r from-indigo-500/16 via-cyan-400/12 to-emerald-400/12 blur-3xl"
        animate={{ x: [0, 36, -18, 0], y: [0, 18, 42, 0], opacity: [0.8, 1, 0.72, 0.8] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 top-[34%] h-72 w-[130%] rotate-12 bg-gradient-to-r from-violet-500/10 via-sky-400/14 to-transparent blur-3xl"
        animate={{ x: [0, -44, 18, 0], y: [0, 34, -12, 0], opacity: [0.65, 0.95, 0.7, 0.65] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-[-10%] h-64 w-[125%] bg-gradient-to-r from-transparent via-emerald-400/10 to-indigo-500/12 blur-3xl"
        animate={{ x: [0, 54, -24, 0], y: [0, -20, -42, 0], opacity: [0.7, 0.9, 0.62, 0.7] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-noise opacity-[0.06]" />
    </div>
  );
}
