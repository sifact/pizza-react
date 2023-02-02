import React, { createContext, useEffect, useState } from "react";
import { json } from "react-router";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    useEffect(() => {
        const cartJson = localStorage.getItem("cart");

        setCart(JSON.parse(cartJson));
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const cartInfo = { cart, setCart };

    return (
        <cartContext.Provider value={cartInfo}>{children}</cartContext.Provider>
    );
};

export default CartProvider;