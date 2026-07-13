"use client";

import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <MotionSection id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Recent roles and hands-on growth"
          description="A clean timeline built from the work history in the resume."
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-indigo-500 via-cyan-400 to-emerald-400 md:left-1/2" />
          <div className="space-y-8">
            {experiences.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative grid gap-4 pl-12 md:grid-cols-2 md:pl-0 ${index % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2"}`}
              >
                <span className="absolute left-[9px] top-7 h-3 w-3 rounded-full bg-primary ring-8 ring-primary/15 md:left-[calc(50%-6px)]" />
                <Card className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{item.role}</h3>
                      <p className="mt-1 flex items-center gap-2 text-sm text-primary">
                        <Building2 className="h-4 w-4" />
                        {item.company}
                      </p>
                    </div>
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-muted-foreground">{item.duration}</span>
                  </div>
                  <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {item.location}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
