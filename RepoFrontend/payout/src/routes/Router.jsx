import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <App />
      ),
    //   children: [
    //     { path: "/", element: <Home /> },
        
    //   ],
    },
    // {
    //   path: "/authentication",
    //   element: (
    //       <Authentication />
    //   ),
    // },
   
  ]);
  