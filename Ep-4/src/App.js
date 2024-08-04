import React from "react";
import ReactDOM from "react-dom/client";
import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
<<<<<<< HEAD
import About  from "./components/About";
import Contact  from "./components/Contact";
import Error  from "./components/Error";
import RestaurantMenu  from "./components/RestaurantMenu";
=======
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
>>>>>>> 19866b5d64b4717ced58836562a46e60470e0799
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [


        {
          path: "/",
          element: <Body />,
        },

        {
          path: "/about",
          element: <About />,
        },

        {
          path: "/contact",
          element: <Contact />,
        },


      
{
  path:"/restaurants/:idMeal",
  element:<RestaurantMenu/>,
}

      ],
      errorElement: <Error />
    },


  ]
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
