import React, { createContext, useEffect, useState } from "react";
import { json } from "react-router";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    useEffect(() => {
        const cartJson = localStorage.getItem("cart");

        setCart(JSON.parse(cartJson));
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const openModal = () => {
        setIsOpenModal(true);
    };

    const closeModal = () => {
        setIsOpenModal(false);
    };
    const openSidebar = () => {
        setIsOpenSidebar(true);
    };

    const closeSidebar = () => {
        setIsOpenSidebar(false);
    };

    const cartInfo = {
        cart,
        setCart,
        closeModal,
        openModal,
        isOpenModal,
        setIsOpenModal,
        openSidebar,
        closeSidebar,
        isOpenSidebar,
    };

    return (
        <cartContext.Provider value={cartInfo}>{children}</cartContext.Provider>
    );
};

export default CartProvider;
