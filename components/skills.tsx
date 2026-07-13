"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <MotionSection id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A modern stack across product layers"
          description="Categorized from the resume and expanded with professional placeholders that match the stated MERN, Java, Python, Azure, and TypeScript focus."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
            >
              <Card className="h-full p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold">{group.category}</h3>
                  <span className="text-sm font-semibold text-primary">{group.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${group.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 }}
                  />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
