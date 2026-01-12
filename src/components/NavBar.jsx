import { Link, NavLink } from "react-router-dom";
import { Navbar as RBNavbar, Nav, Container, Button, Badge } from "react-bootstrap";

const NavBar = ({ pizzaCart = [] }) => {

  const total = pizzaCart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  const quantity = pizzaCart.reduce(
    (acc, pizza) => acc + pizza.count,
    0
  );

  return (
    <RBNavbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <RBNavbar.Brand as={Link} to="/" className="text-warning fw-bold">
          🍕 Pizzería Mamma Mia!
        </RBNavbar.Brand>

        <RBNavbar.Toggle />
        <RBNavbar.Collapse>

          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/productos">
              Productos
            </Nav.Link>
          </Nav>

          <div className="d-flex gap-3 align-items-center">

            {/* CARRITO */}
            <Button
              as={Link}
              to="/cart"
              variant="outline-warning"
              className="position-relative"
            >
              🛒 Carrito
              {quantity > 0 && (
                <Badge
                  bg="danger"
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {quantity}
                </Badge>
              )}
            </Button>

            <span className="text-warning fw-bold">
              ${total}
            </span>

            <Button as={Link} to="/login" variant="outline-light">
              Login
            </Button>

            <Button as={Link} to="/register" variant="warning">
              Registro
            </Button>

          </div>

        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
};

export default NavBar;
