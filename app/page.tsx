"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [query, setQuery] = useState("");
  const [heroes, setHeroes] = useState([]);

  const searchHero = async () => {
    const res = await axios.get(
      `http://localhost:4000/api/heroes/search/${query}`,
      { withCredentials: true }
    );
    setHeroes(res.data);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Hero-X 🦸</h1>

      <div className="flex gap-4">
        <input
          className="p-2 rounded text-black"
          placeholder="Search hero..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={searchHero}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {heroes.map((hero: any) => (
          <div key={hero.id} className="bg-gray-800 p-4 rounded">
            <img src={hero.image.url} alt={hero.name} />
            <h2 className="text-xl mt-2">{hero.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
