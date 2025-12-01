
import Producto from './Producto';
import margaritaImg from '../assets/img/margarita.jpg';
import peperoniImg from '../assets/img/peperoni.jpg';
import cquesosiImg from '../assets/img/4quesos.jpg';
import vgiImg from '../assets/img/vg.jpg';
import hwiImg from '../assets/img/hw.jpg';
import bbqiImg from '../assets/img/bbq.jpg';


const Productos = () => {
  const listaProductos = [
    { 
      nombre: "Pizza Margarita", 
      precio: 1000, 
      imagen: margaritaImg, 
      ingredientes: ["Tomate", "Mozzarella", "Albahaca", "Aceite de oliva"] 
    },
    { 
      nombre: "Pizza Pepperoni", 
      precio: 2000, 
      imagen: peperoniImg, 
      ingredientes: ["Tomate", "Mozzarella", "Pepperoni"] 
    },
    { 
      nombre: "Pizza Cuatro Quesos", 
      precio: 3000, 
      imagen: cquesosiImg, 
      ingredientes: ["Mozzarella", "Gorgonzola", "Parmesano", "Fontina"] 
    },
    { 
      nombre: "Pizza Vegetariana", 
      precio: 4000, 
      imagen: vgiImg, 
      ingredientes: ["Tomate", "Mozzarella", "Pimientos", "Cebolla", "Champiñones", "Aceitunas"] 
    },
    { 
      nombre: "Pizza Hawaiana", 
      precio: 5000, 
      imagen: hwiImg, 
      ingredientes: ["Tomate", "Mozzarella", "Jamón", "Piña"] 
    },
    { 
      nombre: "Pizza BBQ", 
      precio: 6000, 
      imagen: bbqiImg,
      ingredientes: ["Pollo", "Mozzarella", "Salsa BBQ", "Cebolla morada"] 
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {listaProductos.map((item, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <Producto 
              nombre={item.nombre} 
              precio={item.precio} 
              imagen={item.imagen} 
              ingredientes={item.ingredientes} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;