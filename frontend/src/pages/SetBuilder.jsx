import React, { useState } from "react";
import { fragrances, sets } from "../Data/Products";

const SetBuilder = () => {
  const [selectedSet, setSelectedSet] = useState(sets[0]);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (item) => {
    if (selectedItems.find((i) => i.id === item.id)) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      if (selectedItems.length < selectedSet.maxSelect) {
        setSelectedItems([...selectedItems, item]);
      }
    }
  };

  return (
    <div className="p-10 bg-black text-white min-h-screen">

      <h1 className="text-3xl mb-6 font-serif">
        Build Your Luxury Set
      </h1>

      {/* SET SELECTOR */}
      <div className="flex gap-4 mb-10">
        {sets.map((s) => (
          <button
            key={s.id}
            onClick={() => {
              setSelectedSet(s);
              setSelectedItems([]);
            }}
            className="border px-4 py-2"
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* FRAGRANCES */}
      <div className="grid grid-cols-3 gap-6">
        {fragrances.map((f) => (
          <div
            key={f.id}
            onClick={() => toggleItem(f)}
            className={`p-4 border cursor-pointer ${
              selectedItems.find((i) => i.id === f.id)
                ? "border-gold"
                : "border-gray-700"
            }`}
          >
            <img src={f.image} className="h-40 object-cover" />
            <h3 className="mt-2">{f.name}</h3>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="mt-10">
        <h2>Selected: {selectedItems.length}/{selectedSet.maxSelect}</h2>

        <button
          className="mt-4 px-6 py-2 bg-white text-black"
        >
          Add Custom Set - ₹{selectedSet.basePrice}
        </button>
      </div>

    </div>
  );
};

export default SetBuilder;
