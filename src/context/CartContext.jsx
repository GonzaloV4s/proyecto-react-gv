import { createContext, useContext, useState } from "react";

// Crear el contexto
const CartContext = createContext();

// Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto
  const addToCart = (pizza) => {
    const exists = cart.find((p) => p.id === pizza.id);

    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === pizza.id
            ? { ...p, count: p.count + 1 }
            : p
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: pizza.id,
          nombre: pizza.nombre,
          precio: Number(pizza.precio),
          imagen: pizza.imagen,
          count: 1,
        },
      ]);
    }
  };

  // Actualizar cantidad
  const increase = (id) => {
    setCart(
      cart.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((p) =>
          p.id === id ? { ...p, count: p.count - 1 } : p
        )
        .filter((p) => p.count > 0)
    );
  };

  // Total
  const total = cart.reduce(
    (acc, p) => acc + p.precio * p.count,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increase,
        decrease,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado
export const useCart = () => useContext(CartContext);
