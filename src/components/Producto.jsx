import { Link } from "react-router-dom";

const Producto = ({ pizza }) => {
  const { id, nombre, precio, imagen, ingredientes = [] } = pizza;

  return (
    <div className="product-card">
      <img src={imagen} alt={nombre} className="product-img" />

      <div className="product-body">
        <h5>{nombre}</h5>

        <p>{ingredientes.join(", ")}</p>

        <strong>${precio}</strong>

        <div className="product-actions">
          <Link to={`/pizza/${id}`} className="btn btn-outline-light">
            Ver más
          </Link>

          <button className="btn btn-warning">Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default Producto;