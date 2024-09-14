import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { SignUp } from '../authentication/signUp/SignUp';
import { Login } from '../authentication/Login/Login';
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Actividad from "../pages/Actividad";
import { Perfil } from "../pages/Perfil";
import { ProtectedRoute, PublicRoute } from "./ProtectedRoute";
import { PrevPerfil } from "../pages/prevPerfil";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Rutas públicas (login, landing, signup)
      { 
        path: '/', 
        element: (
          <PublicRoute>
            <LandingPage />
          </PublicRoute>
        ) 
      },
      { 
        path: '/login', 
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ) 
      },
      { 
        path: '/signup', 
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        ) 
      },
      
      // Rutas protegidas (home, actividad, perfil)
      { 
        path: '/home', 
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ) 
      },
      { 
        path: '/actividad', 
        element: (
          <ProtectedRoute>
            <Actividad />
          </ProtectedRoute>
        ) 
      },
      { 
        path: '/prevperfil', 
        element: (
          <ProtectedRoute>
            <PrevPerfil/>
          </ProtectedRoute>
        ) 
      },
      { 
        path: '/perfil', 
        element: (
          <ProtectedRoute>
            <Perfil />
          </ProtectedRoute>
        ) 
      },
    ],
  },
]);
