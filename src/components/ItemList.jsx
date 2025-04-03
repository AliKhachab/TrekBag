import EmptyView from "./EmptyView";
import Select from "react-select";
import { useMemo, useState } from "react";

import { useItemsStore } from "../stores/itemsStore.js";

export default function ItemList( ) {
  const [sortBy, setSortBy] = useState("default");
  const items = useItemsStore(state => state.items);
  const deleteItem = useItemsStore(state => state.deleteItem);
  const toggleItem = useItemsStore(state => state.toggleItem);

  const sortedItems = useMemo(() => [...items].sort((a, b) => {
    if (sortBy === "unpacked") {
      return a.packed - b.packed; 
    } else if (sortBy === "packed") {
      return b.packed - a.packed; 
    } else {
      return;
    }
  }), [items, sortBy]);

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
        <Item key={item.id} onDeleteItem={deleteItem} onToggleItem={toggleItem} item={item} />
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
