"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer"; 

export default function Home() {
  

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
