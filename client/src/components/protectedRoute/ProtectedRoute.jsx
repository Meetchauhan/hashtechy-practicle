import { Navigate } from "react-router-dom";
import useUser from "../../customHooks/useUser";

const ProtectedRoute = ({ children }) => {
  const { token } = useUser();

  if (token === null) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
