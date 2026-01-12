const Pizza = ({ pizza, pizzaCart, setPizzaCart }) => {

  const addToCart = () => {
    const pizzaExists = pizzaCart.find((p) => p.id === pizza.id);

    if (pizzaExists) {
      setPizzaCart(
        pizzaCart.map((p) =>
          p.id === pizza.id
            ? { ...p, count: p.count + 1 }
            : p
        )
      );
    } else {
      setPizzaCart([
        ...pizzaCart,
        { ...pizza, count: 1 }
      ]);
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={pizza.img} alt={pizza.name} />

        <div className="card-body">
          <h5>{pizza.name}</h5>
          <p>{pizza.desc}</p>

          <ul className="list-unstyled">
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}> {ingredient}</li>
            ))}
          </ul>
        </div>

        <button onClick={addToCart}>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Pizza;
