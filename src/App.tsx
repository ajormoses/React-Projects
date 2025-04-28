import { PrimeReactProvider } from "primereact/api";
import { Routes, Route, useLocation, Navigate } from "react-router";
import { useEffect } from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ShoppingCarts from "./pages/ShoppingCarts";
import Checkout from "./pages/Checkout";
import Filters from "./pages/Filters";
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
    <PrimeReactProvider value={{ unstyled: true }}>
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/shopping-carts" element={<ShoppingCarts />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/filters" element={<Filters />} />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </>
    </PrimeReactProvider>
  );
}

export default App;
