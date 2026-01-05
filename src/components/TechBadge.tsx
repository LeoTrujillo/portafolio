import React from "react";

type TechBadgeProps = {
  label: string;
};

const TechBadge = ({ label }: TechBadgeProps) => {
  return (
    <span className="rounded-full bg-[color:var(--brand-100)] px-3 py-1 text-xs font-semibold text-[color:var(--brand-600)]">
      {label}
    </span>
  );
};

export default TechBadge;
