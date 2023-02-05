import { createBrowserRouter } from "react-router-dom";

import Main from "../Layouts/Main";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Dashboard from "../pages/Dashboard/Dashboard";
import Orders from "../pages/Dashboard/Orders/Orders";
import AllProducts from "../pages/Dashboard/Products/AllProducts";
import Users from "../pages/Dashboard/Users/Users";
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
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/allProducts",
                element: <Dashboard />,
            },
            {
                path: "/orders",
                element: <Orders />,
            },
            {
                path: "/users",
                element: <Users />,
            },
        ],
    },
]);

export default router;
