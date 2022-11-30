import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css"
import "./moz.css"
import Contact from "./routes/Contact";
import DashBoard from "./routes/Dashboard";
//route components
import App from "./routes/Main";
import SignUp from "./routes/SignUp-copy";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
},
{
  path: "/contact",
  element: <Contact />
},
{
  path: "/dashboard",
  element: <DashBoard />
},
{path: "/sign-up",
element: <SignUp />}
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
   <RouterProvider router={router}></RouterProvider>
  </>
)