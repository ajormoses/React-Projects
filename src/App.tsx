// import { PrimeReactProvider } from "primereact/api";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import "./assets/tailwind.css";
import "@mdi/font/css/materialdesignicons.css";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
  };

  return (
    // <PrimeReactProvider value={{ unstyled: true }}>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Redirect Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    // </PrimeReactProvider>
  );
}

export default App;
