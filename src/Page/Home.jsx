import Header from "../components/Header";
import Productos from "../components/Productos";

const Home = ({ pizzaCart, setPizzaCart }) => {
  return (
    <>
      <Header />
      <Productos
        pizzaCart={pizzaCart}
        setPizzaCart={setPizzaCart}
      />
    </>
  );
};

export default Home;
