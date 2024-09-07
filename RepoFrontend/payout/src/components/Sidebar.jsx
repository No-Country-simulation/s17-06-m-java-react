import { useState } from 'react';
import React from 'react';
import payout from '../assets/iconpayout.png';
import AsideButton, {options} from './atoms/AsideButton';

const Sidebar = () => {

  // Inicializamos el estado con el ID del primer botón (Inicio)
  const [selectedId, setSelectedId] = useState(options[0].id);

  // Función para manejar la selección de un botón
  const handleButtonClick = (id) => {
    setSelectedId(id);
  };


  /* Desestructuramos name e image de options para aplicar a los botones del sidebar */
  
  return (
    <div className='md:h-full md:w-full'>
      {/* Sidebar en pantalla completa (solo para desktop) */}
      <div className="hidden md:flex md:flex-col  h-full bg-white text-black p-6">
        <img src={payout} alt="logo" />
        <div className="h-full flex flex-col justify-center gap-10">
        {options.map(({ id, image, name }) => (
            <AsideButton 
              key={id} 
              image={image} 
              text={name}
              onClick={() => handleButtonClick(id)}
              isSelected={selectedId === id} />
          ))}
        </div>
      </div>

      {/* Footer con botones para vista móvil */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
        <div className="flex justify-around">
          <button className='text-black'>Inicio</button>
          <button  className='text-black'>Cuenta</button>
          <button  className='text-black'>Perfil</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
