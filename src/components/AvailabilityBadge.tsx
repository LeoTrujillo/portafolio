import React from "react";

type AvailabilityBadgeProps = {
  label: string;
};

const AvailabilityBadge = ({ label }: AvailabilityBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-100)] px-3 py-1 text-xs font-medium text-[color:var(--brand-600)]">
      <span
        className="glow-dot h-2 w-2 rounded-full bg-emerald-500"
        aria-hidden="true"
      />
      {label}
    </div>
  );
};

export default AvailabilityBadge;
