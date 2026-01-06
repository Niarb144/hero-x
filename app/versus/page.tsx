"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Versus() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/heroes/versus", {
        withCredentials: true,
      })
      .then((res) => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-3xl mb-6">Versus ⚔️</h1>

      {data.winner && (
        <h2 className="text-green-400 text-2xl">
          Winner: {data.winner.name || "Tie"}
        </h2>
      )}
    </div>
  );
}
