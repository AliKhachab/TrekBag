import Footer from "./Footer.jsx";
import BackgroundHeading from "./BackgroundHeading.jsx";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import Sidebar from "./Siderbar.jsx";
import AddItemForm from "./AddItemForm.jsx";
import ButtonGroup from "./ButtonGroup.jsx";
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
      return {...item, packed: true};
    });
    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return {...item, packed: false};
    });
    setItems(newItems);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
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
