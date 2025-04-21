import HeroSection from "@/sections/Hero";
import Layout from "@/components/Layout";
import AboutSection from "@/sections/About";
import ContactSection from "@/sections/Contact";


export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}
