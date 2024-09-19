import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { SignUp } from '../authentication/signUp/SignUp';
import { Login } from '../authentication/Login/Login';
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage"; 
import Actividad from "../pages/Actividad";
import { Perfil } from "../pages/Perfil";
import { ProtectedRoute, PublicRoute } from "./ProtectedRoute";
import { PrevPerfil } from '../pages/prevPerfil';
import Transferencia from "../pages/Transferencia";
import Destinatario from "../components/transferencias/Destinatario";
import DatosBancarios from "../components/transferencias/DatosBancarios";
import Monto from "../components/transferencias/Monto";
import Revision from "../components/transferencias/Revision";
import PagoExitoso from "../components/transferencias/PagoExitoso";
import { Cuenta } from "../pages/Cuenta";
import { CuentaPesos } from "../pages/CuentaPesos";
import HomeApp from '../pages/HomeApp'
import { AyudaPrincipal } from "../components/ayuda/AyudaPrincipal";
import { FAQ } from "../components/ayuda/FAQ";
import { CuentaDolares } from "../pages/CuentaDolares";
import { CuentaEuros } from "../pages/CuentaEuros";
import { Contacto } from "../components/ayuda/Contacto";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App es el layout principal para todas las rutas
    children: [
      // Rutas públicas
      {
        path: '/',
        element: (
          <PublicRoute>
            <LandingPage />
          </PublicRoute>
        ),
      },
      {
        path: 'login',
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: 'signup',
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        ),
      },

      // Rutas protegidas anidadas en 'Home'
      {
        path: '/',
        /* element: 
            <HomeApp />
          , */
        element: (
          <ProtectedRoute>
            <HomeApp />
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'home',
            element: <Home/>
          },
          {
            path: 'actividad',
            element: <Actividad />
          },
          {
            path: 'cuenta',
            element: <Cuenta />
          },
          {
            path: 'cuentapesos',
            element: <CuentaPesos />
          },
          {
            path: 'cuentadolares',
            element: <CuentaDolares/>
          },
          {
            path: 'cuentaeuros',
            element: <CuentaEuros/>
          },
          {
            path: 'help',
            element: <AyudaPrincipal/>
          },
          {
            path: 'faq',
            element: <FAQ/>
          },
          {
            path: 'contacto',
            element: <Contacto/>
          },
          { 
            path: 'prevperfil',
            element: <PrevPerfil />
          },
          {
            path: 'perfil',
            element: <Perfil />
          },
          {
            path: 'transferencia',
            element: <Transferencia />,
            children: [
              {
                path: 'destinatario',
                element: <Destinatario />
              },
              {
                path: 'datos-bancarios',
                element: <DatosBancarios />
              },
              {
                path: 'monto',
                element: <Monto />
              },
              {
                path: 'revision',
                element: <Revision />
              },
              {
                path: 'pago-exitoso',
                element: <PagoExitoso />
              }
            ]
          }
        ]
      }
    ],
  },
]);