import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Root from "./routes/Root";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import App from "./pages/App";
import Amen from "./pages/Amen";
//import Run from "./components/Run";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <App /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "amenities", element: <Amen/>},
     // { path: "run", element: <Run/>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
