import React from "react";
import img from "../../../assets/img/pizza.png";
import { orderTime } from "../../../components/TimeElapsed";

const Order = ({ order }) => {
    let total = 0;
    const {
        name,
        email,
        time,
        cart,
        cartItems,
        district,
        ps,
        po,
        village,
        mobile,
    } = order;

    const getQuantity = (id) => {
        return cart.items[id];
    };

    const getSum = (id, price) => {
        const sum = getQuantity(id) * price;
        total += sum;
        return sum;
    };
    return (
        <>
            <div className="container mx-auto mb-8 grid shadow-md rounded-md bg-gray-50 border-l-4 border-primary p-4 sm:p-8 w-full">
                <div className="md:flex grid justify-between mb-4">
                    <p className="text-xl font-medium">Name: {name}</p>
                    <p className="text-lg font-medium">Email: {email}</p>
                    <p className="sm:text-lg sm:font-medium">
                        Order Placed: {orderTime(time)}
                    </p>
                </div>
                <hr />
                <div className="md:flex grid justify-between my-4">
                    <p className="text-xl font-medium">District: {district}</p>
                    <p className="text-lg font-medium">Police Station: {ps}</p>
                    <p className="sm:text-lg sm:font-medium">
                        Post Office: {po}
                    </p>
                </div>
                <hr />
                <div className="md:flex grid justify-between my-4">
                    <p className="text-xl font-medium">Village: {village}</p>
                    <p className="text-lg font-medium">House: {order?.house}</p>
                    <p className="sm:text-lg sm:font-medium">
                        Mobile: {mobile}
                    </p>
                </div>
                <hr />
                <div className=" w-full ">
                    <h1 className="my-12 font-bold">Cart Items</h1>
                    <ul>
                        {cartItems?.map((item) => {
                            return (
                                <li className="mb-4" key={item.id}>
                                    <div className="sm:flex grid items-center ">
                                        <div className="flex items-center mr-12">
                                            <img
                                                src={item.img ? item.img : img}
                                                alt=""
                                                className="h-16"
                                            />
                                            <span className="font-bold ml-4 w-48">
                                                {item.name}
                                            </span>
                                        </div>
                                        <div className="flex sm:justify-between justify-around xxsm:mt-8 xxsm:mb-12 sm:my-0 w-full">
                                            <div>
                                                <b className="mx-4">
                                                    {getQuantity(item._id)}
                                                </b>
                                            </div>

                                            <span>
                                                $ {getSum(item._id, item.price)}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <hr className="my-6 xxsm:w-4/5 sm:w-full" />
                    <div className="text-center sm:text-right w-full">
                        <b>Grand Total:</b> $ {total}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
