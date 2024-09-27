import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import { Outlet, useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { useState } from 'react';
import { ThemeButton } from './components/ThemeButton';
import Sidebar from './components/Sidebar';


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const showNavbar = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup';
  const showFooter = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup';
  const showThemeButton = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup';



  /* Dark Mode */
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') !== 'light');

  const handleThemeToggle = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode)
  }

/* 

  const handleActivate = () => setLight(false);
  // Aquí puedes poner la lógica que quieres ejecutar cuando se activa

  const handleDeactivate = () => setLight(true);
  // Aquí puedes poner la lógica que quieres ejecutar cuando se desactiva

 */



  return (
    <>
      <div className={`app flex flex-col h-screen justify-between ${isDarkMode ? 'bg-dark text-white' : 'bg-grisclaro text-black'}`}>
        {showNavbar && <Navbar isDarkMode={isDarkMode} onToggle={handleThemeToggle} />}
        <div className={` ${isDarkMode ? 'bg-dark text-white' : 'bg-secundario text-black'} flex-grow`}>

          <div className={`text-end h-full  ${isDarkMode ? 'bg-dark text-white' : 'bg-white text-black'}`}>


            <div className="hidden md:block">
              {showThemeButton && <ThemeButton onToggle={handleThemeToggle} isDarkMode={isDarkMode} />}
            </div>

            <Outlet context={{ isDarkMode, onToggle: handleThemeToggle }} />


          </div>
        </div>
        {showFooter && <Footer />}


      </div>
    </>
  );
};

export default App;
