import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./assets/tailwind.css";
import App from "./App.tsx";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<App />} />
      </Routes> */}
      <App />
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}
