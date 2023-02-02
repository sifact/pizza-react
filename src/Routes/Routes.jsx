import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

import Products from "../pages/Products";
import ProductsDetails from "../pages/ProductsDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/productDetails/:id",
                element: <ProductsDetails />,
                loader: ({ params }) =>
                    fetch(
                        `https://pizza-react-server.vercel.app/productDetails/${params.id}`
                    ),
            },
        ],
    },
]);

export default router;
