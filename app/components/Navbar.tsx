import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <h1 className="text-white text-2xl font-bold">Hero-X</h1>
      <img src="/images/logo.png" alt="Hero-X Logo" className="h-10 w-10 mt-2" />

      <ul>
        <li><a href="/search" className="text-white hover:text-gray-300">Search</a></li>
        <li><a href="/versus" className="text-white hover:text-gray-300">Versus</a></li>
      </ul>
    </nav>
  );
}