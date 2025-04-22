import HeroSection from "@/sections/Hero";
import Layout from "@/components/Layout";
import AboutSection from "@/sections/About";
import ContactSection from "@/sections/Contact";
import ProjectsSection from "@/sections/Projects";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}
