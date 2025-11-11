import { PrimeReactProvider } from "primereact/api";
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
import Home from "./pages/Home";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
  };

  return (
    <PrimeReactProvider value={{ unstyled: true }}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/product" element={<Product />} />
          <Route path="/shopping-carts" element={<ShoppingCarts />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/filters" element={<Filters />} /> */}

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
