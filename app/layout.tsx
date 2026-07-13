import type { Metadata } from "next";
import { Toaster } from "sonner";
import { AnimatedBackground } from "@/components/animated-background";
import { CustomCursor } from "@/components/custom-cursor";
import { LoadingScreen } from "@/components/loading-screen";
import { ScrollProgress } from "@/components/scroll-progress";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yash-kalsariya.dev"),
  title: {
    default: "Yash Kalsariya - Full Stack Developer",
    template: "%s - Yash Kalsariya"
  },
  description:
    "Premium portfolio of Yash Kalsariya, a Full Stack Developer from Ahmedabad specializing in MERN, Java, Python, TypeScript, Azure, and modern web applications.",
  keywords: ["Yash Kalsariya", "Full Stack Developer", "MERN", "Java", "Python", "TypeScript", "Ahmedabad"],
  authors: [{ name: "Yash Kalsariya" }],
  openGraph: {
    title: "Yash Kalsariya - Full Stack Developer",
    description: "Full-stack portfolio showcasing experience, projects, skills, education, and contact details.",
    url: "https://yash-kalsariya.dev",
    siteName: "Yash Kalsariya Portfolio",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Yash Kalsariya Portfolio" }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Kalsariya - Full Stack Developer",
    description: "MERN, Java, Python, TypeScript, Azure, and modern full-stack software development."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <LoadingScreen />
          <ScrollProgress />
          <AnimatedBackground />
          <SmoothScroll />
          <CustomCursor />
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
