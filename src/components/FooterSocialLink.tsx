import React from "react";

type FooterSocialLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

const FooterSocialLink = ({ href, label, children }: FooterSocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
    >
      {children}
    </a>
  );
};

export default FooterSocialLink;
