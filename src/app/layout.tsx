import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";
import { I18nProvider } from "@/i18n/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leo Trujillo - Frontend Developer",
  description: "Portfolio personal de Leo Trujillo, Frontend Developer con más de 15 años de experiencia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>"
          />
      </head>
      <body className={inter.className}>
        <I18nProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
            <ThemeToggle />
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
