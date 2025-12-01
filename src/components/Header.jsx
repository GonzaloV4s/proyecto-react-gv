
import '../assets/css/header.css';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="header-banner d-flex flex-column justify-content-center align-items-center text-center bg-dark text-white py-5">
      <Container>
        <h1 className="fw-bold  mb-3">
          ¡Bienvenido a Pizzería Mamma Mia!
        </h1>
        <p className="fs-5 text-light">
          Descubre nuestras pizzas artesanales, preparadas con ingredientes frescos y el auténtico sabor italiano.  
          Disfruta cada bocado y comparte momentos únicos con quienes más quieres.
        </p>
      </Container>
    </header>
  );
};

export default Header;