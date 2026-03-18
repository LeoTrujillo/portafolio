import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  body?: string;
  eyebrow?: string;
  align?: "left" | "center";
};

const SectionHeader = ({
  title,
  subtitle,
  body,
  eyebrow,
  align = "center",
}: SectionHeaderProps) => {
  const textAlign = align === "left" ? "text-left" : "text-center";
  const contentWidth = align === "left" ? "max-w-3xl" : "mx-auto max-w-3xl";
  const description = body ?? subtitle;

  return (
    <div className={textAlign}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-600)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={`${contentWidth} mt-4 text-sm leading-7 text-[color:var(--muted)] sm:text-lg`}>
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
