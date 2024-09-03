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
        {pat: '/Home', element: <Home/>},
        { path: "/SignUp", element: <SignUp /> },
        { path: "/Login", element: <Login /> },
        { path: "/LandingPage", element: <LandingPage /> },
        
      ],
    },
    // {
    //   path: "/signup",
    //   element: (
    //       <SignUp />
    //   ),
    // },
   
  ]);
  