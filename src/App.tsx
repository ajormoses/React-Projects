import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import "./assets/tailwind.css";
import "@mdi/font/css/materialdesignicons.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
