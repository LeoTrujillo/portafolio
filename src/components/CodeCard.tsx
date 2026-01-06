import React from "react";

const CodeCard = () => {
  return (
    <div className="w-full rounded-2xl border border-[color:var(--border)] bg-white p-4 shadow-[0_20px_50px_rgba(91,91,255,0.15)]">
      <div className="flex items-center gap-2 pb-3">
        <span className="h-3 w-3 rounded-full bg-rose-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>
      <div className="rounded-xl bg-[color:var(--code-bg)] p-4 text-xs text-slate-200 shadow-inner sm:text-base">
        <pre className="font-code leading-relaxed overflow-x-auto sm:overflow-x-hidden">
          <code>
            <span className="text-emerald-400">const</span>{" "}
            <span className="text-sky-300">developer</span>{" "}
            <span className="text-slate-200">=</span>{" "}
            <span className="text-slate-200">{"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-slate-400">name</span>
            <span className="text-slate-200">:</span>{" "}
            <span className="text-amber-300">&apos;Leonardo Trujillo&apos;</span>
            <span className="text-slate-200">,</span>
            {"\n"}
            {"  "}
            <span className="text-slate-400">role</span>
            <span className="text-slate-200">:</span>{" "}
            <span className="text-amber-300">&apos;Frontend Dev&apos;</span>
            <span className="text-slate-200">,</span>
            {"\n"}
            {"  "}
            <span className="text-slate-400">skills</span>
            <span className="text-slate-200">:</span>{" "}
            <span className="text-slate-200">[</span>
            <span className="text-amber-300">&apos;React&apos;</span>
            <span className="text-slate-200">,</span>{" "}
            <span className="text-amber-300">&apos;Next&apos;</span>
            <span className="text-slate-200">,</span>{" "}
            <span className="text-amber-300">&apos;React Native&apos;</span>
            <span className="text-slate-200">],</span>
            {"\n"}
            {"  "}
            <span className="text-slate-400">passion</span>
            <span className="text-slate-200">:</span>{" "}
            <span className="text-amber-300">&apos;Building&apos;</span>
            {"\n"}
            <span className="text-slate-200">{"};"}</span>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeCard;
