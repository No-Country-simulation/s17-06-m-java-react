
import { Outlet, useLocation, useNavigate,  useOutletContext  } from 'react-router-dom';
import { useState } from 'react';
import { ThemeButton } from '../components/ThemeButton';
import Sidebar from '../components/Sidebar';
import Banner from '../components/Banner.jsx'


function HomeApp() {
  const navigate = useNavigate();
  const location = useLocation();
  const { light, onActivate, onDeactivate } = useOutletContext();
  const showBanner = location.pathname === '/home' || location.pathname === '/actividad' || location.pathname === '/perfil' ;


  return (
    <>
     

        <div className={`flex flex-col-reverse justify-between md:flex-row h-full`}>
          <Sidebar className='md:w-1/6 h-full'/>
            <div className='text-end ml-0 w-full md:w-5/6' >
            {showBanner && <Banner onActivate={onActivate} onDeactivate={onDeactivate}/>}
            <div id='themeButton' className='hidden md:block '>
                            <ThemeButton onActivate={onActivate} onDeactivate={onDeactivate} />
                        </div>

              <Outlet context={{ light, onActivate, onDeactivate }}  />

            </div>
        
      </div>
    </>
  );
};

export default HomeApp;
