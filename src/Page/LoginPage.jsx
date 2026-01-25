import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import { useUser } from "../context/UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [msg, setMsg] = useState(null);
  const [type, setType] = useState("success");

  const { login } = useUser();       // 👈 Context
  const navigate = useNavigate();   // 👈 Router

  const handleSubmit = (e) => {
    e.preventDefault();

    // Credenciales
    const TEST_EMAIL = "admin@pizza.cl";
    const TEST_PASS = "123456";

    // Validaciones
    if (!email || !pass) {
      setMsg("Todos los campos son obligatorios.");
      setType("danger");
      return;
    }

    if (email !== TEST_EMAIL || pass !== TEST_PASS) {
      setMsg("Credenciales incorrectas");
      setType("danger");
      return;
    }

    // Login real (simulado)
    login();

    setMsg("Login exitoso ✔");
    setType("success");

    // Redirigir al home
    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  return (
    <AuthLayout title="Iniciar sesión">

      {/* MENSAJE */}
      {msg && <Alert variant={type}>{msg}</Alert>}

      <Form onSubmit={handleSubmit}>

        {/* EMAIL */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>

          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@pizza.cl"
          />
        </Form.Group>

        {/* PASSWORD */}
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>

          <Form.Control
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="123456"
          />
        </Form.Group>

        {/* BOTÓN */}
        <Button
          type="submit"
          variant="warning"
          className="w-100 fw-bold"
        >
          Entrar
        </Button>


        {/* CREDENCIALES DEMO */}
        <div className="text-center mt-3">
          <small className="text-light">
            Demo:<br />
            admin@pizza.cl<br />
            123456
          </small>
        </div>



      </Form>

    </AuthLayout>
  );
};

export default LoginPage;
