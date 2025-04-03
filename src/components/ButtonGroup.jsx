import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";


export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore(state => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(state => state.markAllAsIncomplete);
  const resetItemsToInitial = useItemsStore(state => state.resetItemsToInitial);
  const removeAllItems = useItemsStore(state => state.removeAllItems);

  const secondaryButtons = [
    {text: "Mark all as complete", handler: markAllAsComplete},
    {text: "Mark all as incomplete", handler: markAllAsIncomplete},
    {text: "Reset to initial", handler: resetItemsToInitial},
    {text: "Remove all items", handler: removeAllItems},
  ];

  return (
    <section className="button-group">
      {
        secondaryButtons.map(button => {
          return <Button onClick={button.handler} key={button.text} type="secondary">{button.text}</Button>
        })
      }
    </section>
  )
}
