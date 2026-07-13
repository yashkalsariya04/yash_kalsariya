"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme !== "light";

  return (
    <Button
      aria-label="Toggle theme"
      variant="icon"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title="Toggle theme"
    >
      <Sun className="h-4 w-4 scale-100 transition dark:scale-0" />
      <Moon className="absolute h-4 w-4 scale-0 transition dark:scale-100" />
    </Button>
  );
}
