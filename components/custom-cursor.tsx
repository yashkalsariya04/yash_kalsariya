"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const x = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const y = useSpring(mouseY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setVisible(true);
      mouseX.set(event.clientX - 14);
      mouseY.set(event.clientY - 14);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[90] hidden h-7 w-7 rounded-full border border-primary/60 bg-primary/10 mix-blend-difference backdrop-blur-sm md:block"
      style={{ x, y, opacity: visible ? 1 : 0 }}
    />
  );
}
