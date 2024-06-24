"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./item.json";

const Page = () => {
  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div>
      {/* Render NewItem component and pass handleAddItem as onAddItem prop */}
      <NewItem onAddItem={handleAddItem} />

      {/* Render ItemList component and pass items as a prop */}
      <ItemList items={items} />
    </div>
  );
};
export default Page;
