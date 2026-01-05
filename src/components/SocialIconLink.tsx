import React from "react";

type SocialIconLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

const SocialIconLink = ({ href, label, children }: SocialIconLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted)] transition hover:border-[color:var(--brand-600)] hover:text-[color:var(--brand-600)]"
    >
      {children}
    </a>
  );
};

export default SocialIconLink;
