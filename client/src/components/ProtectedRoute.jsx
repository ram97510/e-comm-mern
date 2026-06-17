import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = sessionStorage.getItem("isVerified");
  

  return isAuthenticated === "true" ? children : <Navigate to="/" />;
}

export default ProtectedRoute;