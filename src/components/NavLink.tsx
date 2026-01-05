import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-[color:var(--muted)] transition hover:text-[color:var(--foreground)]"
    >
      {children}
    </Link>
  );
};

export default NavLink;
