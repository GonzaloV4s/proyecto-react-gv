import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

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
      setMsg("El password debe tener al menos 6 caracteres.");
      setType("danger");
      return;
    }

    if (pass !== confirm) {
      setMsg("Las contraseñas no coinciden.");
      setType("danger");
      return;
    }

    setMsg("Registro exitoso");
    setType("success");
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "400px" }}>
      <h2 className="mb-3">Registro</h2>

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
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="******"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirmar Password</Form.Label>
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
    </div>
  );
};

export default RegisterPage;
