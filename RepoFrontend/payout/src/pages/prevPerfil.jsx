
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import campana from '../assets/NotificacionesVioleta.png'
import  userimage  from '../assets/userimage.png'




const urlInfoUserLogged = 'https://payout.redromsolutions.com/user/0'



export const PrevPerfil = () => {

    

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');



    const navigate = useNavigate()

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
        <section className='px-4 md:px-10 w-full'>

        

            {/* CUERPO HOME */}
            <div id='cuerpo-vista-home' className='py-10 pb-10 px-3'>

                <div id='foto-y-username' className='flex flex-col gap-3 items-center pb-8'>
                    {/* FOTO */}
                    <div className="para-recortar-foto w-[32px] h-[32px] overflow-hidden rounded-full">
                            <img className='w-full h-full object-cover' src={userimage} alt="" />
                    </div>
                    {/* USERNAMES */}
                    <div id='texto-username' className=']'>
                        <p className="text-sm">{name} {lastName}</p>
                        <p className="text-center text-verde text-sm">@Username</p>
                    </div>
                </div>

                {/* TARJETA PERFIL */}
                <div id='tarjeta-perfil' className='px-8 py-6 md:py-10 pb-10 md:pb-20 w-full bg-grisclaro rounded-md md:rounded-3xl shadow-down-dark-md text-primario'>
                    {/* LINEA */}
                    <div className='flex justify-between py-3 border-b border-primario'>
                        <div className='flex gap-2'>
                            <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            </p>
                            <p className='font-semibold'>Datos personales</p>
                        </div>
                        <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        </p>                        
                    </div>
                    {/* LINEA */}
                    <div className='flex justify-between py-3 border-b border-primario'>
                        <div className='flex gap-2'>
                            <p className='text-primario'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                            </p>
                            <p className='font-semibold'>Notificaciones</p>
                        </div>                        
                        <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        </p>
                    </div>
                    {/* LINEA */}
                    <div className='flex justify-between py-3 border-b border-primario'>
                        <div className='flex gap-2'>
                            <p className='text-primario'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                            </p>
                            <p className='font-semibold'>Ayuda</p>
                        </div>                        
                        <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        </p>
                    </div>
                    {/* LINEA */}
                    <div className='flex justify-between py-3 border-b border-primario'>
                        <div className='flex gap-2'>
                            <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                            </svg>
                            </p>
                            <p className='font-semibold'>Cerrar sesión</p>
                        </div>
                        <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        </p>                        
                    </div>
                    

                    
                </div> 
            </div>            
        </section>
    );
}