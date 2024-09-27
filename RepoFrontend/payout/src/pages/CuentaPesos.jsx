import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import argIcon  from '../assets/banderaArg.svg'
import edit  from '../assets/edit.svg'
import copy  from '../assets/copy.svg'
import share  from '../assets/share.svg'



import CoinCardCUENTA, { infoSaldos } from '../components/CoinCardCUENTA.jsx';
import { Ojovisible } from '../components/icons/Ojovisible.jsx';
import { Ojotachado } from '../components/icons/Ojotachado.jsx';
import { FlechaTriangulitoBack } from '../components/icons/flechaTriangulitoBack.jsx';
/* import Banner from '../components/Banner'; */





const urlInfoUserLogged = 'https://payout.redromsolutions.com/user/0'
const urlBankInfo = 'https://payout.redromsolutions.com/bank_account/bytoken'



export const CuentaPesos = () => {

    const navigate = useNavigate()


    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    /* const [DNI, setDNI] = useState('') */
    const [montoPesos, setMontoPesos] = useState(''); 
    const [CVUPesos, setCVUPesos] = useState(''); 
    const [alias, setAlias] = useState('')


    const [showPassword, setShowPassword] = useState(false);


    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
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
                console.log('data perfil', data)
                if (userData.userDetail) {
                    setName(userData.userDetail.name)
                    setLastName(userData.userDetail.lastName)                 
                    };
                });
        }, []);



        /* FETCH PARA TRAER INFO BANCARIA */
        useEffect(() => {
            fetch(urlBankInfo, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(data => data.json())
                .then(data => {                
                    setMontoPesos(data[0].balance)
                    setAlias(data[0].alias)                    
                    setCVUPesos(data[0].cvu);                    
                    console.log(data)
                });
        }, []);



    return (
        <section className='md:px-10 w-full md:h-screen md:flex flex-col items-center justify-center'>
                        

            {/* contenedor tarjeta */}
            <div className='flex flex-col justify-center w-full md:w-[500px]'>
                {/* TARJETA VIOLETA ENTERA */}
                <div className='relative bg-primario text-white flex flex-col gap-4 justify-center items-center py-6'>
                    {/* BANDERA Y TEXTO MONEDA */}
                    <button className='position absolute top-6 left-1' onClick={()=>navigate(-1)}>
                        <FlechaTriangulitoBack/>
                    </button>
                    <div className='flex gap-4 items-center'>
                        <img src={argIcon} className='w-[25px] h-[25px]' alt='argIcon' />
                        <p>Peso argentino</p>
                    </div>                    
                    {/* SALDO */}
                    <div className='flex gap-4'>
                        {showPassword? 
                        <p className='text-xl font-semibold'>${montoPesos} ARS</p>:
                        <p className='text-xl font-semibold'>****** ARS</p>
                        }
                        
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
                <div className='dark:bg-white bg-grisclaro py-4 px-4 text-black'>
                    <h3 className='text-start text-sm font-semibold pb-4'>Datos de tu cuenta</h3>
                    {/* contenedor lineas */}
                    <div id='contenedor-lineas' className='flex flex-col gap-5 pb-5 border-b border-primario'>
                        <div className='flex justify-between'>
                            <p className='text-xs font-medium'>Tu Alias</p>
                            <div className='flex gap-2'>
                                <p className='text-xs font-semibold text-primario underline'>{alias}</p>
                                <img src={edit} alt="edit" />
                            </div>                        
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-xs font-medium'>Tu CVU</p>
                            <p className='text-xs font-semibold text-primario underline'>{CVUPesos}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-xs font-medium'>Nombre</p>
                            <p className='text-xs font-semibold text-primario'>{name} {lastName}</p>
                        </div>
                        {/* <div className='flex justify-between'>
                            <p className='text-xs font-medium'>DNI</p>
                            <p className='text-xs font-semibold text-primario'>39437128</p>
                        </div> */}
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