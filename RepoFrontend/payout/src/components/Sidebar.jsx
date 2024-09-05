import React from 'react';
import payout from '../assets/iconpayout.png'; 

const Sidebar = () => {
  return (
    <div className='md:h-full md:w-full'>
      {/* Sidebar en pantalla completa (solo para desktop) */}
      <div className="hidden md:flex md:flex-col  h-full bg-white text-black p-6">
        <img src={payout} alt="logo" />
        <div className="h-full flex flex-col justify-center gap-10">
          <button>Inicio</button>
          <button>Cuenta</button>
          <button>Perfil</button>
          <button>Ayuda</button>
          <button>Cerrar sesión</button>
        </div>
      </div>

      {/* Footer con botones para vista móvil */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
        <div className="flex justify-around">
          <button>Inicio</button>
          <button>Cuenta</button>
          <button>Perfil</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
