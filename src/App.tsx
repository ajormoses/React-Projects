import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import ProductPage from "./pages/Product";
import "./assets/tailwind.css";
import "@mdi/font/css/materialdesignicons.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
