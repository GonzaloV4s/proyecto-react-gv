const CardPizza = ({ pizza, pizzaCart, setPizzaCart }) => {
  const addToCart = () => {
    const exists = pizzaCart.find((item) => item.id === pizza.id);

    if (exists) {
      setPizzaCart(
        pizzaCart.map((item) =>
          item.id === pizza.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    } else {
      setPizzaCart([
        ...pizzaCart,
        {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,
          img: pizza.img,
          count: 1,
        },
      ]);
    }
  };

  return (
    <div className="card">
      <img src={pizza.img} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>${pizza.price}</p>

      <button onClick={addToCart}>Agregar</button>
    </div>
  );
};

export default CardPizza;
