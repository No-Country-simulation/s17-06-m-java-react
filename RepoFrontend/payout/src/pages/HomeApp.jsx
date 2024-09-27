
import { Outlet, useLocation, useNavigate,  useOutletContext  } from 'react-router-dom';
import { useState } from 'react';
import { ThemeButton } from '../components/ThemeButton';
import Sidebar from '../components/Sidebar';
import Banner from '../components/Banner.jsx'


function HomeApp() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, onToggle } = useOutletContext();
  const showBanner = location.pathname === '/home' || location.pathname === '/actividad' || location.pathname === '/perfil' ;


  return (
    <>
     

        <div className={`flex flex-col-reverse justify-between md:flex-row h-full dark:bg-dark dark:text-white`}>
          <Sidebar className='md:w-1/6 h-full'/>
            <div className='text-end ml-0 w-full md:w-5/6' >
            {showBanner && <Banner isDarkMode={isDarkMode} onToggle={onToggle} />}
            <div id='themeButton' className='hidden md:block '>
                            <ThemeButton
                                onToggle={onToggle}
                                isDarkMode={isDarkMode}
                            />
                        </div>

              <Outlet context={{ isDarkMode, onToggle }}  />

            </div>
        
      </div>
    </>
  );
};

export default HomeApp;
