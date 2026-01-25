import "../assets/css/cart.css";

import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

import { Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, increase, decrease, total } = useCart();
  const { token } = useUser(); // 👈 UserContext

  return (
    <div className="cart">
      <h2>🛒 Tu carrito</h2>

      {/* CARRITO VACÍO */}
      {cart.length === 0 && (
        <p className="cart-empty">Carrito vacío</p>
      )}

      {/* LISTA DE PRODUCTOS */}
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

      {/* TOTAL */}
      <div className="cart-total">
        Total: <span>${total}</span>
      </div>

      {/* MENSAJE SI NO ESTÁ LOGUEADO */}
      {!token && cart.length > 0 && (
        <Alert variant="warning" className="mt-3 text-center">
          Debes iniciar sesión para poder pagar.
        </Alert>
      )}

      {/* BOTÓN PAGAR */}
      {cart.length > 0 && (
        <div className="text-center mt-3">

          <Button
            variant="success"
            size="lg"
            disabled={!token} 
            as={!token ? Link : undefined}
            to={!token ? "/login" : undefined}
          >
            Pagar
          </Button>

        </div>
      )}
    </div>
  );
};

export default Cart;
