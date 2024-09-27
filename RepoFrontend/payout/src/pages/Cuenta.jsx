import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";



import CoinCardCUENTA, { infoSaldos } from '../components/CoinCardCUENTA.jsx';
/* import Banner from '../components/Banner'; */





const urlInfoUserLogged = 'https://payout.redromsolutions.com/user/0'



export const Cuenta = () => {

    

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');



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
        <section className='px-4  md:px-10 mb-4 w-full dark:bg-dark dark:text-white'>

            {/* <Banner/> */}
            {/* CUERPO HOME */}
            <div id='cuerpo-vista-home' className='py-6 pb-10 w-full'>
                <p className='text-start font-semibold pb-4'>Tu cuenta PAYOUT</p>
                <p className='text-start'>Todas tus cuentas en un lugar</p>
            </div>
            {/* <div className='flex flex-col items-center'>
                <div className='inline-flex py-1 px-3 items-center justify-center gap-4 border-2 border-verde rounded-3xl text-verde'>
                    <div className='inline-flex items-center justify-center w-5 h-5 border-2 border-verde rounded-full text-verde'>
                        <p className='text-lg font-semibold'>+</p>
                    </div>                
                    <p>Abrir cuenta nueva</p>
                </div>
            </div> */}
            

            {/* COLUMNAS SALDOS DESKTOP Y MOBILE*/}
          <section id='columnas-saldos' className='pt-6 flex flex-col items-center justify-between gap-6 w-full'>
            {infoSaldos.map(({ id, image, coin, saldo, cbu, arrayBotones }) => (
              <CoinCardCUENTA
                key={id}
                image={image}
                coin={coin}
                saldo={saldo}
                cbu={cbu} 
                arrayBotones={arrayBotones}/>
            ))}
          </section>
        
        </section>
        
    );
}