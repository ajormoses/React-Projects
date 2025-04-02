import { Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ShoppingCarts from "./pages/ShoppingCarts";
import Checkout from "./pages/Checkout";
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
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shopping-carts" element={<ShoppingCarts />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
