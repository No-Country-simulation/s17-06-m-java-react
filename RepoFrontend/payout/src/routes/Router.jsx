import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { SignUp } from '../authentication/signUp/SignUp';
import { Login } from '../authentication/Login/Login';
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <App />
      ),
      children: [
        {path: '/home', element: <Home/>},
        { path: "/signUp", element: <SignUp /> },
        { path: "/login", element: <Login /> },
        { path: "/", element: <LandingPage /> },
        
      ],
    },
    // {
    //   path: "/signup",
    //   element: (
    //       <SignUp />
    //   ),
    // },
   
  ]);
  