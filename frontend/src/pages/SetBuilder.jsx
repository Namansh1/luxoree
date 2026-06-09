import React, { useState } from "react";
import { fragrances } from "../Data/Products";
import { sets } from "../Data/sets";

const SetBuilder = () => {
  const [selectedSet, setSelectedSet] = useState(sets[0]);
  const [selected, setSelected] = useState([]);

  const toggleSelect = (item) => {
    const exists = selected.find((i) => i.id === item.id);

    if (exists) {
      setSelected(selected.filter((i) => i.id !== item.id));
    } else {
      if (selected.length < selectedSet.maxSelect) {
        setSelected([...selected, item]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-3xl font-serif mb-6">
        Build Your Luxury Set
      </h1>

      {/* SET SWITCH */}
      <div className="flex gap-4 mb-8">
        {sets.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              setSelectedSet(s);
              setSelected([]);
            }}
            className="px-4 py-2 border border-gray-600"
          >
            {s.name}
          </button>
        ))}
      </div>

      <p className="mb-4 text-gray-400">
        Select {selectedSet.maxSelect} fragrance(s)
      </p>

      {/* FRAGRANCE GRID */}
      <div className="grid grid-cols-4 gap-6">

        {fragrances.map((f) => (
          <div
            key={f.id}
            onClick={() => toggleSelect(f)}
            className={`p-3 border cursor-pointer transition ${
              selected.find((i) => i.id === f.id)
                ? "border-yellow-400"
                : "border-gray-700"
            }`}
          >
            <img src={f.image} className="h-32 w-full object-cover" />
            <h3 className="mt-2">{f.name}</h3>
          </div>
        ))}

      </div>

      {/* SUMMARY */}
      <div className="mt-10">
        <h2 className="text-lg">
          Selected: {selected.length}/{selectedSet.maxSelect}
        </h2>

        <div className="flex gap-4 mt-4">
          {selected.map((s) => (
            <span key={s.id} className="px-3 py-1 border">
              {s.name}
            </span>
          ))}
        </div>

        <button
          disabled={selected.length !== selectedSet.maxSelect}
          className="mt-6 px-6 py-3 bg-yellow-500 text-black disabled:opacity-40"
        >
          Buy Now ₹{selectedSet.price}
        </button>
      </div>

    </div>
  );
};

export default SetBuilder;
