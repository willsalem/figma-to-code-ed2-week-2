import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { CartProvider } from "../src/components/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
