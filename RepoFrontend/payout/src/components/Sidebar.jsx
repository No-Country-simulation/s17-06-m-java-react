import { useState } from 'react';
import React from 'react';
import payout from '../assets/iconpayout.png';
import AsideButton, {options} from './atoms/AsideButton';
import home from './atoms/assets/house.svg';
import account from './atoms/assets/credit-card.svg';
import userIcon from './atoms/assets/user.svg';
import { useNavigate, NavLink } from 'react-router-dom';

const Sidebar = () => {
const navigate = useNavigate()
  

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirige al login después de salir
  };
    // Inicializamos el estado con el ID del primer botón (Inicio)
    const [selectedId, setSelectedId] = useState(options[0].id);
  
    // Función para manejar la selección de un botón
    const handleButtonClick = (id, path) => {
      
      setSelectedId(id);
      if (id === 5) {
        handleLogout();
      } else {
        navigate(path);
      }
      
      ;
    };


  /* Desestructuramos name e image de options para aplicar a los botones del sidebar */
  
  return (
    <div className=' md:w-1/6 md:h-full '>
      {/* Sidebar en pantalla completa (solo para desktop) */}
      <div className="hidden md:flex md:flex-col h-full bg-white text-black p-6 ">
        <img src={payout} alt="logo" />
        <div className="h-full flex flex-col justify-center gap-10 fixed">
        {options.map(({ id, image, name, path }) => (
            <AsideButton 
              key={id} 
              image={image} 
              text={name}
              onClick={() => handleButtonClick(id, path)}
              isSelected={selectedId === id} />
          ))}
        </div>
      </div>

      {/* Footer con botones para vista móvil */}
<div className="md:hidden  bg-white p-4 shadow-lg">
  <div className="flex justify-around">
    {/* Botón Inicio */}
    <NavLink 
      to="/home" 
      className={({ isActive }) => isActive ? 'text-primario' : 'text-black'}
    >
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 11.9052C0 12.4165 0.383449 12.8491 1.0127 12.8491C1.31749 12.8491 1.58296 12.6918 1.81893 12.4853L2.94961 11.5414V20.695C2.94961 22.1502 3.82466 23.0056 5.31913 23.0056H18.6219C20.1163 23.0056 20.9914 22.1502 20.9914 20.695V11.4824L22.1909 12.4853C22.4269 12.6918 22.6923 12.8491 22.9971 12.8491C23.5674 12.8491 24 12.4951 24 11.9347C24 11.6004 23.8722 11.3349 23.6166 11.1285L20.9914 8.91626V4.73765C20.9914 4.2952 20.7063 4.01007 20.2638 4.01007H18.9365C18.5039 4.01007 18.2089 4.2952 18.2089 4.73765V6.57624L13.3912 2.52544C12.5457 1.81753 11.4838 1.81753 10.6284 2.52544L0.383449 11.1285C0.127816 11.3448 0 11.6299 0 11.9052ZM14.8267 14.6287C14.8267 14.1666 14.5317 13.8716 14.0696 13.8716H9.93036C9.47808 13.8716 9.16346 14.1666 9.16346 14.6287V21.0785H5.8304C5.21098 21.0785 4.87669 20.7344 4.87669 20.115V9.91913L11.592 4.2952C11.8574 4.05923 12.1622 4.05923 12.4277 4.2952L19.0643 9.86014V20.115C19.0643 20.7344 18.73 21.0785 18.1106 21.0785H14.8267V14.6287Z" fill="currentColor"/>
</svg>
    </NavLink>

    {/* Botón Cuenta */}
    <NavLink 
       to="/cuenta" 
      className={({ isActive }) => isActive ? 'text-primario' : 'text-black'}
    >
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 4.5H3C1.89543 4.5 1 5.39543 1 6.5V18.5C1 19.6046 1.89543 20.5 3 20.5H21C22.1046 20.5 23 19.6046 23 18.5V6.5C23 5.39543 22.1046 4.5 21 4.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 10.5H23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </NavLink>

    {/* Botón Perfil */}
    <NavLink 
      to="/prevperfil" 
      className={({ isActive }) => isActive ? 'text-primario' : 'text-black'}
    >
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21.5V19.5C20 18.4391 19.5786 17.4217 18.8284 16.6716C18.0783 15.9214 17.0609 15.5 16 15.5H8C6.93913 15.5 5.92172 15.9214 5.17157 16.6716C4.42143 17.4217 4 18.4391 4 19.5V21.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11.5C14.2091 11.5 16 9.70914 16 7.5C16 5.29086 14.2091 3.5 12 3.5C9.79086 3.5 8 5.29086 8 7.5C8 9.70914 9.79086 11.5 12 11.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </NavLink>
  </div>
</div>
    </div>
  );
};

export default Sidebar;
