import { useEffect, useState } from "react";
import Pizza from "./Pizza";

const PizzaList = ({ pizzaCart, setPizzaCart }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al obtener pizzas", error);
      }
    };

    getPizzas();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {pizzas.map((pizza) => (
          <Pizza
            key={pizza.id}
            pizza={pizza}
            pizzaCart={pizzaCart}
            setPizzaCart={setPizzaCart}
          />

        ))}
      </div>
    </div>
  );
};

export default PizzaList;
