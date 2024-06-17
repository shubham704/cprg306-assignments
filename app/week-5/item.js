const Item = ({ name, quantity, category }) => {
  return (
    <li className="list-none bg-black-100 border rounded-lg p-4 m-2 w-72">
      <p className="font-bold text-lg text-sky-400">{name}</p>
      <p className="text-white-400">Quantity: {quantity}</p>
      <p className="text-white-400">Category: {category}</p>
    </li>
  );
};

export default Item;
