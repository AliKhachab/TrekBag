import Button from "./Button";

export default function ButtonGroup( { onResetItemsToInitial, onRemoveAllItems, onMarkAllAsComplete, onMarkAllAsIncomplete } ) {
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
