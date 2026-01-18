import "../assets/css/cart.css";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increase, decrease, total } = useCart();

  return (
    <div className="cart">
      <h2>🛒 Tu carrito</h2>

      {cart.length === 0 && (
        <p className="cart-empty">Carrito vacío</p>
      )}

      {cart.map((pizza) => (
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
