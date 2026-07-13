"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/portfolio";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[70] bg-background/60 p-4 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            className="mx-auto mt-28 max-w-lg overflow-hidden rounded-lg border border-border bg-card shadow-soft"
            initial={{ y: -18, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -18, scale: 0.98 }}
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Jump to a section</span>
            </div>
            <div className="p-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-accent"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
