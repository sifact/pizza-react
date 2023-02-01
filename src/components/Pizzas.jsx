import React, { useEffect, useState } from "react";
import Pizza from "./Pizza";

const Pizzas = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/products`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">Products</h1>

            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 my-8 gap-24">
                {data.map((pizza) => (
                    <Pizza key={pizza._id} pizza={pizza} />
                ))}
            </div>
        </div>
    );
};

export default Pizzas;
