import React from "react";
import { FaDev } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type DevtoButtonProps = {
  href: string;
  label: string;
};

const DevtoButton = ({ href, label }: DevtoButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-3 rounded-xl bg-[color:var(--brand-600)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--brand-700)]"
    >
      <FaDev />
      {label}
      <FiExternalLink />
    </a>
  );
};

export default DevtoButton;
