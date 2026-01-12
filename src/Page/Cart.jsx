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
    (acc, pizza) => acc + pizza.precio * pizza.count,
    0
  );

  return (
    <div className="cart">
      <h2>🛒 Tu carrito</h2>

      {pizzaCart.length === 0 && (
        <p className="cart-empty">Carrito vacío</p>
      )}

      {pizzaCart.map((pizza) => (
        <div key={pizza.id} className="cart-item">
          <img src={pizza.imagen} alt={pizza.nombre} />

          <div className="cart-info">
            <h4>{pizza.nombre}</h4>
            <p>${pizza.precio}</p>
          </div>

          <div className="cart-controls">
            <button onClick={() => decrease(pizza.id)}>-</button>
            <span>{pizza.count}</span>
            <button onClick={() => increase(pizza.id)}>+</button>
          </div>
        </div>
      ))}

      <div className="cart-total">
        Total: <span>${total}</span>
      </div>
    </div>
  );
};

export default Cart;
