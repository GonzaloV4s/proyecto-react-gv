import { Card } from "react-bootstrap";

const AuthLayout = ({ title, children }) => {
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <Card
        bg="dark"
        text="light"
        className="shadow"
        style={{ width: "22rem" }}
      >
        <Card.Body>
          <Card.Title className="text-center mb-4 text-warning fw-bold">
            {title}
          </Card.Title>

          {children}
        </Card.Body>
      </Card>
    </div>
  );
};

export default AuthLayout;
