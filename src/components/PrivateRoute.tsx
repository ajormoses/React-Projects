import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const auth = useAuth();

  if (!auth) return null; // context not ready
  const { currentUser, loading } = auth;

  if (loading) return null; // or a spinner

  if (!currentUser) {
    // Not authenticated → redirect to sign-in
    return <Navigate to="/auth/signin" replace />;
  }

  return children; // Authenticated → render the page
};

export default PrivateRoute;
