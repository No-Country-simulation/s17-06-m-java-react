import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { SignUp } from '../authentication/signUp/SignUp';
import { Login } from '../authentication/Login/Login';

export const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <App />
      ),
      children: [
        { path: "/SignUp", element: <SignUp /> },
        { path: "/Login", element: <Login /> },
        
      ],
    },
    // {
    //   path: "/signup",
    //   element: (
    //       <SignUp />
    //   ),
    // },
   
  ]);
  