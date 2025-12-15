import { pizzas } from "./pizzas";
import CardPizza from "./CardPizza";

const PizzaList = ({ pizzaCart, setPizzaCart }) => {
  return (
    <div className="pizza-grid">
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          pizza={pizza}
          pizzaCart={pizzaCart}
          setPizzaCart={setPizzaCart}
        />
      ))}
    </div>
  );
};

export default PizzaList;
