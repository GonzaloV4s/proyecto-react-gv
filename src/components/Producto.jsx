
const Producto = ({ nombre, precio, imagen, ingredientes = [] }) => {
  return (
    <div className="card bg-dark text-white shadow-lg h-100">
      {/* Imagen */}
      <img
        src={imagen}
        alt={nombre}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        {/* Nombre */}
        <h5 className="card-title fw-bold">{nombre}</h5>

        {/* Ingredientes*/}
        <p className="card-text text-light" style={{ fontSize: "0.9rem" }}>
          {ingredientes.slice(0, 10).join(", ")}
        </p>

        {/* Precio*/}
        <h4 className="mt-auto mb-3 text-warning fw-bold">Precio: ${precio}</h4>

        {/* Botones*/}
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-light">Ver más</button>
          <button className="btn btn-warning">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Producto;