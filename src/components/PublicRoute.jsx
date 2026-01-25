import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const PublicRoute = ({ children }) => {
  const { token } = useUser();

  // Si YA está logueado → home
  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
