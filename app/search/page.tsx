"use client";

import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);


  const searchHero = async () => {
  if (!query) return;

  try {
    setLoading(true);
    setHeroes([]);

    const res = await axios.get(
      `http://localhost:4000/api/heroes/search/${query}`,
      { withCredentials: true }
    );

    setHeroes(res.data);

    if (res.data.length === 0) {
      alert("No hero found with that name.");
    }
  } catch (error) {
    alert("Something went wrong while searching.");
  } finally {
    setLoading(false);
  }
};

  function HeroLoader() {
  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-blue-500/20"></div>
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-5 text-sm uppercase tracking-widest text-blue-400">
        Loading heroes
      </p>
    </div>
  );
}

  return (
    <main className="min-h-screen md:w-full bg-gray-900 text-white p- bg-cover bg-center"
    style={{ backgroundImage: "url('/images/comics-bg.jpg')" }}>

      <div className="flex gap-4 pt-30 pl-8">
        <input
          className="p-2 rounded text-white bg-gray-700"
          placeholder="Search hero..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={searchHero}
          disabled={loading}
          className={`px-4 py-2 rounded transition-all duration-300
            ${loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500"}
          `}
        >
          {loading ? "Searching..." : "Search"}
        </button>

      </div>

      {loading && <HeroLoader />}

      {!loading && (
        <div className="grid md:grid-cols-3 gap-6 mt-10 p-4">
          {heroes.map((hero: any) => (
            <div
              key={hero.id}
              className="bg-gray-800 p-4 rounded-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={hero.image.url}
                alt={hero.name}
                className="rounded mb-2"
              />
              <h2 className="text-xl font-bold mt-2">{hero.name}</h2>
              <ul className="mt-2 text-sm text-gray-300">
                <li>{hero.appearance.gender}</li>
                <li>{hero.appearance.race}</li>
                <li>Height: {hero.appearance.height[1]}</li>
                <li>Weight: {hero.appearance.weight[1]}</li>
                <li>Eye Color: {hero.appearance["eye-color"]}</li>
                <li>Hair Color: {hero.appearance["hair-color"]}</li>
              </ul>
            </div>
          ))}
        </div>
      )}

    </main>
  );
}
