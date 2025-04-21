import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto">
        <Link href="/" className="text-2xl font-bold">
          Leo Trujillo
        </Link>
        <div className="space-x-4">
          <Link href="/">Inicio</Link>
          <Link href="/proyectos">Proyectos</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
