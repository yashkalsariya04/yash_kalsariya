"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, socials } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col items-center justify-between gap-5 md:flex-row">
        <p className="text-sm text-muted-foreground">Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="text-muted-foreground transition hover:text-primary"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
          <Button asChild variant="icon" size="icon" className="ml-2">
            <a href="#home" aria-label="Back to top">
              <ArrowUp className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
