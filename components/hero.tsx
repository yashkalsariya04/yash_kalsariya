"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Rocket } from "lucide-react";
import Image from "next/image";
import { FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
import { SiMongodb, SiTypescript } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { profile, socials } from "@/data/portfolio";

const floatingTech = [
  { icon: FaReact, className: "left-0 top-20", delay: 0 },
  { icon: SiTypescript, className: "right-8 top-8", delay: 0.2 },
  { icon: FaNodeJs, className: "left-8 bottom-20", delay: 0.4 },
  { icon: SiMongodb, className: "right-0 bottom-28", delay: 0.6 },
  { icon: FaJava, className: "left-28 top-0", delay: 0.8 },
  { icon: FaPython, className: "right-28 bottom-4", delay: 1 }
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32">
      <div className="container grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-16 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Available for full-stack engineering opportunities
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-normal md:text-7xl lg:text-8xl">
            {profile.name}
            <span className="block animate-shimmer text-gradient">{profile.title}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={profile.resume} download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#projects">
                <Rocket className="h-4 w-4" />
                View Projects
              </a>
            </Button>
          </div>
          <div className="mt-8 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background/70 text-muted-foreground backdrop-blur transition hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-[0.82] w-full max-w-md"
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-500 via-cyan-400 to-emerald-400 blur-2xl opacity-40" />
          <div className="glass relative h-full overflow-hidden rounded-[2rem] p-3">
            <Image
              src="/Image.jpeg"
              alt="Yash Kalsariya profile placeholder"
              width={900}
              height={1100}
              priority
              className="h-full w-full rounded-[1.5rem] object-cover"
            />
          </div>
          {floatingTech.map((item) => (
            <motion.div
              key={item.className}
              className={`absolute grid h-14 w-14 place-items-center rounded-2xl border border-border bg-background/80 text-primary shadow-soft backdrop-blur ${item.className}`}
              animate={{ y: [0, -14, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
            >
              <item.icon className="h-7 w-7" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-border bg-background/70 p-3 text-muted-foreground backdrop-blur transition hover:text-primary md:block"
        aria-label="Scroll to about"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
