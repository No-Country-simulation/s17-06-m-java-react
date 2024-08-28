import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { SignUp } from '../authentication/signUp/SignUp';

export const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <App />
      ),
      children: [
        { path: "/SignUp", element: <SignUp /> },
        
      ],
    },
    // {
    //   path: "/signup",
    //   element: (
    //       <SignUp />
    //   ),
    // },
   
  ]);
  