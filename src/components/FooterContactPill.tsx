import React from "react";

type FooterContactPillProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  variant?: "solid" | "outline";
};

const FooterContactPill = ({
  href,
  icon,
  label,
  variant = "solid",
}: FooterContactPillProps) => {
  const base =
    "inline-flex items-center gap-3 rounded-xl px-5 py-3 text-sm font-semibold transition";
  const styles =
    variant === "outline"
      ? "border border-white/40 text-white hover:border-white"
      : "bg-white text-[color:var(--brand-600)] shadow-sm hover:bg-white/90";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {icon}
      {label}
    </a>
  );
};

export default FooterContactPill;
