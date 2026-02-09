import Fruit from "./Fruit.jsx";
function Hello(props) {
  const Fruits = [
    { name: "apple", price: 10 },
    { name: "banana", price: 20 },
    { name: "pear", price: 30 },
  ];
  return (
    <div>
      <ul>
        {Fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </div>
  );
}
export default Hello;
