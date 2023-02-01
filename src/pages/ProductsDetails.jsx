import React from "react";
import { useLoaderData } from "react-router";

import peperoni from "../assets/img/piz1.jpg";

const ProductsDetails = () => {
    const pizza = useLoaderData();

    const { _id, name, price, size } = pizza;

    return (
        <div className="container mx-auto mt-12">
            <button className="mb-12 font-bold">Back</button>
            <div className="flex items-center gap-8">
                <img style={{ width: 300 }} src={peperoni} alt="pizza" />
                <div className="text-center">
                    <p className="text-2xl font-bold ">{name}</p>
                    <p className="text-lg my-4">{size}</p>
                    <p>$ {price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;
