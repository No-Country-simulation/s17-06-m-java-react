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
<<<<<<< HEAD
        { path: "/SignUp", element: <SignUp /> },
        { path: "/Login", element: <Login /> },
        { path: "/LandingPage", element: <LandingPage /> },
=======
        { path: "/signUp", element: <SignUp /> },
        { path: "/login", element: <Login /> },
        { path: "/landingPage", element: <LandingPage /> },
>>>>>>> 9b605ae2929cc531200c91cc9171aa3b4d38ecb6
        
      ],
    },
    // {
    //   path: "/signup",
    //   element: (
    //       <SignUp />
    //   ),
    // },
   
  ]);
  