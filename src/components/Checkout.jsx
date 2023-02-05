import React, { useContext } from "react";
import { cartContext } from "../Contexts/CartProvider";
import { toast } from "react-hot-toast";

const Checkout = ({ cartItems, setCartItems }) => {
    const { cart, setCart } = useContext(cartContext);

    const handleOrder = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const time = new Date().toLocaleString();

        const ordersObj = {
            name,
            email,
            time,
            cart,
            cartItems,
        };
        console.log(ordersObj);
        fetch("https://pizza-react-server.vercel.app/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(ordersObj),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success("Order placed successfully!");
                } else {
                    toast.error("failed");
                }

                setCartItems([]);
                setCart([]);
            });
    };

    return (
        <div className="container mx-auto my-4">
            <form onSubmit={handleOrder} className="bg-white rounded-lg  p-6">
                <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    className="block w-full border border-gray-300 rounded-sm p-4 my-4 outline-yellow-500"
                    required
                />
                <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="block w-full border border-gray-300 rounded-sm outline-yellow-500 p-4 my-4"
                />

                <button className=" bg-yellow-500 px-6 py-4 rounded-full leading-none mt-6">
                    Order Now
                </button>
            </form>
        </div>
    );
};

export default Checkout;
