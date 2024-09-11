import { useState } from 'react';
import React from 'react';
import payout from '../assets/iconpayout.png';
import AsideButton, {options} from './atoms/AsideButton';
import home from './atoms/assets/house.svg';
import account from './atoms/assets/credit-card.svg';
import userIcon from './atoms/assets/user.svg';
import { useNavigate } from 'react-router-dom';

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
    <div className=' md:w-1/5 md:h-full '>
      {/* Sidebar en pantalla completa (solo para desktop) */}
      <div className="hidden md:flex md:flex-col h-full bg-white text-black p-6">
        <img src={payout} alt="logo" />
        <div className="h-full flex flex-col justify-center gap-10">
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
      <div className="md:hidden  fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
        <div className="flex justify-around">
          <button className='text-black'><img src={home} alt="Inicio" /></button>
          <button  className='text-black'><img src={account} alt="Cuenta" /></button>
          <button  className='text-black'><img src={userIcon} alt="Perfil" /></button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
