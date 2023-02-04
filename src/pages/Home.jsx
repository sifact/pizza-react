import React from "react";
import pizza from "../assets/img/pizza.png";

import Pizzas from "../components/Pizzas";

const Home = () => {
    return (
        <>
            <div className="hero py-16">
                <div className="container flex items-center mx-auto xsm:flex-col sm:flex-row ">
                    <div className="w-1/2 xsm:pb-12">
                        <h6 className="text-lg text-primary">
                            {" "}
                            <em>Are you hungry</em>{" "}
                        </h6>
                        <h1 className="text-3xl md:text-6xl font-bold">
                            Don't wait !
                        </h1>
                        <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">
                            Order Now
                        </button>
                    </div>
                    <div className="w-1/2">
                        <img className="w-4/5" src={pizza} alt="pizza" />
                    </div>
                </div>
            </div>
            <Pizzas />
        </>
    );
};

export default Home;
