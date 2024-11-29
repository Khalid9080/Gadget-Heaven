import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Statics from "../Pages/Statics";
import Dashboard from "../Pages/Dashboard";
import Gadgets_Cart from "../Components/Gadgets_Cart";
import Gadget_Details from "../Pages/Gadget_Details";
import Cart from "../Components/Cart";
import Wishlist from "../Components/Wishlist";
import About from "../Pages/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <h1 className="text-red-400 font-bold text-7xl items-center text-center">
        Not Found!
      </h1>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <Gadgets_Cart />,
            loader: () => fetch("../allProducts.json"),
          },
          {
            path: "/category/:category",
            element: <Gadgets_Cart />,
            loader: () => fetch("../allProducts.json"),
          },
          {
            path: "/all-products",
            element: <Gadgets_Cart />,
            loader: () => fetch("../allProducts.json"),
          },
        ],
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // Redirect from `/dashboard` to `/dashboard/cart`
      {
        path: "/dashboard",
        element: <Navigate to="/dashboard/cart" replace />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
    ],
  },

  {
    path: "/statistics",
    element: <Statics />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/gadget-details/:product_id",
    element: <Gadget_Details />,
    loader: () => fetch("../allProducts.json"),
  },
]);

export default routes;
