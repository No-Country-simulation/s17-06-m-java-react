import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import argIcon  from '../assets/banderaArg.svg'
import edit  from '../assets/edit.svg'
import copy  from '../assets/copy.svg'
import share  from '../assets/share.svg'



import CoinCardCUENTA, { infoSaldos } from '../components/CoinCardCUENTA.jsx';
import { Ojovisible } from '../components/icons/ojovisible.jsx';
import { Ojotachado } from '../components/icons/ojotachado.jsx';
/* import Banner from '../components/Banner'; */





const urlInfoUserLogged = 'https://payout.redromsolutions.com/user/0'



export const CuentaPesos = () => {

    

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');


    const [showPassword, setShowPassword] = useState(false);
/*     const [light, setLight] = useState(true); */

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };


    const navigate = useNavigate()

    /* FETCH PARA TRAER LA INFO DE BASE DE DATOS Y LLENAR LOS CAMPOS */
    /* useEffect(() => {
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
    }, []); */





    return (
        <section className='md:px-10 w-full md:h-screen md:flex flex-col items-center justify-center'>
                        

            {/* contenedor tarjeta */}
            <div className='flex flex-col justify-center w-full'>
                {/* TARJETA VIOLETA ENTERA */}
                <div className='bg-primario text-white flex flex-col gap-4 justify-center items-center py-6'>
                    {/* BANDERA Y TEXTO MONEDA */}
                    <div className='flex gap-4 items-center'>
                        <img src={argIcon} className='w-[25px] h-[25px]' alt='argIcon' />
                        <p>Peso argentino</p>
                    </div>                    
                    {/* SALDO */}
                    <div className='flex gap-4'>
                        <p className='text-xl font-semibold'>$800000 ARS</p>
                        {/* BOTON VISIBILIDAD SALDO */}
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className=" text-white " >
                            {showPassword ? (
                            <Ojovisible/>
                            ) : (
                            <Ojotachado/> 
                            )}
                        </button>
                    </div>                
                </div>
                {/* informacion bancaria */}
                <div className='bg-white py-4 px-4 text-black'>
                    <h3 className='text-start text-sm font-semibold pb-4'>Datos de tu cuenta</h3>
                    {/* contenedor lineas */}
                    <div id='contenedor-lineas' className='flex flex-col gap-5 pb-5 border-b border-primario'>
                        <div className='flex justify-between'>
                            <p className='text-xs font-medium'>Tu Alias</p>
                            <div className='flex gap-2'>
                                <p className='text-xs font-semibold text-primario underline'>emma.payout</p>
                                <img src={edit} alt="edit" />
                            </div>                        
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-xs font-medium'>Tu CVU</p>
                            <p className='text-xs font-semibold text-primario underline'>000123005677991233</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-xs font-medium'>Nombre</p>
                            <p className='text-xs font-semibold text-primario'>Rafael Diaz</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-xs font-medium'>DNI</p>
                            <p className='text-xs font-semibold text-primario'>39437128</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-xs font-medium'>Entidad</p>
                            <p className='text-xs font-semibold text-primario'>Payout</p>
                        </div>
                    </div>

                    {/* COPIAR COMPARTIR */}
                    <div className='pt-5 text-primario flex gap-3 justify-end'>
                        <div className='flex gap-4 pr-3 border-r border-primario'>
                            <p className='text-sm font-semibold'>Copiar</p>
                            <img src={copy} alt="" />
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-sm font-semibold'>Compartir</p>
                            <img src={share} alt="" />
                        </div>
                    </div> 
                </div>
            </div>
            
        </section>
        
    );
}