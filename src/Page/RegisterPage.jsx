import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import AuthLayout from "../components/AuthLayout";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");

  const [msg, setMsg] = useState(null);
  const [type, setType] = useState("success");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !pass || !confirm) {
      setMsg("Todos los campos son obligatorios.");
      setType("danger");
      return;
    }

    if (pass.length < 6) {
      setMsg("La contraseña debe tener al menos 6 caracteres.");
      setType("danger");
      return;
    }

    if (pass !== confirm) {
      setMsg("Las contraseñas no coinciden.");
      setType("danger");
      return;
    }

    setMsg("Registro exitoso ✔");
    setType("success");
  };

  return (
    <AuthLayout title="Registro">
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

        <Form.Group className="mb-3">
          <Form.Label>Confirmar contraseña</Form.Label>
          <Form.Control
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="******"
          />
        </Form.Group>

        <Button type="submit" variant="warning" className="w-100 fw-bold">
          Registrarse
        </Button>
      </Form>
    </AuthLayout>
  );
};

export default RegisterPage;
