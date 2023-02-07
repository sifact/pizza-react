import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import cartLogo from "../assets/img/cart.png";
import { cartContext } from "../Contexts/CartProvider";

const Navbar = () => {
    const { cart } = useContext(cartContext);

    const cartStyle = {
        background: "#F59E0D",
        display: "flex",
        padding: "6px 12px",
        borderRadius: "50px",
    };
    return (
        <>
            <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between my-4">
                <Link to="/">
                    <img style={{ height: 45 }} src={logo} alt="logo" />
                </Link>

                <ul className="flex items-center gap-4 md:flex md:flex-row md:justify-end md:items-center">
                    <li className="md:ml-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="md:ml-4 hidden sm:block">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="md:ml-4">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="md:ml-4">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="md:ml-4">
                        <Link to="/cart">
                            <div style={cartStyle}>
                                <span className="text-white">
                                    {cart?.totalItems ? cart.totalItems : 0}
                                </span>
                                <img
                                    className="ml-2"
                                    src={cartLogo}
                                    alt="cart"
                                />
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
