import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

import { listaProductos } from "../components/Productos";

const PizzaDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Buscar pizza local
  const pizza = listaProductos.find(
    (p) => p.id === id
  );

  // Si no existe
  if (!pizza) {
    return (
      <p className="text-center mt-5 text-danger">
        Pizza no encontrada
      </p>
    );
  }

  return (
    <div className="container mt-4">

      <div className="row bg-dark text-light rounded shadow overflow-hidden">

        {/* Imagen */}
        <div className="col-md-6 p-0">
          <img
            src={pizza.imagen}
            alt={pizza.nombre}
            className="img-fluid w-100"
            style={{
              height: "100%",
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Info */}
        <div className="col-md-6 p-4 d-flex flex-column">

          <h2>{pizza.nombre}</h2>

          <p className="mt-3">
            {pizza.ingredientes.join(", ")}
          </p>

          <h3 className="text-warning mt-auto">
            ${pizza.precio}
          </h3>

          <button
            className="btn btn-warning btn-lg mt-3"
            onClick={() => addToCart(pizza)}
          >
            Agregar al carrito
          </button>

        </div>
      </div>
    </div>
  );
};

export default PizzaDetail;
