import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Producto = ({ pizza }) => {
  const { addToCart } = useCart();

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">

      <div className="product-card">

        {/* IMAGEN */}
        <img
          src={pizza.imagen}
          alt={pizza.nombre}
          className="product-img"
        />

        {/* CONTENIDO */}
        <div className="product-body">

          <h5>{pizza.nombre}</h5>

          <p className="product-ingredients">
            {pizza.ingredientes.join(", ")}
          </p>

          <strong className="product-price">
            ${pizza.precio}
          </strong>

          {/* BOTONES */}
          <div className="d-flex gap-2 mt-2">

            {/* DETALLES */}
            <Link
              to={`/pizza/${pizza.id}`}
              className="btn btn-outline-light w-50"
            >
              Detalles
            </Link>

            {/* AÑADIR */}
            <button
              className="btn btn-warning w-50"
              onClick={() => addToCart(pizza)}
            >
              Añadir
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Producto;
