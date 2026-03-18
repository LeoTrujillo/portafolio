import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/sections/Hero";
import ProblemSection from "@/sections/Problem";
import AboutSection from "@/sections/About";
import ProjectsSection from "@/sections/Projects";
import ProcessSection from "@/sections/Process";
import WorkWithMeSection from "@/sections/WorkWithMe";
import BlogSection from "@/sections/Blog";
import FooterSection from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Leonardo Trujillo | Portafolio",
  description:
    "Senior Frontend Engineer con foco en React, TypeScript, performance y arquitectura frontend para productos escalables.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--foreground)]">
      <SiteHeader />
      <HeroSection />
      <ProblemSection />
      <AboutSection />
      <ProjectsSection />
      <ProcessSection />
      <WorkWithMeSection />
      <BlogSection />
      <FooterSection />
    </main>
  );
}
