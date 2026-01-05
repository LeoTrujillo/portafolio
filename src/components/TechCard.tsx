import React from "react";

type TechCardProps = {
  icon: React.ReactNode;
  label: string;
  iconClassName?: string;
};

const TechCard = ({ icon, label, iconClassName = "" }: TechCardProps) => {
  return (
    <article className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-[color:var(--brand-100)]">
      <div className={`text-4xl ${iconClassName}`}>{icon}</div>
      <span className="text-sm font-semibold text-[color:var(--foreground)]">
        {label}
      </span>
    </article>
  );
};

export default TechCard;
