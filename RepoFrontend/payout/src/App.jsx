import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { useState } from 'react';
import { ThemeButton } from './components/ThemeButton';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const showNavbar = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup';
  const showFooter = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup';
  const showSidebar = !(
    location.pathname === '/login' || 
    location.pathname === '/signup' || 
    location.pathname === '/'
  );

  /* Funcion botones Login y Logout */
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  /* Dark Mode */
  const [light, setLight] = useState(true);

  // Alternar entre modo claro y oscuro
  // const toggleTheme = () => {
  //   setLight(!light);
  // };



  const handleActivate = () => {
    setLight(!light);
    // Aquí puedes poner la lógica que quieres ejecutar cuando se activa
  };

  const handleDeactivate = () => {
    setLight(!light);
    // Aquí puedes poner la lógica que quieres ejecutar cuando se desactiva
  };




  return (
    <>
      <div className={`app flex flex-col h-screen ${light ? 'bg-dark text-white' : 'bg-bg-white text-black'}`}>
        {showNavbar && <Navbar light={light} onActivate={handleActivate} onDeactivate={handleDeactivate}/>}
          
            <div className="hidden md:block">
              <ThemeButton  onActivate={handleActivate} onDeactivate={handleDeactivate} />
              {/* <button onClick={toggleTheme} className="bg-primario w-[100px] rounded-md my-2 mx-2 text-white"
              >Tema</button> */}
              </div>
              <Outlet  />

            </div>

        {showFooter && <Footer />}

        {/* Botones de prueba para Login/Logout */}
        <div className="fixed bottom-4 right-4 flex space-x-2">
          <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">
            Login
          </button>
          <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
            Logout
          </button>
        </div>
    </>
  );
};

export default App;
