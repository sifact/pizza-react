import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartProvider from "./Contexts/CartProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <CartProvider>
        <App />
    </CartProvider>
    // </React.StrictMode>
);
