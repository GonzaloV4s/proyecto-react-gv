import { useCart } from "../context/CartContext";

const Producto = ({ pizza }) => {
  const { addToCart } = useCart();

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <div className="product-card">
        <img
          src={pizza.imagen}
          alt={pizza.nombre}
          className="product-img"
        />

        {/* 👇 ESTE CONTENEDOR ES CLAVE */}
        <div className="product-body">
          <h5>{pizza.nombre}</h5>

          <p className="product-ingredients">
            {pizza.ingredientes.join(", ")}
          </p>

          {/* 👇 SE PEGA ABAJO */}
          <strong className="product-price">
            ${pizza.precio}
          </strong>

          {/* 👇 BOTÓN FUNCIONAL */}
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={() => addToCart(pizza)}
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Producto;
