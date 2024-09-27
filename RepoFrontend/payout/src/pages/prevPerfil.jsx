import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import  userimage  from '../assets/userimage.png'

import  userVioleta  from '../assets/userVioleta.svg'
import  campanaVioleta  from '../components/atoms/assets/campanaVioleta.svg'
import  ayudaVioleta  from '../components/atoms/assets/ayudaVioleta.svg'
import  cerrarSesionVioleta  from '../components/atoms/assets/cerrarSesionVioleta.svg'

import  notif  from '../assets/Notificaciones.png'
import { FlechaTriangulito } from '../components/icons/flechaTriangulito';

import { Ask } from '../components/icons/Ask';
import { FlechaTriangulitoBack } from '../components/icons/flechaTriangulitoBack';
import { ThemeButton } from '../components/ThemeButton';




const urlInfoUserLogged = 'https://payout.redromsolutions.com/user/0'



export const PrevPerfil = () => {

    

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate()

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
                    <button onClick={()=>navigate('/home')} className='flex text-white whitespace-nowrap font-semibold'>
                        <p className='w-6 h-6 absolute left-2 flex items-center'>
                            <span className='left-7 absolute'>Perfil</span>
                            <FlechaTriangulitoBack/>
                        </p>
                    </button>
                    <div className='absolute right-4 flex gap-4'>
                        {/* <div className='md:hidden '>
                            <ThemeButton onActivate={onActivate} onDeactivate={onDeactivate} />
                        </div> */}
                        <img src={notif} className='w-[24px] h-[24px] items-center' alt="" />
                        <p className='text-white '>
                            <Ask/>
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
                        <button className='flex gap-2' onClick={()=>navigate('/perfil')}>
                            <img src={userVioleta} alt="" />
                            <p className='font-semibold'>Datos personales</p>
                        </button>                        
                        <FlechaTriangulito/>                        
                    </div>

                    {/* LINEA NOTIFICACIONES*/}
                    <div className='flex justify-between py-5 border-b border-primario'>
                        <button className='flex gap-2' onClick={()=>navigate('')}>
                            <img src={campanaVioleta} alt="" />
                            <p className='font-semibold'>Notificaciones</p>
                        </button>
                        <FlechaTriangulito/> 
                    </div>

                    {/* LINEA AYUDA */}
                    <div className='flex justify-between py-5 border-b border-primario'>                       
                        <button className='flex gap-2' onClick={()=>navigate('/help')}>
                            <img src={ayudaVioleta} alt="" />
                            <p className='font-semibold'>Ayuda</p>
                        </button>
                        <FlechaTriangulito/>                     
                    </div>
                    {/* LINEA */}
                    <div className='flex justify-between py-5 mb-5 border-b border-primario'>
                        <button className='flex gap-2' onClick={()=>handleLogout()}>
                            <img src={cerrarSesionVioleta} alt="" />
                            <p className='font-semibold'>Cerrar Sesión</p>
                        </button>
                        <FlechaTriangulito/>                         
                    </div>                    
                </div> 

            </div>            
            </section>
        </div>
        
    );
}