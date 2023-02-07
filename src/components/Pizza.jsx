import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import peperoni from "../assets/img/pizza.png";
import { cartContext } from "../Contexts/CartProvider";

const Pizza = ({ pizza }) => {
    const [isAdding, setIsAdding] = useState(false);
    const { img, _id, name, size, price } = pizza;
    const { cart, setCart } = useContext(cartContext);

    console.log(img);
    const addToCart = (e, product) => {
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
        <div className="shadow-md bg-gray-100 h-auto p-8 rounded-md">
            <Link to={`/productDetails/${_id}`}>
                <img src={img ? img : peperoni} alt="pizza" />

                <div className="text-center">
                    <h2 className="text-lg font-bold py-2 ">{name}</h2>
                    <span className="bg-gray-200 rounded-full text-sm px-4">
                        {size}
                    </span>
                </div>
            </Link>
            <div className="flex justify-between items-center mt-4">
                <span>$ {price}</span>
                <button
                    disabled={isAdding}
                    className={`${
                        isAdding ? "bg-green-500" : "bg-yellow-500 "
                    } py-1 px-4 rounded-full font-bold`}
                    onClick={(e) => addToCart(e, pizza)}
                >
                    ADD{isAdding ? "ED" : ""}
                </button>
            </div>
        </div>
    );
};

export default Pizza;
