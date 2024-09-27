import React from 'react';
import landingimg from '../assets/landingimg.png'
import tarjeta from '../assets/tarjeta.png';
import mundo from '../assets/mundo.png';
import reloj from '../assets/reloj.png';
import candado from '../assets/candado.png';
import monedas from '../assets/monedas.png';
import uno from '../assets/1.png';
import dos from '../assets/2.png';
import tres from '../assets/3.png';
import cuatro from '../assets/4.png';
import celular from '../assets/mock-phone.png'
import icon from '../assets/iconpayout.png'

const LandingPage = () => {
const cards = [
  {
    titulo: 'Internacional',
    imagen: mundo,
    texto: 'Cobrá desde todo el mundo y en cualquier moneda. ',
    numero: uno,
  },
  {
    titulo: 'Inmediato',
    imagen: reloj,
    texto: 'Retirá tu plata desde la App y recibala al instante. ',
    numero: dos,
  },
  {
    titulo: 'Seguro',
    imagen: candado,
    texto: 'El dinero se  deposita directo en tu cuenta ...  ',
    numero: tres
  },
  {
    titulo: 'Comisión baja',
    imagen: monedas,
    texto: 'Paga solo el 1% por cada retiro efectuado. ',
    numero: cuatro
  },
 
]

  return (
    <>
    <section className='lg:h-[90vh] p-6 lg:p-13 md:flex justify-between dark:bg-dark dark:text-white'>
    <div className='flex flex-col h-[29rem] xl:h-[38rem] lg:items-center relative'>
      <h2 className='lg:text-h2 xl:text-3xl text-left'>Gestiona tus finanzas</h2>
      <h3 className='xl:text-extra font-bold'>desde cualquier rincon del mundo.</h3>
      <img src={tarjeta} alt='tarjeta' className='mt-6 lg:h-[21rem] xl:h-[25rem]'/>
      <h3 className='text-ml xl:text-extra w-[65%] self-start absolute bottom-0 left-0 text-left'>Ahorra dinero al enviar, gastar y recibir pagos en diferentes divisas. Todo lo que necesitas,
      en una sola cuenta, siempre que lo necesites.</h3>
    </div>
    <img src={landingimg} alt='' className='w-[50%] hidden md:block'/>
    </section>

    <section className='lg:h-[100vh] text-center dark:bg-grisclaro bg-dark p-6 lg:p-16 xl:mt-[5px]'>
      <h2 className='lg:text-h2 xl:text-3xl font-extrabold bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-violetagrad dark:to-azulgrad bg-gradient-to-r from-grisclaro to-verde'>Descubre todos los beneficios de tu cuenta Payout</h2>
      <div className='lg:flex  bg-verde p-4 xl:p-6 m-4 mt-6 xl:m-20 rounded-2xl'>
        {cards.map((card, index) => (
          <div key={index} className='bg-white flex relative p-4 m-3 h-[15rem] lg:w-1/4 rounded-2xl'>
          <div className='text-left'>
            <img src={card.imagen} alt='img'/>
            <h3 className='font-bold lg:text-sm xl:text-m text-black'>{card.titulo}</h3>
            <p className='text-black lg:w-4/5 xl:w-3/4 lg:text-sm' >{card.texto}</p>
          </div>
          <img src={card.numero} alt='numero' className='absolute right-2 self-end h-[70px] '/>
        </div>
        ))}
        
        

      </div>

    </section>

    <section className=' text-center p-8 lg:h-[100vh] dark:bg-dark dark:text-white'>
      <h2 className='lg:text-h2 xl:text-3xl'>Sobre PAYOUT</h2>
      <h3 className='mt-8 font-bold lg:text-m xl:text-lg'>Payout es la plataforma de pagos líder a nivel mundial, diseñada especialmente para viajeros frecuentes. Facilitamos la gestión de tus finanzas mientras te desplazas por el mundo. Con nuestra sólida tecnología, cumplimiento normativo, operaciones eficientes e infraestructura bancaria global, Payout te permite enviar, recibir y convertir dinero de manera fácil y segura. Simplificamos el manejo de tus pagos internacionales para que puedas disfrutar de tus viajes sin preocupaciones.</h3>

      <div className='lg:flex lg:px-20 '>
        <img src={celular} className='w-[full] lg:h-[20rem] xl:h-[25rem] '/>
        <div className='flex flex-col gap-10 justify-center lg:p-4 items-center'>
          <h2 className='font-black lg:text-payout xl:text-4xl tracking-tighter leading-tight  text-left bg-gradient-to-r from-primario to-verde bg-clip-text text-transparent'>Mantenemos tu información financiera segura y protegida</h2>
          <img src={icon} className='w-[200px] xl:w-[300px] self-end'/>
        </div>
      </div>
      
    </section>
    </>
  )
}

export default LandingPage