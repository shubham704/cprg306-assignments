"use client";

import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { addItem, getItems } from "../_services/shopping-list-service";

const Page = () => {
  const [items, setItems] = useState([]);
  const [mealIdeas, setMealIdeas] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Event handler to add a new item
  async function handleAddItem(newItem) {
    const item = {
      name: newItem.name,
      quantity: newItem.quantity,
      category: newItem.category,
    };
    try {
      const itemId = await addItem(user.uid, item);
      console.log(itemId);
    } catch (error) {
      console.log(error);
    }
    setItems((prevItems) => [...prevItems, item]);
  }

  async function handleGetItem() {
    const data = await getItems(user.uid); // Ensure to await the async function
    setItems(data);
  }
  // Event handler to select an item
  const handleItemSelect = (item) => {
    if (item.name.includes(",")) {
      const ingredient = item.name.split(",")[0].trim(); // Split by comma and take the first part
      setSelectedItemName(ingredient);
    } else {
      const ingredient = item.name.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
      setSelectedItemName(ingredient);
    }
  };

  return (
    <div className="flex">
      <button
        className="bg-orange-700 p-1 m-2 mt-10 w-28 h-10"
        onClick={handleGetItem}
      >
        get item
      </button>
      <div class="flex-1 max-w-sm m-2">
        {/* Render NewItem component and pass handleAddItem as onAddItem prop */}
        <NewItem onAddItem={handleAddItem} />

        {/* Render ItemList component and pass items and handleItemSelect as props */}
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div class="flex-1 max-w-lg m-2 p-3 ">
        {/* Render MealIdeas component and pass selectedItemName as a prop */}
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
};

export default Page;
