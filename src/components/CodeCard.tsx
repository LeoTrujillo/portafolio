import React from "react";

const CodeCard = () => {
  return (
    <div className="w-full rounded-[28px] border border-[color:var(--border)] bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
      <div className="flex items-center justify-between border-b border-[color:var(--border)] pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-600)]">
            Frontend audit
          </p>
          <p className="mt-1 text-sm font-semibold text-[color:var(--foreground)]">
            De MVP frágil a base escalable
          </p>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          Producción
        </span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["Problema", "Features lentas y regresiones al iterar."],
          ["Intervención", "Arquitectura, performance y criterios claros."],
          ["Impacto", "Más velocidad de entrega con menos fricción."],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-[color:var(--border)] bg-[#f8fafc] p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--brand-600)]">
              {label}
            </p>
            <p className="mt-2 text-sm leading-6 text-[color:var(--foreground)]">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl bg-[color:var(--code-bg)] p-4 text-xs text-slate-200 shadow-inner sm:text-sm">
        <pre className="overflow-x-auto font-code leading-relaxed">
          <code>
            <span className="text-emerald-400">const</span>{" "}
            <span className="text-sky-300">engagement</span>{" "}
            <span className="text-slate-200">=</span>{" "}
            <span className="text-slate-200">{"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-slate-400">focus</span>
            <span className="text-slate-200">:</span>{" "}
            <span className="text-amber-300">&apos;product stability&apos;</span>
            <span className="text-slate-200">,</span>
            {"\n"}
            {"  "}
            <span className="text-slate-400">stack</span>
            <span className="text-slate-200">:</span>{" "}
            <span className="text-slate-200">[</span>
            <span className="text-amber-300">&apos;React&apos;</span>
            <span className="text-slate-200">,</span>{" "}
            <span className="text-amber-300">&apos;TypeScript&apos;</span>
            <span className="text-slate-200">,</span>{" "}
            <span className="text-amber-300">&apos;Architecture&apos;</span>
            <span className="text-slate-200">],</span>
            {"\n"}
            {"  "}
            <span className="text-slate-400">approach</span>
            <span className="text-slate-200">:</span>{" "}
            <span className="text-amber-300">&apos;move fast without breaking scale&apos;</span>
            <span className="text-slate-200">,</span>
            {"\n"}
            {"  "}
            <span className="text-slate-400">outcome</span>
            <span className="text-slate-200">:</span>{" "}
            <span className="text-amber-300">&apos;fewer regressions, better delivery&apos;</span>
            {"\n"}
            <span className="text-slate-200">{"};"}</span>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeCard;
