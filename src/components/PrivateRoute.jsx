import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { token } = useUser();

  // Si NO está logueado → login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Si está logueado → renderiza
  return children;
};

export default PrivateRoute;
