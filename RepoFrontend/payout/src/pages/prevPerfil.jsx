import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import userimage from '../assets/userimage.png'
import userVioleta from '../assets/userVioleta.svg'
import campanaVioleta from '../components/atoms/assets/campanaVioleta.svg'
import ayudaVioleta from '../components/atoms/assets/ayudaVioleta.svg'
import cerrarSesionVioleta from '../components/atoms/assets/cerrarSesionVioleta.svg'
import { FlechaTriangulito } from '../components/icons/flechaTriangulito';
import { Ask } from '../components/icons/Ask';
import { FlechaTriangulitoBack } from '../components/icons/flechaTriangulitoBack';
import { ThemeButton } from '../components/ThemeButton';
import { useOutletContext } from 'react-router-dom';

const urlInfoUserLogged = 'https://payout.redromsolutions.com/user/0'

export const PrevPerfil = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate()
    const { onToggle, isDarkMode } = useOutletContext();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login'); // Redirige al login después de salir
    };

    /* const [light, setLight] = useState(true); */

    /* const { light, onActivate, onDeactivate } = useOutletContext(); */

    /* const handleActivate = () => {
      setLight(!light);
      // Aquí puedes poner la lógica que quieres ejecutar cuando se activa
    };
  
    const handleDeactivate = () => {
      setLight(!light);
      // Aquí puedes poner la lógica que quieres ejecutar cuando se desactiva
    }; */


    /* FETCH PARA TRAER LA INFO DE BASE DE DATOS Y LLENAR LOS CAMPOS */
    useEffect(() => {
        fetch(urlInfoUserLogged, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(data => data.json())
            .then(data => {
                const userData = data.data[0];
                setName(userData.userDetail.name);
                setLastName(userData.userDetail.lastName)
            });
    }, []);

    return (
        <div className='md:pt-14 dark:bg-dark dark:text-white'>
            {/* BANNER MOBILE*/}
            <div id='div-total-banner' className='pt-4 md:hidden flex justify-between items-center w-full'>
                <section className='flex'>
                    <button onClick={() => navigate('/home')} className='flex text-white whitespace-nowrap font-semibold'>
                        <p className='w-5 h-5 absolute left-2 flex items-center dark:text-white text-black'>
                            <span className='left-7 absolute dark:text-white text-black'>Perfil</span>
                            <FlechaTriangulitoBack />
                        </p>
                    </button>
                    <div className='absolute right-4 flex gap-4'>
                        <div className='md:hidden '>
                            <ThemeButton onToggle={onToggle} isDarkMode={isDarkMode} />
                        </div>
                        <p className='md:hidden w-[24px] h-[24px] items-center'>
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='size-6'>
                                <path fill="currentColor" d="M4.32977 18.5126H8.25545C8.32214 20.323 9.80857 22 12.0001 22C14.1821 22 15.678 20.3325 15.7543 18.5126H19.6704C20.6614 18.5126 21.2712 17.9695 21.2712 17.1501C21.2712 16.1305 20.3469 15.2635 19.4798 14.4345C18.8129 13.777 18.6604 12.4812 18.527 11.1853C18.5175 10.6517 18.4794 10.1467 18.4222 9.66079C17.8505 9.899 17.1359 9.99428 16.5261 9.90853C16.5737 10.3468 16.6118 10.8137 16.6213 11.3568C16.7166 13.1672 17.0311 14.5584 17.679 15.3111C18.1459 15.8447 18.6795 16.3497 18.9272 16.626V16.7404H5.05392V16.626C5.30166 16.3497 5.8543 15.8447 6.32119 15.3111C6.97865 14.5584 7.28355 13.1672 7.37884 11.3568C7.49318 7.53597 8.66516 6.24011 10.1992 5.83992C10.4374 5.77323 10.5613 5.65889 10.5804 5.40162C10.6375 4.43926 11.1711 3.79133 12.0001 3.79133C12.1621 3.79133 12.305 3.81039 12.4384 3.85803C12.6099 3.2768 12.9148 2.75274 13.315 2.31444C12.9243 2.11434 12.486 2 12.0001 2C10.5804 2 9.52272 2.96236 9.16064 4.22963C6.67374 5.1253 5.62562 7.52644 5.4827 11.1186C5.35883 12.4621 5.19685 13.777 4.52033 14.4345C3.65325 15.2635 2.729 16.1305 2.729 17.1501C2.729 17.9695 3.33882 18.5126 4.32977 18.5126ZM16.7643 8.66984C18.5556 8.66984 20.0515 7.18342 20.0515 5.38256C20.0515 3.58171 18.5556 2.09528 16.7643 2.09528C14.9634 2.09528 13.477 3.58171 13.477 5.38256C13.477 7.18342 14.9634 8.66984 16.7643 8.66984ZM12.0001 20.4659C10.9234 20.4659 10.1516 19.6941 10.0849 18.5126H13.9248C13.8676 19.6846 13.0863 20.4659 12.0001 20.4659Z" />
                            </svg>
                        </p>
                        <p className='dark:text-white '>
                            <Ask />
                        </p>
                    </div>
                </section>
            </div>

            <section className='w-full flex flex-col items-center justify-center h-[90vh] md:h-full px-6 md:px-10'>

                {/* CUERPO HOME */}
                <div id='cuerpo-vista-home' className='w-full md:w-auto'>

                    {/* FOTO, NOMBRE Y USUARIO */}
                    <div id='foto-y-username' className='flex flex-col gap-3 items-center pb-10'>
                        {/* FOTO */}
                        <div className="para-recortar-foto w-[48px] h-[48px] overflow-hidden rounded-full">
                            <img className='w-full h-full object-cover' src={userimage} alt="" />
                        </div>
                        {/* USERNAMES */}
                        <div id='texto-username' className=''>
                            <p className="text-xl uppercase font-semibold pb-2">{name} {lastName}</p>

                        </div>
                    </div>


                    {/* TARJETA PERFIL */}
                    <div id='tarjeta-perfil' className='px-8 py-8 w-full md:w-[500px] bg-grisclaro rounded-3xl  shadow-down-dark-md text-primario'>

                        {/* LINEA DATOS PERSONALES */}
                        <div className='flex justify-between py-5 border-b border-primario'>
                            <button className='flex gap-2' onClick={() => navigate('/perfil')}>
                                <img src={userVioleta} alt="" />
                                <p className='font-semibold'>Datos personales</p>
                            </button>
                            <FlechaTriangulito />
                        </div>

                        {/* LINEA NOTIFICACIONES*/}
                        <div className='flex justify-between py-5 border-b border-primario'>
                            <button className='flex gap-2' onClick={() => navigate('')}>
                                <img src={campanaVioleta} alt="" />
                                <p className='font-semibold'>Notificaciones</p>
                            </button>
                            <FlechaTriangulito />
                        </div>

                        {/* LINEA AYUDA */}
                        <div className='flex justify-between py-5 border-b border-primario'>
                            <button className='flex gap-2' onClick={() => navigate('/help')}>
                                <img src={ayudaVioleta} alt="" />
                                <p className='font-semibold'>Ayuda</p>
                            </button>
                            <FlechaTriangulito />
                        </div>
                        {/* LINEA */}
                        <div className='flex justify-between py-5 mb-5 border-b border-primario'>
                            <button className='flex gap-2' onClick={() => handleLogout()}>
                                <img src={cerrarSesionVioleta} alt="" />
                                <p className='font-semibold'>Cerrar Sesión</p>
                            </button>
                            <FlechaTriangulito />
                        </div>
                    </div>

                </div>
            </section>
        </div>

    );
}