import React, { useEffect, useState } from "react";

import SingleProduct from "./SingleProduct";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = "http://localhost:5000/products";

        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="flex flex-col w-full">
            <h1 className="text-center text-2xl font-bold">Products</h1>
            <div className="p-8 grid grid-cols-3 gap-8 w-full">
                {products.map((product) => (
                    <SingleProduct product={product} />
                ))}
            </div>
        </div>
    );
};

export default AllProducts;
