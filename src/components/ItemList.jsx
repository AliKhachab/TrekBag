import EmptyView from "./EmptyView";

export default function ItemList( { items, handleToggleItem, handleDeleteItem } ) {
  return (
    <ul className="item-list">
      {
        items.length === 0 && <EmptyView />
      }
      {items.map((item) => (
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
