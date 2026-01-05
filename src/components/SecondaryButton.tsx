import Link from "next/link";
import React from "react";

type SecondaryButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: "_blank" | "_self";
};

const SecondaryButton = ({
  href,
  children,
  className = "",
  target = "_self",
}: SecondaryButtonProps) => {
  const rel = target === "_blank" ? "noreferrer noopener" : undefined;

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--foreground)] shadow-sm transition hover:border-[color:var(--brand-600)] hover:text-[color:var(--brand-600)] ${className}`}
    >
      {children}
    </Link>
  );
};

export default SecondaryButton;
