import Button from "./Button";
import { useItemsContext } from '../lib/hooks.js';

export default function ButtonGroup() {
  const { handleMarkAllAsComplete, handleMarkAllAsIncomplete, handleResetItemsToInitial, handleRemoveAllItems } = useItemsContext();
  const secondaryButtons = [
    {text: "Mark all as complete", handler: handleMarkAllAsComplete},
    {text: "Mark all as incomplete", handler: handleMarkAllAsIncomplete},
    {text: "Reset to initial", handler: handleResetItemsToInitial},
    {text: "Remove all items", handler: handleRemoveAllItems},
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
