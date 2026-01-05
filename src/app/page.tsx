import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/sections/Hero";
import AboutSection from "@/sections/About";
import ProjectsSection from "@/sections/Projects";
import TechnologiesSection from "@/sections/Technologies";
import BlogSection from "@/sections/Blog";
import FooterSection from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--foreground)]">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechnologiesSection />
      <BlogSection />
      <FooterSection />
    </main>
  );
}
