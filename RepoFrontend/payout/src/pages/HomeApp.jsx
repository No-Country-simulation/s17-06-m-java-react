
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ThemeButton } from '../components/ThemeButton';
import Sidebar from '../components/Sidebar';


function HomeApp({ light, onActivate, onDeactivate }) {
  const navigate = useNavigate();
  const location = useLocation();



  return (
    <>
     

        <div className={`flex flex-col-reverse justify-between md:flex-row h-full`}>
          <Sidebar className='md:w-1/6 h-full'/>
            <div className='text-end ml-0 w-full md:w-5/6' >

          

              <Outlet onActivate={onActivate} onDeactivate={onDeactivate}  />

            </div>
        
      </div>
    </>
  );
};

export default HomeApp;
