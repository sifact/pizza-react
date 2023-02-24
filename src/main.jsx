import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import AuthProvider from "./Contexts/AuthProvider";
import CartProvider from "./Contexts/CartProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <AuthProvider>
        <CartProvider>
            <Toaster />
            <App />
        </CartProvider>
    </AuthProvider>

    // </React.StrictMode>
);
