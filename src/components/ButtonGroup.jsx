import Button from "./Button";
import { useItemsContext } from '../lib/hooks.js';

export default function ButtonGroup() {
  const { onMarkAllAsComplete, onMarkAllAsIncomplete, onResetItemsToInitial, onRemoveAllItems } = useItemsContext();
  const secondaryButtons = [
    {text: "Mark all as complete", handler: onMarkAllAsComplete},
    {text: "Mark all as incomplete", handler: onMarkAllAsIncomplete},
    {text: "Reset to initial", handler: onResetItemsToInitial},
    {text: "Remove all items", handler: onRemoveAllItems},
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
