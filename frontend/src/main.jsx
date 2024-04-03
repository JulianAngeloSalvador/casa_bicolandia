import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Root from "./routes/Root";
import Login from "./pages/auth/Login";
import App from "./pages/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <App /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
