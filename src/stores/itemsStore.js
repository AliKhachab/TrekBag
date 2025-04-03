import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants";

export const useItemsStore = create(persist((set) => ({
  items: initialItems,
  addItem: (newItemText) => {
    const newItem = {
      id: new Date().getTime(), // unique ID using time since we do not have an auto incrementing primary key
      name: newItemText,
      packed: false,
    };
    set((state) => ({ items: [...state.items, newItem] }));
  },
  deleteItem: (id) => {
    const newItems = state.items.filter((item) => item.id !== id);
    return { items: newItems };
  },
  toggleItem: (id) => {
    set((state) => {
      const newItems = state.items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed }; // if the item matches the id, toggle it
        }
        return item; // return it's changes to list
      });
      return { items: newItems };
    });
  },
  removeAllItems: () => {
    set((state) => ({ items: [] }));
  },
  resetItemsToInitial: () => {
    set(() => ({ initialItems }));
  },
  markAllAsComplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: true };
      });

      return { items: newItems };
    });
  },
  markAllAsIncomplete: () => {
    set((state) => {
      const newItems = state.items.map((item) => {
        return { ...item, packed: false };
      });

      return { items: newItems };
    });
  },
}), {
    name: "items",
}));