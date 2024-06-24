"use client";
import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  // Initialize state variable
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [...items];

  // Sort the items
  sortedItems.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      {/* Create sort buttons */}
      <button
        class="bg-orange-500 p-1 m-2 w-28"
        onClick={() => setSortBy("name")}
      >
        Name
      </button>
      <button
        class="bg-orange-700 p-1 m-2 w-28"
        onClick={() => setSortBy("category")}
      >
        Category
      </button>

      {/* Render sorted items */}
      {sortedItems.map((item) => (
        <div key={item.id}>
          <ul>
            <li class="p-2 m-4 bg-slate-900 max-w-sm">
              <h2 class="text-xl font-bold">{item.name}</h2>

              <div class="text-sm">
                Buy {item.quantity} in {item.category}
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
