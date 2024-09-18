import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import notif from '../assets/Notificaciones.png'
import userimage from '../assets/userimage.png'
import CoinCard, { infoSaldos } from '../components/CoinCard.jsx';
import argIcon from '../assets/banderaArg.svg';
import usaIcon from '../components/atoms/assets/usa.png';
import euroIcon from '../components/atoms/assets/euro.png';
import OperationButton, { operations } from '../components/atoms/OperationButton.jsx';
import NotificationItem, { activitiesNotif } from '../components/atoms/NotificationItem.jsx';
import { Link } from 'react-router-dom';


const Home = ( ) => {
  
  const lastThreeActivities = activitiesNotif.slice(0, 3);


  const carruselRef = useRef(null);

  // Función para manejar el desplazamiento
  const scrollLeft = () => {
    carruselRef.current.scrollBy({
      left: -320, // Ajusta según el ancho de tus tarjetas
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    carruselRef.current.scrollBy({
      left: 320, // Ajusta según el ancho de tus tarjetas
      behavior: 'smooth',
    });
  };

  // Maneja los gestos de swipe
  const handlers = useSwipeable({
    onSwipedLeft: () => scrollRight(),
    onSwipedRight: () => scrollLeft(),
    trackMouse: true, // También habilita el arrastre con el mouse para pruebas en escritorio
  });

const urlBankInfo = 'https://payout.redromsolutions.com/bank_account/bytoken'

  const [montoPesos, setMontoPesos] = useState(''); 
    const [montoDolares, setMontoDolares] = useState('');
    const [montoEuros, setMontoEuros] = useState('');   

    const [CVUPesos, setCVUPesos] = useState(''); 
    const [CVUDolares, setCVUDolares] = useState('');
    const [CVUEuros, setCVUEuros] = useState('');   

  /* FETCH PARA TRAER LA INFO DE BASE DE DATOS Y LLENAR LOS CAMPOS */
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
            setMontoPesos(data[0].balance);
            setMontoDolares(data[1].balance);
            setMontoEuros(data[2].balance)
            setCVUPesos(data[0].cvu);
            setCVUDolares(data[1].cvu);
            setCVUEuros(data[2].cvu)
            console.log(data)
        });
}, []);



  
  return (
    <div className='flex'>
      

      <section className='px-4 md:px-10 w-full'>

        
        {/* CUERPO HOME */}
        <div id='cuerpo-vista-home' className='py-6 pb-10 w-full'>
          <p className='font-semibold pb-4 flex items-start'>Tu cuenta PAYOUT</p>


          {/* FILA SALDOS MOBILE*/}
          <div
            {...handlers}
            ref={carruselRef}
            className="flex w-full gap-3 overflow-x-scroll scrollbar-hide scroll-smooth md:hidden"
          >
            <div id="card1" className="w-[320px] h-[127px] bg-primario rounded-2xl relative py-4 px-4 min-w-[320px] flex-shrink-0">
              <div className="absolute top-0 left-0 w-full h-[50px] dark:bg-white bg-grisclaro rounded-t-lg px-4 flex items-center gap-4">
                <img src={argIcon} className="w-[40px] h-[40px]" alt="" />
                <p className="text-start text-primario font-semibold">Peso Argentino</p>
              </div>
              <div className="pt-12">
                <p className="text-start text-white text-lg">${montoPesos} ARS</p>
                <p className="text-start text-white text-sm">CVU ${CVUPesos}</p>
              </div>
            </div>

            <div id="card2" className="w-[320px] h-[127px] bg-primario rounded-2xl relative py-4 px-4 min-w-[320px] flex-shrink-0">
              <div className="absolute top-0 left-0 w-full h-[50px] dark:bg-white bg-grisclaro rounded-t-lg px-4 flex items-center gap-4">
                <img src={usaIcon} className="w-[40px] h-[40px]" alt="" />
                <p className="text-primario font-semibold">Dólares estadounidenses</p>
              </div>
              <div className="pt-12">
              <p className="text-start text-white text-lg">${montoDolares} USD</p>
              <p className="text-start text-white text-sm">CVU ${CVUDolares}</p>
              </div>
            </div>

            <div id="card3" className="w-[320px] h-[127px] bg-primario rounded-2xl relative py-4 px-4 min-w-[320px] flex-shrink-0">
              <div className="absolute top-0 left-0 w-full h-[50px] dark:bg-white bg-grisclaro rounded-t-lg px-4 flex items-center gap-4">
                <img src={euroIcon} className="w-[40px] h-[40px]" alt="" />
                <p className="text-primario font-semibold">Euros</p>
              </div>
              <div className="pt-12">
              <p className="text-start text-white text-lg">€{montoEuros} EUR</p>
              <p className="text-start text-white text-sm">CVU ${CVUDolares}</p>
              </div>
            </div>
          </div>


          {/* FILA SALDOS DESKTOP*/}
          <section id='para-poner-en-fila-las-tarjetas' className='hidden md:flex w-full justify-between gap-3 overflow-hidden'>
            {infoSaldos.map(({ id, image, coin, saldo, cbu }) => (
              <CoinCard
                key={id}
                image={image}
                coin={coin}
                saldo={saldo}
                cbu={cbu} />
            ))}
          </section>




          <p className='font-semibold pt-10 flex items-start'>¿Qué deseas hacer?</p>

          {/* FILA BOTONES BLANCOS */}
          <div id='para-poner-en-fila-botones' className='py-2 flex justify-between gap-6 md:overflow-hidden'>
            {/* BOTON BLANCO */}
            {operations.map(({ id, element, texto, path}) => (
              <OperationButton
                key={id}
                element={element}
                texto={texto}
                path={path}                
              />
            ))} 
          </div>






          {/* SECCION TU ACTIVIDAD */}
          <p className='font-semibold pt-10 flex items-start'>Tu actividad</p>
          <div className='flex justify-between w-full'>
            <p className='text-sm pt-2 pb-3 flex items-start'>Agosto</p>
            <Link to={'/actividad'} className='font-light underline'>Ver toda mi actividad</Link>
          </div>

          {/* LINEA */}
          <section id='linea-completa' className='pt-3 display flex justify-between pb-3 border-b border-primario w-full'>
            {activitiesNotif.map(({ id, element, datetime, actNotification, amount, activityType }) => (
              <NotificationItem key={id}
                element={element}
                datetime={datetime}
                actNotification={actNotification}
                amount={amount}
                activityType={activityType}
              />
            ))}
          </section>
          {/* LINEA */}

        </div>
      </section>
    </div>
  )
}

export default Home