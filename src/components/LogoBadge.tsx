import React from "react";

type LogoBadgeProps = {
  initials: string;
};

const LogoBadge = ({ initials }: LogoBadgeProps) => {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--brand-600)] text-sm font-semibold text-white shadow-sm">
      {initials}
    </div>
  );
};

export default LogoBadge;
