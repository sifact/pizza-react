import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import CartProvider from "./Contexts/CartProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>

    <CartProvider>
        <Toaster />
        <App />
    </CartProvider>

    // </React.StrictMode>
);
