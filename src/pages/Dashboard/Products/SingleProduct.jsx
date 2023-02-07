import React, { useContext } from "react";
import defaultImg from "../../../assets/img/pizza.png";
import { Modal } from "../../../components/Modal";
import { cartContext } from "../../../Contexts/CartProvider";

const SingleProduct = ({ product, handleDelete, handleUpdate }) => {
    const { img, name, size, price, _id } = product;

    return (
        <>
            <div className="shadow-md bg-gray-100 h-auto p-6 rounded-md">
                <img
                    className="w-52 mx-auto"
                    src={img ? img : defaultImg}
                    alt=""
                />

                <h1 className="text-2xl font-bold mt-2 text-center">{name}</h1>
                <div className="flex justify-between my-4">
                    <span className="font-semibold">{size}</span>
                    <span className="text-lg font-bold text-yellow-500">
                        $ {price}
                    </span>
                    <span className="text-lg font-bold">2 pc</span>
                </div>
                <div className="flex justify-between">
                    <button
                        className=" bg-yellow-500 px-4 py-2 rounded-full leading-none text-white"
                        onClick={() => handleUpdate(product)}
                    >
                        Update
                    </button>
                    <button
                        className=" bg-red-500 px-4 py-2 rounded-full leading-none text-white"
                        onClick={() => handleDelete(_id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;
