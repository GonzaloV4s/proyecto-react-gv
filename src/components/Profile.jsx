import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  // Simulación de usuario logueado
  const userEmail = "usuario@pizzeria.cl";

  const navigate = useNavigate();

  const handleLogout = () => {
    // aquí luego puedes borrar token / estado global
    navigate("/login");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card
        bg="dark"
        text="light"
        className="shadow"
        style={{ width: "22rem" }}
      >
        <Card.Body className="text-center">
          <Card.Title className="mb-4 text-warning">
            Mi Perfil 🍕
          </Card.Title>

          <Card.Text className="mb-3">
            <strong>Correo:</strong>
            <br />
            {userEmail}
          </Card.Text>

          <Button
            variant="outline-warning"
            className="w-100 fw-bold"
            onClick={handleLogout}
          >
            Cerrar sesión
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
