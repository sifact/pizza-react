import React, { useContext, useDebugValue } from "react";
import { cartContext } from "../Contexts/CartProvider";
import { toast } from "react-hot-toast";

export const Modal = ({ updateProduct }) => {
    const { isOpenModal, closeModal, setIsOpenModal } = useContext(cartContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const productName = form.productName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const desc = form.description.value;

        const updateProductData = {
            productName,
            price,
            quantity,
            desc,
        };
        const url = `http://localhost:5000/update/${updateProduct?._id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateProductData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success("updated successfully");
                    closeModal();
                } else {
                    toast.error("failed");
                }
            });
    };

    return (
        // <!-- The modal container -->
        <div
            className={`fixed top-0 left-0 right-0 bottom-0 z-50 overflow-auto bg-gray-900 bg-opacity-75 w-screen h-screen ${
                !isOpenModal && "hidden"
            }`}
        >
            {/* <!-- The modal content --> */}
            <div className="relative w-full  max-w-md mx-auto m-4 p-6 bg-white rounded-lg shadow-lg">
                {/* <!-- The modal header --> */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-medium">Update</h2>
                    <button
                        className="text-4xl font-semibold text-red-700 hover:text-red-500 focus:outline-none"
                        onClick={closeModal}
                    >
                        ×
                    </button>
                </div>
                {/* <!-- The modal body --> */}
                <div className="text-gray-700">
                    <form
                        className="bg-white p-6 rounded-lg w-full h-auto"
                        onSubmit={handleSubmit}
                    >
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
                                defaultValue={updateProduct?.name}
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
                                defaultValue={updateProduct?.price}
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
                                defaultValue={updateProduct?.quantity}
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
                                className="border border-gray-400 p-2  w-full outline-yellow-300 rounded-sm"
                                defaultValue={updateProduct?.desc}
                                name="description"
                                rows="5"
                            ></textarea>
                        </div>
                        <button className="bg-yellow-500 py-2 px-4 text-white rounded-full hover:bg-yellow-600">
                            Submit
                        </button>
                    </form>
                </div>
                {/* <!-- The modal footer --> */}
            </div>
        </div>
    );
};
