import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import { ThemeButton } from './components/ThemeButton';

function App() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  const showNavbar = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup';
  const showFooter = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup';

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
      <div className={`app flex flex-col h-screen ${light ? 'bg-dark text-white' : 'bg-white text-black'}}`}>
        {showNavbar && <Navbar light={light} />}

        <div className={`flex ${light ? 'bg-dark text-white' : 'bg-secundario text-black'}`}>
          {isAuthenticated && <Sidebar className="md:w-1/5 md:h-screen" />}
            <div className={`text-end flex-grow ${isAuthenticated ? 'ml-0 w-4/5' : 'ml-auto'} ${light ? 'bg-dark text-white' : 'bg-white text-black'}`}>
              <ThemeButton onActivate={handleActivate} onDeactivate={handleDeactivate} />
              {/* <button onClick={toggleTheme} className="bg-primario w-[100px] rounded-md my-2 mx-2 text-white"
              >Tema</button> */}
              <Outlet/>
            </div>
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
      </div>
    </>
  );
}

export default App;
