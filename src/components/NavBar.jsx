import { Navbar as RBNavbar, Nav, Container, Button } from 'react-bootstrap';

const NavBar = () => {
  const total = 25000;
  const token = false;

  return (
    <RBNavbar bg="dark" variant="dark" expand="lg" className="mb-0 shadow-sm">
      <Container>
        <RBNavbar.Brand href="#home" className="text-warning fw-bold">
          Pizzería Mamma Mia!
        </RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
        <RBNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#productos" className="text-white">Productos</Nav.Link>
            <Nav.Link href="#contacto" className="text-white">Contacto</Nav.Link>
          </Nav>
        <div className="d-flex align-items-center">
            <div className="d-flex align-items-center gap-2">
              <Button variant="outline-light">Login</Button>
              <Button variant="warning" className="fw-bold">Registro</Button>
          </div>
            <div className="d-flex align-items-center ms-4">
              <span className="me-3 text-light">Total: ${total}</span>
              <span className="text-light">
                {token ? 'Usuario autenticado' : 'Invitado'}
              </span>
            </div>
          </div>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
};

export default NavBar;
