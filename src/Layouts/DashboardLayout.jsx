import React, { useContext } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { cartContext } from "../Contexts/CartProvider";
import { FaBars } from "react-icons/fa";

const DashboardLayout = () => {
    const { openSidebar, isOpenSidebar } = useContext(cartContext);

    return (
        <div>
            <Navbar />
            <div className="grid mt-16 relative w-full">
                <div className="text-2xl text-yellow-500 p-4 ">
                    <FaBars className="cursor-pointer" onClick={openSidebar} />
                </div>

                <div className="sticky top-0">
                    <div
                        className={`absolute  top-0 left-0 ${
                            !isOpenSidebar && `hidden`
                        }`}
                    >
                        <Sidebar />
                    </div>
                </div>

                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
