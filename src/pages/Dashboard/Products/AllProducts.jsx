import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Modal } from "../../../components/Modal";
import { cartContext } from "../../../Contexts/CartProvider";
import SingleProduct from "./SingleProduct";

const AllProducts = () => {
    const { openModal } = useContext(cartContext);
    const [products, setProducts] = useState([]);
    const [updateProduct, setUpdateProduct] = useState(null);
    console.log(updateProduct);
    useEffect(() => {
        const url = "https://pizza-react-server.vercel.app/products";

        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleDelete = (id) => {
        const agree = window.confirm(
            "Do you really wanna delete this product?"
        );

        if (agree) {
            const url = `http://localhost:5000/delete/${id}`;
            fetch(url, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.acknowledged) {
                        toast.success("Product deleted...");
                        const updatedProductList = products.filter(
                            (product) => product._id !== id
                        );
                        setProducts(updatedProductList);
                    } else {
                        toast.error("failed");
                    }
                });
        }
    };

    const handleUpdate = (product) => {
        openModal();
        setUpdateProduct(product);
    };
    return (
        <div className={`flex flex-col w-full`}>
            <h1 className="text-center text-2xl font-bold">Products</h1>
            <div className="p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {products.map((product) => (
                    <SingleProduct
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                    />
                ))}
            </div>
            <Modal updateProduct={updateProduct} />
        </div>
    );
};

export default AllProducts;
