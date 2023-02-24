import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import cartLogo from "../assets/img/cart.png";
import { cartContext } from "../Contexts/CartProvider";
import { AuthContext } from "../Contexts/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const { cart } = useContext(cartContext);

    const cartStyle = {
        // background: "#F59E0D",
        background: "#65a30d",
        display: "flex",
        padding: "6px 12px",
        borderRadius: "50px",
    };

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((e) => console.log(e.message));
    };

    return (
        <>
            <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between my-4">
                <Link to="/" className="flex items-center">
                    <img style={{ height: 35 }} src={logo} alt="logo" />
                    <span className="ml-4 text-2xl font-bold text-primary">
                        FAWAZmall BD
                    </span>
                </Link>

                <ul className="flex items-center text-sm sm:text-lg gap-2 sm:gap-4 md:flex md:flex-row md:justify-end md:items-center">
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
                        <Link to="/dashboard84d23ece2b8a4a60eb50955b">
                            Dashboard
                        </Link>
                    </li>
                    {user?.uid ? (
                        <li className="md:ml-4">
                            <Link to="/register" onClick={handleLogOut}>
                                Log out
                            </Link>
                        </li>
                    ) : (
                        <>
                            <li className="md:ml-4">
                                <Link to="/login">Log in</Link>
                            </li>
                            <li className="md:ml-4">
                                <Link to="/register">Sign up</Link>
                            </li>
                        </>
                    )}

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
