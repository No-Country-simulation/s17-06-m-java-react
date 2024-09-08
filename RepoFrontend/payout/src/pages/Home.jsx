import { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import  notif  from '../assets/Notificaciones.png'
import  userimage  from '../assets/userimage.png'
import CoinCard, {infoSaldos} from '../components/CoinCard.jsx';
import argIcon  from '../assets/banderaArg.svg';
import usaIcon from '../components/atoms/assets/usa.png';
import euroIcon from '../components/atoms/assets/euro.png';
import OperationButton, {operations} from '../components/atoms/OperationButton.jsx';
import NotificationItem, {activitiesNotif} from '../components/atoms/NotificationItem.jsx';

const Home = () => {
  
  
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


  return (
    <section className='px-4 md:px-10 w-full'>

        {/* BANNER NOMBRE DE USUARIO */}

        {/* BANNER MOBILE */}
        <div id='div-total-banner' className='md:hidden flex flex-row justify-between items-center py-6 border-b w-full'>             
            {/* FOTO Y USERNAME */}
            <div id='foto-y-username' className='flex flex-row gap-3 items-center'>
                {/* FOTO */}
                <div className="para-recortar-foto w-[32px] h-[32px] overflow-hidden rounded-full">
                        <img className='w-full h-full object-cover' src={userimage} alt="" />
                </div>
                {/* USERNAMES */}
                <div id='texto-username' className=']'>
                    <p className="text-white text-sm font-['Montserrat']">RAFAEL DIAZ</p>
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


            {/* FILA SALDOS MOBILE*/}
            <div
              {...handlers}
              ref={carruselRef}
              className="flex w-full gap-6 overflow-x-scroll scrollbar-hide scroll-smooth md:hidden"
            >
                <div id="card1" className="w-[320px] h-[127px] bg-primario rounded-2xl relative py-4 px-4 min-w-[320px] flex-shrink-0">
                    <div className="absolute top-0 left-0 w-full h-[50px] bg-white rounded-t-lg px-4 flex items-center gap-4">
                        <img src={argIcon} className="w-[40px] h-[40px]" alt="" />
                        <p className="text-start text-primario font-semibold">Peso Argentino</p>
                    </div>
                    <div className="pt-12">
                        <p className="text-start text-white text-lg">$800.000,00 ARS</p>
                        <p className="text-start text-white text-sm">CBU 0123456</p>
                    </div>
                </div>

                <div id="card2" className="w-[320px] h-[127px] bg-primario rounded-2xl relative py-4 px-4 min-w-[320px] flex-shrink-0">
                  <div className="absolute top-0 left-0 w-full h-[50px] bg-white rounded-t-lg px-4 flex items-center gap-4">
                    <img src={usaIcon} className="w-[40px] h-[40px]" alt="" />
                    <p className="text-primario font-semibold">Dólares estadounidenses</p>
                  </div>
                  <div className="pt-12">
                    <p className="text-start text-white text-lg">$800,00 USD</p>
                    <p className="text-start text-white text-sm">CBU XXXX</p>
                  </div>
                </div>

                <div id="card3" className="w-[320px] h-[127px] bg-primario rounded-2xl relative py-4 px-4 min-w-[320px] flex-shrink-0">
                  <div className="absolute top-0 left-0 w-full h-[50px] bg-white rounded-t-lg px-4 flex items-center gap-4">
                    <img src={euroIcon} className="w-[40px] h-[40px]" alt="" />
                    <p className="text-primario font-semibold">Euros</p>
                  </div>
                  <div className="pt-12">
                    <p className="text-start text-white text-lg">$80,00 EUR</p>
                    <p className="text-start text-white text-sm">CBU 0123456</p>
                  </div>
                </div>
            </div>


            {/* FILA SALDOS DESKTOP*/}
            <section id='para-poner-en-fila-las-tarjetas' className='hidden md:flex w-full justify-between gap-6 overflow-hidden'>
            {infoSaldos.map(({id, image, coin, saldo, cbu}) => (
              <CoinCard 
                key={id} 
                image={image} 
                coin={coin} 
                saldo={saldo} 
                cbu={cbu}  />
              ))}
            </section>




            <p className='font-semibold pt-10 flex items-start'>¿Qué deseas hacer?</p>

            {/* FILA BOTONES BLANCOS */}
            <div id='para-poner-en-fila-botones' className='py-2 flex justify-between gap-6'>
              {/* BOTON BLANCO */}
              {operations.map(({id, element, texto}) => (
                <OperationButton
                  key={id}
                  element={element}
                  texto={texto}
                />
              ))}

              {/* BOTON BLANCO SIGNO + */}
              <div className='flex flex-col justify-center items-center gap-2'>
                  <div className="w-[48px] h-[48px] md:w-[85px] md:h-[85px] md:min-w-[85px] bg-white rounded-full md:rounded-3xl py-6 px-6 flex flex-col justify-center items-center border-4 border-primario">
                        <p className='text-primario'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        </p>
                        {/* <p className='hidden md:block md:text-primario md:font-semibold'>XXX</p>  */}                               
                  </div>
                  <p className='md:hidden text-xs'>XXX</p>
              </div>

            </div>

            




            {/* SECCION TU ACTIVIDAD */}
            <p className='font-semibold pt-10 flex items-start'>Tu actividad</p>
            <p className='text-sm pt-2 pb-3 flex items-start'>Agosto</p>

            {/* LINEA */}
            <section id='linea-completa' className='pt-3 display flex justify-between pb-3 border-b border-primario w-full'>
                {activitiesNotif.map(({ id, datetime, actNotification, amount, activityType }) => (
                    <NotificationItem key={id}
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
  )
}

export default Home