import Button from "./Button";
import { secondaryButtons } from "../lib/constants.js";

export default function ButtonGroup( { onRemoveAllItems } ) {

  return (
    <section className="button-group">
      {
        secondaryButtons.map(text => {
          return <Button key={text} type="secondary">{text}</Button>
        })
      }
    </section>
  )
}
