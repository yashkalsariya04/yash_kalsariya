"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { profile, stats } from "@/data/portfolio";

export function About() {
  return (
    <MotionSection id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="A practical builder with a full-stack mindset"
          description="Resume-derived professional summary, shaped into a portfolio narrative that is easy to refine as your career grows."
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-6 md:p-8">
            <h3 className="text-2xl font-semibold">Professional Story</h3>
            <p className="mt-4 leading-8 text-muted-foreground">{profile.about}</p>
            <div className="mt-6 grid gap-3">
              {profile.highlights.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg bg-accent/60 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span className="text-sm leading-6 text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Card>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass rounded-lg p-5"
              >
                <div className="text-3xl font-semibold text-gradient">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
