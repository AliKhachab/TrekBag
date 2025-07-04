import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';
import { useItemsContext } from '../lib/hooks.js';

export default function Sidebar() {
  const { handleAddItem } = useItemsContext();
  return (
    <div className="sidebar">
      <AddItemForm onAddItem = {handleAddItem}/>
      <ButtonGroup  />
    </div>
  )
}
