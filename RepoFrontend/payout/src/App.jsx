import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { useState } from 'react';
import { ThemeButton } from './components/ThemeButton';
import Sidebar from './components/Sidebar';


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

        <div className={`flex ${light ? 'bg-dark text-white' : 'bg-secundario text-black'} flex-grow`}>
          {showSidebar && <Sidebar />}
            <div className={`text-end  ${showSidebar ? 'ml-0 w-full md:w-4/5' : 'w-full'} ${light ? 'bg-dark text-white' : 'bg-white text-black'}`}>
            <div className="hidden md:block">
              <ThemeButton  onActivate={handleActivate} onDeactivate={handleDeactivate} />
              {/* <button onClick={toggleTheme} className="bg-primario w-[100px] rounded-md my-2 mx-2 text-white"
              >Tema</button> */}
              </div>
              <Outlet  />

            </div>
        </div>

        {showFooter && <Footer />}

        
      </div>
    </>
  );
};

export default App;
