import React from "react";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import { createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx"
import Cart from "./components/Cart.jsx";

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    

    children: [
      {
        path: "/",

        element: <Body />,
      },

      { path: "/about", element: <About /> },

      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart/> },
    ],
      errorElement: <Error/>
  },
]);
export { appRouter };
