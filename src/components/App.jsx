import Footer from "./Footer.jsx";
import BackgroundHeading from "./BackgroundHeading.jsx";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import Sidebar from "./Siderbar.jsx";
import AddItemForm from "./AddItemForm.jsx";
import ButtonGroup from "./ButtonGroup.jsx";
import Logo from "./Logo.jsx";
import Counter from "./Counter.jsx";
import { useState } from "react";
import { initialItems } from "../lib/constants.js";

export default function App() {
  const [items, setItems] = useState(initialItems);

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

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header>
          <Logo />
          <Counter />
        </Header>
        <ItemList
          items={items}
          handleToggleItem={handleToggleItem}
          handleDeleteItem={handleDeleteItem}
        />
        <Sidebar>
          <AddItemForm onAddItem={handleAddItem} />
          <ButtonGroup
            onMarkAllAsComplete={handleMarkAllAsComplete}
            onMarkAllAsIncomplete={handleMarkAllAsIncomplete}
            onResetItemsToInitial={handleResetItemsToInitial}
            onRemoveAllItems={handleRemoveAllItems}
          />
        </Sidebar>
      </main>
      <Footer />
    </>
  );
}
