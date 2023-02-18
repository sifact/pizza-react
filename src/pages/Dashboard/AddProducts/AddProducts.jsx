import React from "react";
import Sidebar from "../../../components/Sidebar";
import { toast } from "react-hot-toast";

const AddProducts = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const img = form.image.files[0];
        const productName = form.productName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const desc = form.description.value;

        const formData = new FormData();
        const url = `https://api.imgbb.com/1/upload?&key=38928ea861ba232ef8e6dd1f13258882`;

        formData.append("image", img);

        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                const productData = {
                    img: data.data.display_url,
                    name: productName,
                    price,
                    quantity,
                    desc,
                };
                fetch(`https://pizza-react-server.vercel.app/products`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(productData),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.acknowledged) {
                            toast.success("Product added!");
                            form.reset();
                        } else {
                            toast.error("Failed");
                        }
                    });
            });
    };

    return (
        <div className="flex gap-20 mb-6 w-full">
            <div className="flex flex-col w-full items-center">
                <h2 className="text-xl font-semibold my-4 text-center">
                    Add a product
                </h2>
                <form
                    className="bg-white p-6 rounded-lg shadow-md w-full md:w-3/5 h-auto"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label
                            className="block font-medium mb-2"
                            htmlFor="name"
                        >
                            Upload Image
                        </label>
                        <input
                            className="border border-gray-400 p-2 w-full rounded-sm outline-yellow-300"
                            type="file"
                            name="image"
                            accept="image/*"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block font-medium mb-2"
                            htmlFor="name"
                        >
                            Product Name
                        </label>
                        <input
                            className="border border-gray-400 p-2 w-full rounded-sm outline-yellow-300"
                            type="text"
                            id="name"
                            name="productName"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block font-medium mb-2"
                            htmlFor="number"
                        >
                            Price
                        </label>
                        <input
                            className="border border-gray-400 p-2 w-full outline-yellow-300 rounded-sm"
                            type="number"
                            id="email"
                            name="price"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block font-medium mb-2"
                            htmlFor="Quantity"
                        >
                            Quantity
                        </label>
                        <input
                            className="border border-gray-400 p-2 w-full outline-yellow-300 rounded-sm"
                            type="number"
                            name="quantity"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block font-medium mb-2"
                            htmlFor="Description"
                        >
                            Description
                        </label>
                        <textarea
                            className="border border-gray-400 p-2 w-full outline-yellow-300 rounded-sm"
                            name="description"
                            rows="5"
                        ></textarea>
                    </div>
                    <button className="bg-yellow-500 py-2 px-4 text-white rounded-full hover:bg-yellow-600">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;
