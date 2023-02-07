import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="h-screen xl:w-72 pr-8 bg-gray-100 rounded-md shadow-md border-b-4 border-yellow-500">
            <div className="pl-20 pt-20 flex">
                <ul>
                    <li className="mb-4 hover:text-yellow-500 transition">
                        <Link to="/allProducts">Products</Link>
                    </li>
                    <li className="mb-4 hover:text-yellow-500 transition">
                        <Link to="/addProducts">Add Products</Link>
                    </li>
                    <li className="mb-4 hover:text-yellow-500 transition">
                        <Link to="/Orders">Orders</Link>
                    </li>
                    <li className="mb-4 hover:text-yellow-500 transition">
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
