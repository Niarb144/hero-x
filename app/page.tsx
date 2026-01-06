"use client";

import Link from "next/link";

export default function Home() {
  

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <Link href="/search" className="text-4xl font-bold">Search</Link>
      <Link href="/versus" className="ml-4 text-4xl font-bold">Versus</Link>
      <p className="mt-4 text-lg">Discover your favorite superheroes and villains!</p>
    </main>
  );
}
