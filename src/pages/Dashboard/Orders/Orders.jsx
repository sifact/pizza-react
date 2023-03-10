import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Order from "./Order";

const Orders = () => {
    const [ordersData, setOrdersData] = useState([]);

    useEffect(() => {
        const url = "https://pizza-react-server.vercel.app/orders";

        fetch(url)
            .then((res) => res.json())
            .then((data) => setOrdersData(data));
    }, []);

    return (
        <div className="flex w-full items-center justify-center">
            {/* <Sidebar /> */}
            <div>
                {ordersData.map((order) => (
                    <Order key={order._id} order={order} />
                ))}
            </div>
        </div>
    );
};

export default Orders;
