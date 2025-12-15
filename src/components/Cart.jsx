  import "../assets/css/cart.css";


const Cart = ({ pizzaCart, setPizzaCart }) => {
  
    const increase = (id) => {
    setPizzaCart(
      pizzaCart.map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: pizza.count + 1 }
          : pizza
      )
    );
  };

  const decrease = (id) => {
    setPizzaCart(
      pizzaCart
        .map((pizza) =>
          pizza.id === id
            ? { ...pizza, count: pizza.count - 1 }
            : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = pizzaCart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  return (
<div className="cart">
  <h2>Carrito</h2>

  {pizzaCart.length === 0 && <p>Carrito vacío</p>}

  {pizzaCart.map((pizza) => (
    <div key={pizza.id} className="cart-item">
      <img src={pizza.img} alt={pizza.name} width="70" />

      <div>
        <h4>{pizza.name}</h4>
        <p>${pizza.price}</p>
      </div>

      <div className="cart-controls">
        <button onClick={() => decrease(pizza.id)}>-</button>
        <span>{pizza.count}</span>
        <button onClick={() => increase(pizza.id)}>+</button>
      </div>
    </div>
  ))}

  <div className="cart-total">
    Total: ${total}
  </div>
</div>

  );
};

export default Cart;
