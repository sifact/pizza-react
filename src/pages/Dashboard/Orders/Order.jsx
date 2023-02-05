import React from "react";
import img from "../../../assets/img/pizza.png";

const Order = ({ order }) => {
    let total = 0;
    const { name, email, time, cart, cartItems } = order;

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
            <div className="grid shadow-md rounded-md bg-gray-50 border-l-4 p-8 m-8 w-full">
                <div className="flex justify-between ">
                    <p className="text-xl font-bold">Name: {name}</p>
                    <p className="text-lg font-bold">Email: {email}</p>
                    <p className="text-lg font-bold">Time: {time}</p>
                </div>
                <div className="container mx-auto  w-full ">
                    <h1 className="my-12 font-bold">Cart Items</h1>
                    <ul>
                        {cartItems?.map((item) => {
                            return (
                                <li className="mb-4" key={item.id}>
                                    <div className="flex items-center xxsm:flex-col sm:flex-row">
                                        <div className="flex items-center mr-12">
                                            <img
                                                src={img}
                                                alt=""
                                                className="h-16"
                                            />
                                            <span className="font-bold ml-4 w-48">
                                                {item.name}
                                            </span>
                                        </div>
                                        <div className="flex justify-between xxsm:mt-8 xxsm:mb-12 sm:my-0 w-full">
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
                    <hr className="my-6" />
                    <div className="text-right">
                        <b>Grand Total:</b> $ {total}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
