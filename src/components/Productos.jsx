import Producto from "./Producto";
import "../assets/css/productos.css";


import margaritaImg from "../assets/img/margarita.jpg";
import peperoniImg from "../assets/img/peperoni.jpg";
import cquesosiImg from "../assets/img/4quesos.jpg";
import vgiImg from "../assets/img/vg.jpg";
import hwiImg from "../assets/img/hw.jpg";
import bbqiImg from "../assets/img/bbq.jpg";

export const listaProductos = [
  {
    id: "p001",
    nombre: "Pizza Margarita",
    precio: 1000,
    imagen: margaritaImg,
    ingredientes: ["Tomate", "Mozzarella", "Albahaca", "Aceite de oliva"],
  },
  {
    id: "p002",
    nombre: "Pizza Pepperoni",
    precio: 2000,
    imagen: peperoniImg,
    ingredientes: ["Tomate", "Mozzarella", "Pepperoni"],
  },
  {
    id: "p003",
    nombre: "Pizza Cuatro Quesos",
    precio: 3000,
    imagen: cquesosiImg,
    ingredientes: ["Mozzarella", "Parmesano", "Gorgonzola", "Ricotta"],
  },
  {
    id: "p004",
    nombre: "Pizza Vegetariana",
    precio: 2500,
    imagen: vgiImg,
    ingredientes: ["Tomate", "Mozzarella", "Pimentón", "Champiñones", "Aceitunas"],
  },
  {
    id: "p005",
    nombre: "Pizza Hawaiana",
    precio: 2800,
    imagen: hwiImg,
    ingredientes: ["Tomate", "Mozzarella", "Jamón", "Piña"],
  },
  {
    id: "p006",
    nombre: "Pizza BBQ",
    precio: 3200,
    imagen: bbqiImg,
    ingredientes: ["BBQ", "Mozzarella", "Pollo", "Cebolla morada"],
  },
];

const Productos = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row g-4 justify-content-center">
        {listaProductos.map((pizza) => (
          <div
            key={pizza.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
          >
            <Producto pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
