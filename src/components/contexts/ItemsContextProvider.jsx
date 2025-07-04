import { createContext, useState, useEffect } from "react";
import { initialItems } from "../../lib/constants.js";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  ); // the first one if it exists, OR the second if it doesn't (opposite of AND short circuit)

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(), // unique ID using time since we do not have an auto incrementing primary key
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetItemsToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed }; // if the item matches the id, toggle it
      }
      return item; // return it's changes to list
    });
    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return <ItemsContext.Provider
  value = {{
    items,
    handleAddItem,
    handleRemoveAllItems,
    handleResetItemsToInitial,
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleDeleteItem,
    handleToggleItem,
  }}>
    { children } 
  </ItemsContext.Provider>;
}
