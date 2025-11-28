import { PrimeReactProvider } from "primereact/api";
import { AuthProvider } from "./contexts/authContext";
import PrivateRoute from "./components/PrivateRoute";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import "./assets/tailwind.css";
import "@mdi/font/css/materialdesignicons.css";
import AuthSignIn from "./pages/auth/SignIn";
import AuthCreateAccount from "./pages/auth/CreateAccount";
import Dashboard from "./pages/dashboard";
import Preview from "./pages/preview";
import { Toaster } from "react-hot-toast";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
  };

  return (
    <AuthProvider>
      <PrimeReactProvider value={{ unstyled: true }}>
        <BrowserRouter>
          <ScrollToTop />
          <Toaster position="top-right" reverseOrder={false} />
          <Routes>
            <Route path="/auth/signin" element={<AuthSignIn />} />
            <Route
              path="/auth/create-account"
              element={<AuthCreateAccount />}
            />
            <Route path="/public-preview/:id" element={<Preview />} />

            {/* Protected route */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route
              path="/preview/:id"
              element={
                <PrivateRoute>
                  <Preview />
                </PrivateRoute>
              }
            />

            {/* Catch-all route */}
            <Route path="*" element={<Navigate to="/auth/signin" replace />} />
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </AuthProvider>
  );
}

export default App;
