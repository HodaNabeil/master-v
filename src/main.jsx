import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthPage, Home } from "@/Pages";
import { Login, Register } from "@/Components";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/auth",
    element: <AuthPage />,

    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,

      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
  // </StrictMode>
);
