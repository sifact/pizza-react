import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

import peperoni from "../assets/img/piz1.jpg";
import { cartContext } from "../Contexts/CartProvider";

const ProductsDetails = () => {
    const pizza = useLoaderData();

    const [isAdding, setIsAdding] = useState(false);
    const { _id, name, price, size, img, desc } = pizza;
    const { cart, setCart } = useContext(cartContext);

    const addToCart = (product) => {
        // local variable
        let _cart = { ...cart };

        if (!_cart.items) {
            _cart.items = {};
        }

        if (_cart.items[product._id]) {
            _cart.items[product._id] += 1;
        } else {
            _cart.items[product._id] = 1;
        }

        if (!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;
        setCart(_cart);
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
        }, 1000);
    };

    return (
        <div className="container mx-auto my-12 ">
            <Link to="/">
                <button className="mb-12 font-bold">Back</button>
            </Link>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full">
                <div className="sm:w-1/2">
                    <img
                        className="mx-auto rounded-lg"
                        style={{ width: 300 }}
                        src={img ? img : peperoni}
                        alt="pizza"
                    />
                </div>

                <div className="sm: w-1/2">
                    <p className="text-2xl font-bold ">{name}</p>
                    <p className="text-lg my-4">{size}</p>
                    <p className="text-2xl font-bold">Tk {price}</p>
                    <p className="my-4">
                        {desc
                            ? desc
                            : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et magnam non sunt a earum natus beatae omnis ipsum
                        nesciunt dolores doloremque autem, nostrum nihil eum
                        odio quia aliquid rerum nisi.`}
                    </p>
                    <button
                        disabled={isAdding}
                        className={`${
                            isAdding ? "bg-yellow-600" : "bg-primary "
                        } py-1 px-4 rounded-full font-bold mt-4`}
                        onClick={() => addToCart(pizza)}
                    >
                        ADD{isAdding ? "ED" : ""} to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;
