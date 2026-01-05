import React from "react";
import {
  SiReact,
  SiVuedotjs,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiSass,
  SiGit,
  SiFigma,
  SiNpm,
  SiDocker,
  SiMongodb,
} from "react-icons/si";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import TechCard from "@/components/TechCard";

const technologies = [
  { label: "React", icon: <SiReact />, iconClassName: "text-[#61dafb]" },
  { label: "Vue.js", icon: <SiVuedotjs />, iconClassName: "text-[#42b883]" },
  { label: "JavaScript", icon: <SiJavascript />, iconClassName: "text-[#f7df1e]" },
  { label: "Node.js", icon: <SiNodedotjs />, iconClassName: "text-[#3c873a]" },
  { label: "HTML5", icon: <SiHtml5 />, iconClassName: "text-[#e34f26]" },
  { label: "CSS3", icon: <SiCss3 />, iconClassName: "text-[#1572b6]" },
  { label: "Sass", icon: <SiSass />, iconClassName: "text-[#cc6699]" },
  { label: "Git", icon: <SiGit />, iconClassName: "text-[#f05032]" },
  { label: "Figma", icon: <SiFigma />, iconClassName: "text-[#a259ff]" },
  { label: "npm", icon: <SiNpm />, iconClassName: "text-[#cb3837]" },
  { label: "Docker", icon: <SiDocker />, iconClassName: "text-[#2496ed]" },
  { label: "MongoDB", icon: <SiMongodb />, iconClassName: "text-[#47a248]" },
];

const TechnologiesSection = () => {
  return (
    <section id="tecnologias" className="bg-white py-12 sm:py-16">
      <Container>
        <SectionHeader
          title="Tecnologías"
          subtitle="Herramientas y tecnologías con las que trabajo diariamente"
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {technologies.map((tech) => (
            <TechCard
              key={tech.label}
              icon={tech.icon}
              label={tech.label}
              iconClassName={tech.iconClassName}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechnologiesSection;
