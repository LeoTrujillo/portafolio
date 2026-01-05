import Link from "next/link";
import React from "react";

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: "_blank" | "_self";
};

const PrimaryButton = ({
  href,
  children,
  className = "",
  target = "_self",
}: PrimaryButtonProps) => {
  const rel = target === "_blank" ? "noreferrer noopener" : undefined;

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center rounded-full bg-[color:var(--brand-600)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--brand-700)] ${className}`}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
