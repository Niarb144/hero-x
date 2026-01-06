"use client";

import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const [heroes, setHeroes] = useState([]);

  const searchHero = async () => {
    const res = await axios.get(
      `http://localhost:4000/api/heroes/search/${query}`,
      { withCredentials: true }
    );

    setHeroes(res.data);

    if(res.data.length === 0){
        alert("No hero found with that name.");
    }
    console.log(res.data);
  };

  return (
    <main className="min-h-screen md:w-full bg-gray-900 text-white p-8"
    style={{ backgroundImage: "url('/images/comics-bg.jpg')" }}>
        <Navbar />
      <h1 className="text-4xl font-bold mb-6">Hero-X</h1>

      <div className="flex gap-4">
        <input
          className="p-2 rounded text-white bg-gray-700"
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
            <ul className=" mt-2">
              <li>{hero.appearance["gender"]}</li>
              <li>{hero.appearance["race"]}</li>      
              <li>Height: {hero.appearance["height"][1]}/{hero.appearance["height"][0]}</li>   
              <li>Weight: {hero.appearance["weight"][1]}/{hero.appearance["weight"][0]}</li>
              <li>Eye Color: {hero.appearance["eye-color"]}</li>
              <li>Hair Color: {hero.appearance["hair-color"]}</li>
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
