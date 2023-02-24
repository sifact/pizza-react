import React from "react";
import pizza from "../assets/img/pizza.png";

import Pizzas from "../components/Pizzas";
import hero from "../assets/img/hero.jpg";
import hero2 from "../assets/img/product2.jpg";
import hero3 from "../assets/img/product3.jpg";
import hero4 from "../assets/img/product4.jpg";

const Home = () => {
    return (
        <>
            <div className="hero py-16  ">
                <div className="container  flex items-center mx-auto xxsm:flex-col sm:flex-row  ">
                    <div className="sm:w-1/2 xsm:pb-12 flex  items-center   ">
                        <div>
                            <h6 className="text-lg font-bold text-primary">
                                {" "}
                                <em>
                                    Discover the best deals on top-quality
                                    products
                                </em>{" "}
                            </h6>
                            <h1 className="text-3xl font-bold">Don't wait!</h1>
                            <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-primary hover:bg-yellow-600">
                                Order Now
                            </button>
                        </div>
                    </div>
                    <div className="sm:w-1/2 flex gap-4">
                        <div className="flex items-center">
                            <div>
                                <img
                                    className="rounded-lg"
                                    src={hero4}
                                    alt="pizza"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <img
                                className="rounded-lg"
                                src={hero}
                                alt="pizza"
                            />

                            <img
                                className="rounded-lg"
                                src={hero2}
                                alt="pizza"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Pizzas />
        </>
    );
};

export default Home;
