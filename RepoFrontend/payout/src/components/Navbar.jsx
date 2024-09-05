import { useState } from 'react'
import  payout  from '../assets/PAYOUT.png'
import icon from '../assets/icon.png'
import line from '../assets/line.png'
import CustomButton from '../authentication/components/CustomButton';
import '../authentication/components/CustomButton.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ light }) => {
  const navigate = useNavigate()
  // Estado para manejar el menú hamburguesa
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[10vh] flex-col justify-center relative"> {/* Añadido "relative" para el contenedor principal */}
      {/* Contenedor principal del navbar */}
      <div className="w-full h-[9.5vh] flex items-center justify-between">
        <div className='flex items-center gap-6'>
          <div className='flex items-center'>
            <img className="h-[30px] ml-10  cursor-pointer" src={icon} alt=" " onClick={() => navigate('/')}/>
            <img className="h-[18px] ml-2  cursor-pointer" src={payout} alt="" onClick={() => navigate('/')}/>
          </div>
          <a className="hidden md:block underline text-verde">Personal</a> {/* Se oculta en móviles */}
          <a className="hidden md:block">Empresas</a> {/* Se oculta en móviles */}
        </div>

        {/* Botón del menú hamburguesa (se muestra en móviles) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none">
            {/* Icono de menú hamburguesa */}
            {isOpen ? (
              <span>&#x2715; {/* Icono de "cerrar" */}</span>
            ) : (
              <span>&#9776; {/* Icono de menú hamburguesa */}</span>
            )}
          </button>
        </div>

        {/* Links del menú (se muestra en pantallas grandes) */}
        <div className={`hidden md:flex items-center gap-6 mx-8 ${light ? 'bg-dark text-white' : 'bg-secundario-text-black'}`}> 
          <a>Funciones</a>
          <a>Precios</a>
          <a>Ayuda</a>
          <a className='whitespace-nowrap text-verde' href='/login'>Iniciar sesion</a>
          <CustomButton  onClick={() => navigate('/signup')} texto='Crear cuenta' className="nav-button" type='signup' />
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-[100%] left-0 w-full  bg-white z-50`}> {/* Clases añadidas para el menú desplegable */}
        <div className="flex flex-col items-center px-2 py-12 gap-10 nav-text">
          <div className="flex gap-6">
          <a >Personal</a>
          <a >Empresas</a>
          </div>
          <a >Funciones</a>
          <a >Precios</a>
          <a >Ayuda</a>
          <div className='flex flex-col self-center gap-1'>
          <a href='login'>Iniciar sesion</a>
          <CustomButton  onClick={() => navigate('/signup')} texto='Crear cuenta' className='nav-button' type='signup' />
          </div>
        </div>
      </div>

      {/* Línea bajo el navbar */}
      <img className="w-full" src={line} alt=""/>
    </div>
  );;
}
export default Navbar;