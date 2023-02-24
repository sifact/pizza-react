import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";

import Main from "../Layouts/Main";
import About from "../pages/About";
import Cart from "../pages/Cart";
import AddProducts from "../pages/Dashboard/AddProducts/AddProducts";
import Dashboard from "../pages/Dashboard/Dashboard";
import Orders from "../pages/Dashboard/Orders/Orders";
import AllProducts from "../pages/Dashboard/Products/AllProducts";
import Users from "../pages/Dashboard/Users/Users";
import Home from "../pages/Home";
import Login from "../pages/Login";

import Products from "../pages/Products";
import ProductsDetails from "../pages/ProductsDetails";
import Register from "../pages/Register";

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
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/dashboard84d23ece2b8a4a60eb50955b",
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard84d23ece2b8a4a60eb50955b",
                element: <Dashboard />,
            },
            {
                path: "/dashboard84d23ece2b8a4a60eb50955b/allProducts",
                element: <AllProducts />,
            },
            {
                path: "/dashboard84d23ece2b8a4a60eb50955b/addProducts",
                element: <AddProducts />,
            },
            {
                path: "/dashboard84d23ece2b8a4a60eb50955b/orders",
                element: <Orders />,
            },
            {
                path: "/dashboard84d23ece2b8a4a60eb50955b/users",
                element: <Users />,
            },
        ],
    },
]);

export default router;
