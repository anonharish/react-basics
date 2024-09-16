import React, { Suspense, lazy,useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Body from "./body";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantInfo from "./components/RestaurantInfo";
import UserContex from "./utils/Usercontex.js";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
const Grocery = lazy(() => import("./components/Grocery.js"));
const About = lazy(()=>import("./components/about.js"))

const AppLayout = () => {
  const [userName,setUserName]=useState("");
  useEffect(()=>{
    //call the api get the user data
    setUserName("Harish Kumar");
  },[])
  return (
  <UserContex.Provider value={{loggedInUser:userName,setUserName}}>
    <div>
      <Header />
      <Outlet />
    </div>
  </UserContex.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h>Loading....</h>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantInfo />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
