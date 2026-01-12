import { useParams } from "react-router-dom";
import { listaProductos } from "../components/Productos.jsx";

const PizzaPage = ({ pizzaCart, setPizzaCart }) => {
  const { id } = useParams();

  const pizza = listaProductos.find((p) => p.id === id);

  if (!pizza) {
    return <p className="text-center mt-5">Pizza no encontrada</p>;
  }

  const addToCart = () => {
    setPizzaCart((prev) => {
      const exists = prev.find((p) => p.id === pizza.id);

      if (exists) {
        return prev.map((p) =>
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p
        );
      }

      return [...prev, { ...pizza, count: 1 }];
    });
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12">
          <div className="row g-0 bg-dark text-white shadow">
            {/* Imagen */}
            <div className="col-md-6 p-0">
              <img
                src={pizza.imagen}
                alt={pizza.nombre}
                className="img-fluid w-100"
                style={{ height: "100%", maxHeight: "500px", objectFit: "cover" }}
              />
            </div>

            {/* Información */}
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
                onClick={addToCart}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;
