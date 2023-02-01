import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes";
import CartProvider, { cartContext } from "./Contexts/CartProvider";

function App() {
    const { getDefaultCart } = useContext(cartContext);

    return (
        <div className="">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
