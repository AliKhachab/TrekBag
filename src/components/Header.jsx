import Logo from './Logo';
import Counter from './Counter';
import { useItemsContext } from '../lib/hooks.js';

export default function Header() {
  const { items } = useItemsContext();
  return (
    <header>
      <Logo />
      <Counter totalPacked={items.filter((item) => item.packed).length} totalItems={items.length}/>
    </header>
  )
}
