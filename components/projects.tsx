"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Projects() {
  const technologies = useMemo(() => ["All", ...Array.from(new Set(projects.flatMap((project) => project.technologies)))], []);
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((project) => project.technologies.includes(active));

  return (
    <MotionSection id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Premium project cards ready for real links"
          description="Resume did not include detailed project names, so these are professional placeholders aligned with your skills and experience."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {technologies.map((technology) => (
            <button
              key={technology}
              onClick={() => setActive(technology)}
              className={cn(
                "rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur transition hover:text-foreground",
                active === technology && "border-primary/40 bg-primary text-primary-foreground"
              )}
            >
              {technology}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <motion.div key={project.title} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ y: -8 }}>
              <Card className="group h-full overflow-hidden">
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_28%),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.22))]" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/20 bg-white/12 p-4 text-white backdrop-blur-xl">
                    <div className="text-xs uppercase tracking-[0.18em] opacity-80">Featured Build</div>
                    <div className="mt-1 text-lg font-semibold">{project.title}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
                  <div className="mt-5 space-y-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Badge key={technology}>{technology}</Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Button asChild variant="secondary" size="sm">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild size="sm">
                      <a href={project.demo}>
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}
