import { Link } from "react-router-dom";
import { Navbar as RBNavbar, Container, Button, Badge } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const NavBar = () => {
  const { cart, total } = useCart();

  const quantity = cart.reduce(
    (acc, p) => acc + p.count,
    0
  );

  return (
    <RBNavbar bg="dark" variant="dark" fixed="top">
      <Container>
        <RBNavbar.Brand as={Link} to="/" className="text-warning fw-bold">
          🍕 Pizzería Mamma Mia!
        </RBNavbar.Brand>

        <div className="ms-auto d-flex align-items-center gap-3">
          <Button
            as={Link}
            to="/cart"
            variant="outline-warning"
            className="position-relative"
          >
            🛒
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
      </Container>
    </RBNavbar>
  );
};

export default NavBar;
