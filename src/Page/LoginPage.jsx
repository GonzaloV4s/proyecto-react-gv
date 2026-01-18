import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import AuthLayout from "../components/AuthLayout";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState(null);
  const [type, setType] = useState("success");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !pass) {
      setMsg("Todos los campos son obligatorios.");
      setType("danger");
      return;
    }

    if (pass.length < 6) {
      setMsg("La contraseña debe tener al menos 6 caracteres.");
      setType("danger");
      return;
    }

    setMsg("Login exitoso ✔");
    setType("success");
  };

  return (
    <AuthLayout title="Iniciar sesión">
      {msg && <Alert variant={type}>{msg}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="usuario@example.com"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="******"
          />
        </Form.Group>

        <Button type="submit" variant="warning" className="w-100 fw-bold">
          Entrar
        </Button>
      </Form>
    </AuthLayout>
  );
};

export default LoginPage;
