import React, { useContext, useEffect, useState } from "react";
import img from "../assets/img/pizza.png";
import { cartContext } from "../Contexts/CartProvider";
import emptyCart from "../assets/img/empty-cart.png";

const Cart = () => {
    let total = 0;
    const [cartItems, setCartItems] = useState([]);
    const { cart, setCart } = useContext(cartContext);

    const [priceFetched, togglePriceFetched] = useState(false);

    useEffect(() => {
        if (!cart?.items) {
            return;
        }

        if (priceFetched) {
            return;
        }

        const url =
            `https://pizza-react-server.vercel.app/cartItems?ids=` +
            Object.keys(cart.items);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCartItems(data);
                togglePriceFetched(true);
            });
    }, [cart]);

    const getQuantity = (id) => {
        return cart.items[id];
    };

    const increment = (id) => {
        const existingQuantity = cart.items[id];
        const _cart = { ...cart };
        _cart.items[id] = existingQuantity + 1;
        _cart.totalItems += 1;
        setCart(_cart);
    };
    const decrement = (id) => {
        const existingQuantity = cart.items[id];

        if (existingQuantity === 1) {
            return;
        }

        const _cart = { ...cart };
        _cart.items[id] = existingQuantity - 1;
        _cart.totalItems -= 1;
        setCart(_cart);
    };

    const getSum = (id, price) => {
        const sum = getQuantity(id) * price;
        total += sum;
        return sum;
    };

    const handleDelete = (id) => {
        const _cart = { ...cart };
        const quantity = _cart.items[id];
        delete _cart.items[id];
        _cart.totalItems -= quantity;
        setCart(_cart);
        const updatedProductList = cartItems.filter((item) => item._id !== id);
        setCartItems(updatedProductList);
    };

    const handleOrder = () => {
        window.alert("Order placed successfully!");
        setCartItems([]);
        setCart([]);
    };
    return cartItems.length ? (
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1 className="my-12 font-bold">Cart Items</h1>
            <ul>
                {cartItems?.map((item) => {
                    return (
                        <li className="mb-4" key={item.id}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={img} alt="" className="h-16" />
                                    <span className="font-bold ml-4 w-48">
                                        {item.name}
                                    </span>
                                </div>
                                <div>
                                    <button
                                        className="bg-yellow-500 px-4 py-2 rounded-full leading-none"
                                        onClick={() => decrement(item._id)}
                                    >
                                        -
                                    </button>
                                    <b className="mx-4">
                                        {getQuantity(item._id)}
                                    </b>
                                    <button
                                        className="bg-yellow-500 px-4 py-2 rounded-full leading-none"
                                        onClick={() => increment(item._id)}
                                    >
                                        +
                                    </button>
                                </div>

                                <span>$ {getSum(item._id, item.price)}</span>
                                <button
                                    className=" bg-red-500 px-4 py-2 rounded-full leading-none text-white"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <hr className="my-6" />
            <div className="text-right">
                <b>Grand Total:</b> $ {total}
            </div>
            <div className="text-right mt-6">
                <button
                    className=" bg-yellow-500 px-4 py-2 rounded-full leading-none"
                    onClick={handleOrder}
                >
                    Order Now
                </button>
            </div>
        </div>
    ) : (
        <img className="mx-auto w-1/2 mt-12" src={emptyCart} alt="" />
    );
};

export default Cart;
