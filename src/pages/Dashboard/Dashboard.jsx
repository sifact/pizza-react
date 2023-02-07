import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import AllProducts from "./Products/AllProducts";

const Dashboard = () => {
    return (
        <div className="flex relative md:static">
            <div className="absolute md:static top-0 left-0">
                <Sidebar />
            </div>

            <AllProducts />
        </div>
    );
};

export default Dashboard;
