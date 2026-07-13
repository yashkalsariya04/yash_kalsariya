"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/portfolio";

export function useActiveSection() {
  const [active, setActive] = useState(navItems[0]?.href ?? "#about");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(item.href);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return active;
}
