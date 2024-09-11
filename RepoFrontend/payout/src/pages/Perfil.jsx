import React from 'react';
import  notif  from '../assets/Notificaciones.png'
import  userimage  from '../assets/userimage.png'



export const Perfil = () => {
    return (
        <section className='px-4 md:px-10 w-full'>

        {/* BANNER NOMBRE DE USUARIO */}

        {/* BANNER MOBILE */}
        <div id='div-total-banner' className='md:hidden flex flex-row justify-between items-center py-6 w-full'>             
            {/* FOTO Y USERNAME */}
            <div id='foto-y-username' className='flex flex-row gap-3 items-center'>
                {/* FOTO */}
                <div className="para-recortar-foto w-[32px] h-[32px] overflow-hidden rounded-full">
                        <img className='w-full h-full object-cover' src={userimage} alt="" />
                </div>
                {/* USERNAMES */}
                <div id='texto-username' className=']'>
                    <p className="text-sm font-['Montserrat']">RAFAEL DIAZ</p>
                    <p className="text-verde text-sm font-['Montserrat']">@Rafael</p>
                </div>
            </div>
            {/* CAMPANA Y SIGNO DE PREGUNTA MOBILE */}
            <div className='flex gap-4'>
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
                  ¡Hola, Rafael!</p>
            {/* ELEMENTOS DE LA DERECHA, CAMPANA, FOTO USER Y NOMBRES */}
            <div id='elementos-de-la-derecha' className='flex flex-row gap-8 items-center justify-between '>
                {/* CAMPANA */}
                <img src={notif} className='hidden md:w-[24px] md:h-[24px] items-center' alt="" />
                {/* FOTO Y USERNAME */}
                <div id='foto-y-username' className='flex flex-row gap-3 items-center'>
                    {/* FOTO */}
                    <div className="para-recortar-foto w-[32px] h-[32px] overflow-hidden rounded-full">
                            <img className='w-full h-full object-cover' src={userimage} alt="" />
                    </div>
                    {/* USERNAMES */}
                    <div id='texto-username' className=''>
                        <p className="text-sm font-semibold">RAFAEL DIAZ</p>
                        <p className="text-verde text-sm font-['Montserrat']">@Rafael</p>
                    </div>
                </div>                
            </div>
        </div>

        {/* CUERPO HOME */}
        <div id='cuerpo-vista-home' className='py-6 pb-10 w-full'>
            <p className='font-semibold pb-4 flex items-start'>Tu cuenta PAYOUT</p>
        </div>
           
           
        </section>
    );
}

