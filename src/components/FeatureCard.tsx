import React from "react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tone: "blue" | "purple" | "green";
};

const toneStyles = {
  blue: "bg-[#eef2ff] text-[#5b5bff]",
  purple: "bg-[#f3e8ff] text-[#8b5cf6]",
  green: "bg-[#dcfce7] text-[#16a34a]",
};

const FeatureCard = ({ icon, title, description, tone }: FeatureCardProps) => {
  return (
    <article className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-sm">
      <div
        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${toneStyles[tone]}`}
      >
        {icon}
      </div>
      <h3 className="mt-4 text-base font-semibold text-[color:var(--foreground)]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;
