import EmptyView from "./EmptyView";
import Select from "react-select";
import { useState } from "react";

export default function ItemList( { items, handleToggleItem, handleDeleteItem } ) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "unpacked") {
      return a.packed - b.packed;
    } else if (sortBy === "packed") {
      return b.packed - a.packed;
    } else {
      return;
    }
  });

  const sortingOptions = [
    {
      label: "Sort by default",
      value: "default"
    },
    {
      label: "Sort by unpacked",
      value: "unpacked"
    },
    {
      label: "Sort by packed",
      value: "packed"
    }
  ];

  return (
    <ul className="item-list">
      {
        items.length === 0 && <EmptyView />
      }
      {
        items.length > 0 && 
        <section className="sorting">
          <Select onChange={option => setSortBy(option.value)} defaultValue={sortingOptions[0]} options={sortingOptions}/>
        </section>
      }
      {sortedItems.map((item) => (
        <Item key={item.id} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} item={item} />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <>
      <li className="item">
        <label>
          <input onChange={() => onToggleItem(item.id)} type="checkbox" checked={item.packed} /> {item.name}
        </label>

        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    </>
  );
}
