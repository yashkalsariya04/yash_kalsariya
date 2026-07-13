import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import type { Experience, NavItem, Project, SkillGroup, Social } from "@/types/portfolio";

export const profile = {
  name: "Yash Kalsariya",
  title: "Full Stack Developer",
  tagline: "Full Stack Developer | Java | Python | MERN",
  email: "yashkalsariya040@gmail.com",
  phone: "+91 97730 08978",
  location: "Ahmedabad, Gujarat, India",
  resume: "/Profile.pdf",
  about:
    "Computer Engineering graduate from SAL Institute of Technology and Engineering Research, affiliated with Gujarat Technological University. I build full-stack web applications, work across modern databases and software technologies, and enjoy turning practical problems into clean, reliable products.",
  intro:
    "I am passionate about software development, hackathons, coding competitions, and real-world projects. I enjoy collaborating with teams, sharing knowledge, and continuously improving my craft across web, full-stack, cloud, and data-driven technologies.",
  highlights: [
    "Hands-on full-stack application development experience",
    "Academic and project experience across MERN, Java, Python, and TypeScript",
    "Exposure to Microsoft Azure, AI, Data Analytics, Infrastructure, and Power BI"
  ]
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export const stats = [
  { value: "3+", label: "Professional Roles" },
  { value: "20+", label: "Technologies" },
  { value: "2026", label: "BE Graduate" },
  { value: "4", label: "Languages" }
];

export const skillGroups: SkillGroup[] = [
  { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"], level: 88 },
  { category: "Backend", skills: ["Node.js", "Express.js", "Java", "Python", "REST APIs"], level: 84 },
  { category: "Mobile", skills: ["Responsive UI", "PWA Concepts", "Mobile-first Design"], level: 74 },
  { category: "Database", skills: ["MongoDB", "SQL", "Data Modeling", "Query Design"], level: 80 },
  { category: "Cloud", skills: ["Microsoft Azure", "AI Services", "Infrastructure", "Power BI"], level: 76 },
  { category: "DevOps", skills: ["GitHub", "Git", "Deployment", "CI/CD Basics"], level: 78 },
  { category: "AI", skills: ["Azure AI", "Data Analytics", "Automation", "Prompting"], level: 72 },
  { category: "Tools", skills: ["VS Code", "Postman", "Project Management", "Collaboration"], level: 86 }
];

export const experiences: Experience[] = [
  {
    company: "ThitaInfo",
    role: "Software Developer",
    duration: "May 2026 - Present",
    location: "Ahmedabad",
    bullets: [
      "Contributing to production software development across full-stack workflows.",
      "Collaborating with teams to translate business needs into maintainable technical solutions.",
      "Strengthening engineering practices through practical delivery and continuous learning."
    ]
  },
  {
    company: "Sonoma Infotech Pvt. Ltd.",
    role: "Full Stack Developer",
    duration: "January 2026 - April 2026",
    location: "Ahmedabad",
    bullets: [
      "Built and maintained full-stack application features with modern web technologies.",
      "Worked across frontend interfaces, backend logic, and database-backed workflows.",
      "Improved practical understanding of application architecture and delivery."
    ]
  },
  {
    company: "CloudThat",
    role: "Microsoft Specialist",
    duration: "July 2025 - July 2025",
    location: "Bengaluru, Karnataka, India",
    bullets: [
      "Gained hands-on exposure to Microsoft Azure services.",
      "Worked with AI, Data Analytics, Infrastructure solutions, and Power BI for data visualization.",
      "Explored cloud-first solution design and Microsoft ecosystem capabilities."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "MERN Commerce Platform",
    description: "A polished full-stack commerce experience with product browsing, authentication, cart flows, and admin-ready architecture.",
    features: ["Responsive storefront", "Secure API structure", "Reusable product modules"],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "TypeScript"],
    github: "https://github.com/yashkalsariya04",
    demo: "#contact",
    gradient: "from-indigo-500 via-sky-500 to-cyan-400"
  },
  {
    title: "Azure Analytics Dashboard",
    description: "A dashboard concept inspired by Azure data analytics and Power BI workflows, designed for clean executive reporting.",
    features: ["Metric cards", "Data visualization", "Cloud-ready structure"],
    technologies: ["Azure", "Power BI", "Python", "TypeScript"],
    github: "https://github.com/yashkalsariya04",
    demo: "#contact",
    gradient: "from-emerald-400 via-teal-500 to-blue-500"
  },
  {
    title: "Developer Knowledge Hub",
    description: "A collaborative learning platform concept for sharing software development notes, tutorials, and project references.",
    features: ["Searchable content", "Author profiles", "Modern markdown workflow"],
    technologies: ["Next.js", "React", "Tailwind CSS", "GitHub"],
    github: "https://github.com/yashkalsariya04",
    demo: "#contact",
    gradient: "from-violet-500 via-fuchsia-500 to-rose-400"
  }
];

export const education = [
  {
    institution: "SAL Institute of Technology and Engineering Research, Ahmedabad",
    degree: "Bachelor of Engineering - Computer Engineering",
    duration: "September 2022 - June 2026",
    detail: "Affiliated with Gujarat Technological University"
  },
  {
    institution: "Gujarat Technological University",
    degree: "Computer Engineering",
    duration: "September 2022 - June 2026",
    detail: "Degree program focused on software engineering fundamentals and applied development."
  }
];

export const certifications = [
  {
    title: "Microsoft Azure, AI, Data Analytics, Infrastructure and Power BI Exposure",
    issuer: "CloudThat",
    date: "July 2025"
  },
  {
    title: "Professional Certification Placeholder",
    issuer: "Add issuer here",
    date: "Add date"
  }
];

export const achievements = [
  "Actively participated in hackathons and coding competitions.",
  "Built real-world academic and full-stack projects.",
  "Hands-on exposure to Azure cloud services and analytics tools.",
  "Multilingual communicator: English, Gujarati, Hindi."
];

export const socials: Social[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yash-kalsariya-8872b9306", icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/yashkalsariya04", icon: FaGithub },
  { label: "X", href: "https://x.com/YashKalsar76914", icon: FaXTwitter },
  { label: "LeetCode", href: "https://leetcode.com/u/kalsariya_yash/", icon: SiLeetcode }
];
