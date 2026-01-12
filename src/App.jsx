import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Page/Home";
import Productos from "./components/Productos";
import LoginPage from "./Page/LoginPage";
import RegisterPage from "./Page/RegisterPage";
import Cart from "./Page/Cart";
import Profile from "./components/Profile";
import PizzaPage from "./Page/PizzaPage";
import NotFound from "./components/NotFound";

function App() {
  const [pizzaCart, setPizzaCart] = useState([]);

  return (
    <div className="d-flex flex-column min-vh-100 w-100">
      {/* Navbar fijo arriba */}
      <NavBar pizzaCart={pizzaCart} />

      {/* Main ocupa todo el ancho y se separa del navbar */}
      <main
        className="flex-fill w-100"
        style={{ paddingTop: "56px" }}  // altura del navbar
      >
        <div className="container-fluid p-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route
              path="/cart"
              element={
                <Cart
                  pizzaCart={pizzaCart}
                  setPizzaCart={setPizzaCart}
                />
              }
            />

            <Route
              path="/pizza/:id"
              element={
                <PizzaPage
                  pizzaCart={pizzaCart}
                  setPizzaCart={setPizzaCart}
                />
              }
            />

            <Route path="/profile" element={<Profile />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
