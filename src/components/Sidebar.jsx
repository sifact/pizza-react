import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Contexts/CartProvider";

const Sidebar = () => {
    const { closeSidebar } = useContext(cartContext);

    return (
        <div className="h-screen px-16 bg-gray-100 rounded-md shadow-md border-b-4 border-primary sticky top-0">
            <div className="text-right pt-4 ">
                <button
                    className="text-4xl font-semibold text-red-700 hover:text-red-500 focus:outline-none"
                    onClick={closeSidebar}
                >
                    ×
                </button>
            </div>

            <div className=" pt-20 flex">
                <ul>
                    <li className="mb-4 hover:text-primary transition">
                        <Link to="/dashboard84d23ece2b8a4a60eb50955b/allProducts">
                            Products
                        </Link>
                    </li>
                    <li className="mb-4 hover:text-primary transition">
                        <Link to="/dashboard84d23ece2b8a4a60eb50955b/addProducts">
                            Add Products
                        </Link>
                    </li>
                    <li className="mb-4 hover:text-primary transition">
                        <Link to="/dashboard84d23ece2b8a4a60eb50955b/Orders">
                            Orders
                        </Link>
                    </li>
                    <li className="mb-4 hover:text-primary transition">
                        <Link to="/dashboard84d23ece2b8a4a60eb50955b/users">
                            Users
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
