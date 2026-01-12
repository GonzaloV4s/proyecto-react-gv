import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const NotFound = () => {
  return (
    <div className="container text-center text-light my-5">
      <h1 className="display-4 text-danger">404</h1>
      <p className="lead">Página no encontrada</p>

      <Button as={Link} to="/" variant="warning">
        Volver al inicio
      </Button>
    </div>
  );
};

export default NotFound;
