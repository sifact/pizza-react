import React, { useContext, useEffect, useState } from "react";
import pizza from "../assets/img/pizza.png";
import { cartContext } from "../Contexts/CartProvider";
import emptyCart from "../assets/img/empty-cart.png";
import Checkout from "../components/Checkout";

const Cart = () => {
    let total = 0;
    const [cartItems, setCartItems] = useState([]);
    const { cart, setCart } = useContext(cartContext);
    const [isLoading, setIsLoading] = useState(true);

    const [priceFetched, togglePriceFetched] = useState(false);

    useEffect(() => {
        if (!cart?.items) {
            setIsLoading(false);
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
                setIsLoading(false);
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

    return isLoading ? (
        <div className="w-screen h-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-300"></div>
        </div>
    ) : cartItems.length ? (
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1 className="my-12 font-bold">Cart Items</h1>
            <ul>
                {cartItems?.map((item) => {
                    return (
                        <li className="mb-4" key={item.id}>
                            <div className="flex items-center xxsm:flex-col sm:flex-row">
                                <div className="flex items-center mr-12">
                                    <img
                                        src={item.img ? item.img : pizza}
                                        alt=""
                                        className="h-16 rounded-lg"
                                    />
                                    <span className="font-bold ml-4 w-48">
                                        {item.name}
                                    </span>
                                </div>
                                <div className="flex justify-between xxsm:mt-8 xxsm:mb-12 sm:my-0 w-full">
                                    <div>
                                        <button
                                            className="bg-primary text-white px-4 py-2 rounded-full leading-none"
                                            onClick={() => decrement(item._id)}
                                        >
                                            -
                                        </button>
                                        <b className="mx-4">
                                            {getQuantity(item._id)}
                                        </b>
                                        <button
                                            className="bg-primary text-white px-4 py-2 rounded-full leading-none"
                                            onClick={() => increment(item._id)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <span>
                                        Tk {getSum(item._id, item.price)}
                                    </span>
                                    <button
                                        className=" bg-red-500 px-4 py-2 rounded-full leading-none text-white"
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <hr className="my-6" />
            <div className="text-right">
                <b>Grand Total:</b> Tk {total}
            </div>
            {/* <div className="text-right mt-6">
                
            </div> */}
            <Checkout cartItems={cartItems} setCartItems={setCartItems} />
        </div>
    ) : (
        <img className="mx-auto w-1/2 mt-12" src={emptyCart} alt="" />
    );
};

export default Cart;
