import { useState } from 'react';
import icon from '../assets/icon.png';
import line from '../assets/line.png';
import argentina from '../assets/banderaArg.png';
import CustomButton from '../authentication/components/CustomButton';
import '../authentication/components/CustomButton.css';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeButton } from '../components/ThemeButton'; // Asegúrate de importar el botón

const Navbar = ({ light, onActivate, onDeactivate }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[10vh] flex-col justify-center relative">
      {/* Contenedor principal del navbar */}
      <div className="w-full h-[9.5vh] flex items-center justify-between">
        <div className='flex items-center gap-6'>
          <div className='flex gap-3 items-center'>
            <img className="h-[30px] ml-10  cursor-pointer" src={icon} alt=" " onClick={() => navigate('/')}/>
            <Link to={'/'} className={`text-${light ? 'white' : 'primario'} font-serif text-payout font-light`}>PAYOUT</Link> 
          </div>
          <a className="hidden md:block underline text-verde">Personal</a> {/* Se oculta en móviles */}
          <a className="hidden md:block dark:text-white">Empresas</a> {/* Se oculta en móviles */}
        </div>

        {/* Botón del menú hamburguesa (se muestra en móviles) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none">
            {isOpen ? (
              <span>&#x2715; {/* Icono de "cerrar" */}</span>
            ) : (
              <span>&#9776; {/* Icono de menú hamburguesa */}</span>
            )}
          </button>
        </div>

        {/* Links del menú (se muestra en pantallas grandes) */}
        <div className={`hidden md:flex items-center gap-6 mx-8`}>
          <Link>Funciones</Link>
          <Link>Transferencias</Link>
          <Link>Ayuda</Link>
          <img src={argentina} alt='pais' className='h-6'/>
          <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${light ? 'stroke-white' : 'stroke-primario'}`} // Cambia la clase según el tema
    >
      <path
        d="M6 9L12 15L18 9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
          <Link className='whitespace-nowrap text-verde' to='/login'>Iniciar sesión</Link>
          <button onClick={() => navigate('/signup')} className='rounded-lg py-1.5 px-3 bg-primario text-white font-semibold'>Crear cuenta</button>
        </div>
      </div>

      {/* Menú desplegable como modal centrado para móviles */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-4/5 p-10 rounded-lg flex flex-col items-start gap-10 justify-center">
            <div className="flex w-full justify-between text-black ">
              <Link >Personal</Link>
              <Link >Empresas</Link>
            </div>
            <Link className="text-black font-medium">Funciones</Link>
            <Link className="text-black font-medium">Transferencias</Link>
            <Link className="text-black font-medium">Ayuda</Link>
            <div className='flex w-full justify-between'>
              <img src={argentina} alt='pais'/>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`stroke-primario`}
              >
                <path
                  d="M6 9L12 15L18 9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            {/* Aquí se añade el botón de cambio de tema */}
            <div className="flex  justify-between w-full max-h-min items-start">
              <p className="text-black font-medium">Modo</p>
              
              <ThemeButton onActivate={onActivate} onDeactivate={onDeactivate} />
              
            </div>
            
            <div className='flex flex-col self-center items-center gap-6'>
              <Link className={`text-${light ? 'verde' : 'primario'}`} to='/login'>Iniciar sesión</Link>
              <button onClick={() => navigate('/signup')} className='rounded-lg py-1.5 px-3 bg-primario text-white font-semibold'>Crear cuenta</button>
            </div>
            {/* Botón para cerrar el menú modal */}
            <button onClick={toggleMenu} className="mt-4 text-red-600">
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Línea bajo el navbar */}
      <img className="w-full" src={line} alt=""/>
    </div>
  );
};

export default Navbar;
