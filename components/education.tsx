"use client";

import { Award, GraduationCap, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { achievements, certifications, education } from "@/data/portfolio";

export function Education() {
  return (
    <MotionSection id="education">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation and recognition"
          description="Education is extracted from the resume; certifications and achievements include placeholders where details were not present."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Education Timeline</h3>
            </div>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.institution} className="rounded-lg border border-border bg-background/50 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h4 className="font-semibold">{item.degree}</h4>
                      <p className="mt-1 text-sm text-primary">{item.institution}</p>
                    </div>
                    <span className="rounded-full bg-accent px-3 py-1 text-xs text-muted-foreground">{item.duration}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </Card>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="mb-5 flex items-center gap-3">
                <Award className="h-6 w-6 text-cyan-400" />
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((item) => (
                  <div key={item.title} className="rounded-lg bg-accent/50 p-4">
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {item.issuer} - {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <div className="mb-5 flex items-center gap-3">
                <Trophy className="h-6 w-6 text-emerald-400" />
                <h3 className="text-xl font-semibold">Achievements</h3>
              </div>
              <div className="space-y-3">
                {achievements.map((item) => (
                  <div key={item} className="text-sm leading-6 text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
