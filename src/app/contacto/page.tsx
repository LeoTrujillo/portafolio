import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Leonardo Trujillo",
  description:
    "Canales de contacto para proyectos freelance, colaboraciones de largo plazo y posiciones remotas senior.",
};

export default function Contacto() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center text-[color:var(--foreground)]">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Hablemos de tu producto</h1>
        <p className="text-lg leading-8 text-[color:var(--muted)]">
          Puedes escribirme a <a className="font-semibold text-[color:var(--brand-600)]" href="mailto:hi@leonardotrujillo.dev">hi@leonardotrujillo.dev</a> o llamarme al <a className="font-semibold text-[color:var(--brand-600)]" href="tel:+522225670424">+52 (222) 567-0424</a>.
        </p>
      </div>
    </main>
  );
}
