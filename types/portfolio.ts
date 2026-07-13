import type { IconType } from "react-icons";

export type NavItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
  level: number;
};

export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  bullets: string[];
};

export type Project = {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  github: string;
  demo: string;
  gradient: string;
};

export type Social = {
  label: string;
  href: string;
  icon: IconType;
};
