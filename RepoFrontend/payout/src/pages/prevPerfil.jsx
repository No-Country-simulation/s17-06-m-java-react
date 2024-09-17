import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import  userimage  from '../assets/userimage.png'

import  userVioleta  from '../assets/userVioleta.svg'
import  campanaVioleta  from '../components/atoms/assets/campanaVioleta.svg'
import  ayudaVioleta  from '../components/atoms/assets/ayudaVioleta.svg'
import  cerrarSesionVioleta  from '../components/atoms/assets/cerrarSesionVioleta.svg'

import { FlechaTriangulito } from '../components/icons/flechaTriangulito';




const urlInfoUserLogged = 'https://payout.redromsolutions.com/user/0'



export const PrevPerfil = () => {

    

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login'); // Redirige al login después de salir
      };
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
        <>
            <div></div>
            <section className='w-full flex flex-col items-center justify-center h-screen px-6 md:px-10'>        

            {/* CUERPO HOME */}
            <div id='cuerpo-vista-home' className='w-full'>

                {/* FOTO, NOMBRE Y USUARIO */}
                <div id='foto-y-username' className='flex flex-col gap-3 items-center pb-10'>
                    {/* FOTO */}
                    <div className="para-recortar-foto w-[48px] h-[48px] overflow-hidden rounded-full">
                            <img className='w-full h-full object-cover' src={userimage} alt="" />
                    </div>
                    {/* USERNAMES */}
                    <div id='texto-username' className=''>
                        <p className="text-xl uppercase font-semibold pb-2">{name} {lastName}</p>
                        <p className="text-center text-verde text-sm">@Username</p>
                    </div>
                </div>


                {/* TARJETA PERFIL */}
                <div id='tarjeta-perfil' className='px-8 py-8 w-full bg-grisclaro rounded-3xl  shadow-down-dark-md text-primario'>

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
                        <button className='flex gap-2' onClick={()=>navigate('')}>
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
        </>
        
    );
}