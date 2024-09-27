import { useState } from 'react';
import icon from '../assets/icon.png';
import line from '../assets/line.png';
import argentina from '../assets/banderaArg.png';
import CustomButton from '../authentication/components/CustomButton';
import '../authentication/components/CustomButton.css';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeButton } from '../components/ThemeButton';

const Navbar = ({ light, onActivate, onDeactivate }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para navegar y cerrar el menú
  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);  // Cierra el menú automáticamente después de la navegación
  };

  return (
    <div className="w-full h-[10vh] flex-col justify-center relative dark:bg-dark dark:text-white">
      <div className="w-full h-[9.5vh] flex items-center justify-between">
        <div className='flex items-center lg:gap-4 xl:gap-6'>
          <div className='flex gap-3 items-center'>
            <img className="h-[30px] ml-10 lg:ml-6 xl:ml-10 cursor-pointer" src={icon} alt=" " onClick={() => navigate('/')}/>
            <Link to={'/'} className={`text-${light ? 'white' : 'primario'} font-serif text-payout lg:text-base xl:text-payout font-light`}>PAYOUT</Link> 
          </div>
          <Link className="hidden lg:block underline text-verde lg:text-sm xl:text-m">Personal</Link> {/* Se oculta en móviles */}
          {/* <Link className="hidden lg:block dark:text-white lg:text-sm xl:text-m">Empresas</Link>  */}
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="p-2 rounded-md focus:outline-none">
            {isOpen ? (
              <span>&#x2715; {/* Icono de "cerrar" */}</span>
            ) : (
              <span>&#9776; {/* Icono de menú hamburguesa */}</span>
            )}
          </button>
        </div>

        <div className={`hidden lg:flex items-center gap-6 mx-8 lg:text-sm xl:text-m`}>
          {/* <Link to='/funciones'>Funciones</Link>
          <Link to='/transferencias'>Transferencias</Link> */}
          <Link to='/ayuda'>Ayuda</Link>
          <img src={argentina} alt='pais' className='h-6'/>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${light ? 'stroke-white' : 'stroke-primario'}`}
          >
            <path
              d="M6 9L12 15L18 9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Link className='whitespace-nowrap text-verde lg:text-sm xl:text-m' to='/login'>Iniciar sesión</Link>
          <button onClick={() => navigate('/signup')} className='whitespace-nowrap rounded-lg py-1.5 px-3 bg-primario text-white font-semibold lg:text-sm xl:text-m'>Crear cuenta</button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-4/5 p-10 rounded-lg flex flex-col items-start gap-10 justify-center">
            <div className="flex w-full justify-between text-black ">
              <button >Personal</button>
              {/* <button >Empresas</button> */}
            </div>
            {/* <button  className="text-black font-medium">Funciones</button>
            <button  className="text-black font-medium">Transferencias</button> */}
            <button  className="text-black font-medium">Ayuda</button>
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
            
            <div className="flex justify-between w-full max-h-min items-start">
              <p className="text-black font-medium">Modo</p>
              <ThemeButton onActivate={onActivate} onDeactivate={onDeactivate} />
            </div>

            <div className='flex flex-col self-center items-center gap-6'>
              <button onClick={() => handleNavigate('/login')} className={`text-${light ? 'verde' : 'primario'}`}>Iniciar sesión</button>
              <button onClick={() => handleNavigate('/signup')} className='rounded-lg py-1.5 px-3 bg-primario text-white font-semibold'>Crear cuenta</button>
            </div>
            <button onClick={toggleMenu} className="mt-4 text-red-600">
              Cerrar
            </button>
          </div>
        </div>
      )}

      <img className="w-full" src={line} alt=""/>
    </div>
  );
};

export default Navbar;
