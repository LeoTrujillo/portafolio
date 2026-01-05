import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-[color:var(--foreground)] sm:text-3xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm text-[color:var(--muted)] sm:text-base">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
