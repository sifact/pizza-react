import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import AllProducts from "./Products/AllProducts";

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />

            <AllProducts />
        </div>
    );
};

export default Dashboard;
