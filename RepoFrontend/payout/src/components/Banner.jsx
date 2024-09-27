
import notif from '../assets/Notificaciones.png'
import userimage from '../assets/userimage.png'
import { useEffect, useState } from 'react';
import { ThemeButton } from './ThemeButton';



const urlInfoUserLogged = 'https://payout.redromsolutions.com/user/0'



const Banner = ({ onActivate, onDeactivate }) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    const [light, setLight] = useState(true);



    const handleActivate = () => {
      setLight(!light);
      // Aquí puedes poner la lógica que quieres ejecutar cuando se activa
    };
  
    const handleDeactivate = () => {
      setLight(!light);
      // Aquí puedes poner la lógica que quieres ejecutar cuando se desactiva
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
        <section className=' w-full px-4 md:px-10 dark:bg-dark dark:text-white'>

            {/* BANNER NOMBRE DE USUARIO */}

            {/* BANNER MOBILE */}
            <div id='div-total-banner' className='md:hidden flex justify-between items-center py-6 w-full e'>
                {/* FOTO Y USERNAME */}
                <div id='foto-y-username' className='flex gap-3 items-center'>
                    {/* FOTO */}
                    <div className="para-recortar-foto w-[32px] h-[32px] overflow-hidden rounded-full">
                        <img className='w-full h-full object-cover' src={userimage} alt="" />
                    </div>
                    {/* USERNAMES */}
                    <div id='texto-username' className=']'>
                        <p className="text-sm font-['Montserrat']">{name} {lastName}</p>
                    </div>
                </div>


                {/* CAMPANA Y SIGNO DE PREGUNTA MOBILE */}
                <div className='flex gap-4'>
                    {/* BOTON TEMA CLARO/OSCURO */}
                    <div className='md:hidden '>
                        <ThemeButton onActivate={onActivate} onDeactivate={onDeactivate} />
                    </div>

                    <img src={notif} className='md:hidden w-[24px] h-[24px] items-center' alt="" />
                    <p className='text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    </p>
                </div>

            </div>


            {/* BANNER DESKTOP */}
            <div id='div-total-banner' className='hidden md:block md:flex md:flex-row justify-between items-center py-6 border-b w-full'>
                {/* HOLA */}
                <p className="dark:text-white md:font-semibold md:text-2xl">
                    ¡Hola, {name}!</p>
                {/* ELEMENTOS DE LA DERECHA, CAMPANA, FOTO USER Y NOMBRES */}
                <div id='elementos-de-la-derecha' className='flex flex-row gap-8 items-center justify-between '>
                    
                    {/* FOTO Y USERNAME */}
                    <div id='foto-y-username' className='flex w-full gap-3 items-center '>
                        
                        {/* FOTO */}
                        <div className="para-recortar-foto w-[32px] h-[32px] overflow-hidden rounded-full">
                            <img className='w-full h-full object-cover' src={userimage} alt="" />
                        </div>
                        {/* USERNAMES */}
                        <div id='texto-username' className=''>
                            <p className="text-sm font-semibold">{name} {lastName}</p>
                        </div>
                    </div>
                </div>
            </div>





        </section>
    )
}

export default Banner