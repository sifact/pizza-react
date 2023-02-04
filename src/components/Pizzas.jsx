import React, { useEffect, useState } from "react";
import Pizza from "./Pizza";

const Pizzas = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `https://pizza-react-server.vercel.app/products`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">Products</h1>

            <>
                {isLoading ? (
                    <div className="z-50 flex justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-300"></div>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 my-8 gap-24">
                        {data.map((pizza) => (
                            <Pizza key={pizza._id} pizza={pizza} />
                        ))}
                    </div>
                )}
            </>
        </div>
    );
};

export default Pizzas;
