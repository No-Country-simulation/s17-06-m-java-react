import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import { Outlet, useLocation, useNavigate  } from 'react-router-dom';
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
  const [light, setLight] = useState(true);



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
      <div className={`app flex flex-col h-screen justify-between ${light ? 'bg-dark text-white' : 'bg-bg-white text-black'}`}>
        {showNavbar && <Navbar light={light} onActivate={handleActivate} onDeactivate={handleDeactivate}/>}
        <div className={` ${light ? 'bg-dark text-white' : 'bg-secundario text-black'} flex-grow`}>

        <div className={`text-end h-full  ${light ? 'bg-dark text-white' : 'bg-white text-black'}`}>
          
            
            <div className="hidden md:block">
             {showThemeButton && <ThemeButton  onActivate={handleActivate} onDeactivate={handleDeactivate} />} 
              </div>

              <Outlet context={{ light, onActivate: handleActivate, onDeactivate: handleDeactivate }}/>

            
        </div>
        </div>
        {showFooter && <Footer />}

        
      </div>
    </>
  );
};

export default App;
