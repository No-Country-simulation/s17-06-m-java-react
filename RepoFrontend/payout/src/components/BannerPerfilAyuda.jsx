import  notif  from '../assets/Notificaciones.png'
import  userimage  from '../assets/userimage.png'
import { useEffect, useState } from 'react';
import { ThemeButton } from './ThemeButton';
import { Ask } from './icons/ask';



const urlInfoUserLogged = 'https://payout.redromsolutions.com/user/0'



const Banner = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');


 


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
    <div id='div-total-banner' className='md:hidden flex justify-between items-center w-full'>
        <section className='flex'>
            <button onClick={handleVolverAtras} className='flex text-white whitespace-nowrap font-semibold'>
                <p className='w-6 h-6 absolute left-2 flex items-center'>
                    <span className='left-7 absolute'>Transferir</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </p>
            </button>
            <div className='absolute right-4 flex gap-4'>
                <img src={notif} className='w-[24px] h-[24px] items-center' alt="" />
                <p className='text-white '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </p>
            </div>
        </section>
    </div>
  )
}

export default Banner