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
        const district = form.district.value;
        const ps = form.ps.value;
        const po = form.po.value;
        const village = form.village.value;
        const house = form.house.value;
        const mobile = form.mobile.value;

        const time = new Date().toLocaleString();

        const ordersObj = {
            name,
            email,
            district,
            ps,
            po,
            village,
            house,
            mobile,
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
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        className="block w-full border border-gray-300 rounded-sm p-4  my-4 outline-primary"
                        required
                    />
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="block w-full border border-gray-300 rounded-sm outline-primary p-4 my-4"
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        className="block w-full border border-gray-300 rounded-sm outline-primary p-4 my-4"
                        type="text"
                        placeholder="District"
                        required
                        name="district"
                    />
                    <input
                        className="block w-full border border-gray-300 rounded-sm outline-primary p-4 my-4"
                        type="text"
                        name="ps"
                        placeholder="Upazila/Police Station"
                        required
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        className="block w-full border border-gray-300 rounded-sm outline-primary p-4 my-4"
                        type="text"
                        placeholder="Post Office/area"
                        name="po"
                        required
                    />
                    <input
                        className="block w-full border border-gray-300 rounded-sm outline-primary p-4 my-4"
                        type="text"
                        placeholder="Village/sector"
                        required
                        name="village"
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        className="block w-full border border-gray-300 rounded-sm outline-primary p-4 my-4"
                        type="text"
                        placeholder="House Number"
                        name="house"
                    />
                    <input
                        className="block w-full border border-gray-300 rounded-sm outline-primary p-4 my-4"
                        type="text"
                        placeholder="Mobile Number"
                        required
                        name="mobile"
                    />
                </div>

                <button className=" bg-primary hover:bg-yellow-500 px-6 py-4 rounded-full leading-none mt-6">
                    Order Now
                </button>
            </form>
        </div>
    );
};

export default Checkout;
