import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casos de Estudio | Leonardo Trujillo",
  description:
    "Página dedicada a casos de estudio y proyectos con foco en problema, solución e impacto.",
};

export default function Proyectos() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center text-[color:var(--foreground)]">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Casos de estudio en preparación</h1>
        <p className="text-lg leading-8 text-[color:var(--muted)]">
          Esta ruta se convertirá en una página dedicada con más detalle sobre problema, solución e impacto de proyectos seleccionados.
        </p>
      </div>
    </main>
  );
}
