import { Link } from "react-router-dom";
import {
  Navbar as RBNavbar,
  Container,
  Button,
  Badge,
} from "react-bootstrap";

import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const NavBar = () => {
  const { cart, total } = useCart();
  const { token, logout } = useUser(); // 👈 UserContext

  const quantity = cart.reduce(
    (acc, p) => acc + p.count,
    0
  );

  return (
    <RBNavbar bg="dark" variant="dark" fixed="top">
      <Container>

        {/* LOGO */}
        <RBNavbar.Brand
          as={Link}
          to="/"
          className="text-warning fw-bold"
        >
          🍕 Pizzería Mamma Mia!
        </RBNavbar.Brand>

        {/* DERECHA */}
        <div className="ms-auto d-flex align-items-center gap-3">

          {/* CARRITO */}
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

          {/* TOTAL */}
          <span className="text-warning fw-bold">
            ${total}
          </span>

          {/* AUTENTICACIÓN */}
          {token ? (
            <>
              {/* PERFIL */}
              <Button
                as={Link}
                to="/profile"
                variant="outline-light"
              >
                Perfil
              </Button>

              {/* LOGOUT */}
              <Button
                variant="danger"
                onClick={logout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              {/* LOGIN */}
              <Button
                as={Link}
                to="/login"
                variant="outline-light"
              >
                Login
              </Button>

              {/* REGISTRO */}
              <Button
                as={Link}
                to="/register"
                variant="warning"
              >
                Registro
              </Button>
            </>
          )}
        </div>
      </Container>
    </RBNavbar>
  );
};

export default NavBar;
