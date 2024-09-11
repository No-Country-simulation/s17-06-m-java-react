import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { SignUp } from '../authentication/signUp/SignUp';
import { Login } from '../authentication/Login/Login';
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Actividad from "../pages/Actividad";
import { Perfil } from "../pages/Perfil";


export const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <App />
      ),
      children: [
        {path: '/home', element: <Home/>},
        { path: "/signup", element: <SignUp /> },
        { path: "/login", element: <Login /> },
        { path: "/", element: <LandingPage /> },
        { path: "/actividad", element: <Actividad /> },
        { path: "/perfil", element: <Perfil/> },
        
      ],
    },
    // {
    //   path: "/signup",
    //   element: (
    //       <SignUp />
    //   ),
    // },
   
  ]);
  