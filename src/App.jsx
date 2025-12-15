import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

import { useState } from "react";

import NavBar from './components/NavBar';
import Header from './components/Header';
import Productos from './components/Productos';
import Footer from './components/Footer';
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import PizzaList from "./components/PizzaList";
import Cart from "./components/Cart";

function App() {
  const [pizzaCart, setPizzaCart] = useState([]);

  return (
    <>
      <NavBar />
      {/* <RegisterPage />*/}
      {/* <LoginPage />*/}
      {/* <Header />*/}
      {/*<Productos />*/}
      <PizzaList pizzaCart={pizzaCart} setPizzaCart={setPizzaCart} />

      <Cart pizzaCart={pizzaCart} setPizzaCart={setPizzaCart} />
       <Footer />
    </>
  );
}

export default App;
