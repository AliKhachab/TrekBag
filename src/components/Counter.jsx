export default function Counter({ totalItems, totalPacked }) {
  return (
    <p>
      <b>{totalPacked} </b>/ {totalItems} items packed
    </p>
  );
}
