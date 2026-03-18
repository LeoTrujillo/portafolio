import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Leonardo Trujillo | Senior Frontend Engineer",
  description:
    "Portafolio de Leonardo Trujillo, Senior Frontend Engineer especializado en React, TypeScript, performance y arquitectura frontend para productos escalables.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${poppins.variable} ${firaCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
