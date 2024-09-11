import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";

import Header from "./components/Home/Header.jsx";
import Second from "./components/Home/Second.jsx";
import Fotter from "./components/Home/Fotter.jsx";
import One from "./components/Service/one.jsx";
import Work from './components/Work/Work.jsx'
import Connect from "./components/Conect/Connect.jsx";
import Store from "./components/Store/Store.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: (
          <>
            <Header />,
            <Second />,
            <Fotter />
          </>
        ),
      },

      {
        path: "service",
        element: (
          <>
            <One />
          </>
        ),
      },
      {
        path:"work",
        element:<Work/>
      },
      {
        path:"connect",
        element:<Connect/>
      },
      {
        path:"store",
        element:<Store/>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
