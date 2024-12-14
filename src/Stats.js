export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start addiing some items to your packing list 🚀 </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go fly"
          : `You have ${numItems} items on your list, and you alread packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
