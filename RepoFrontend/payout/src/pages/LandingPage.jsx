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
import celular from '../assets/celular.png'
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
    texto: 'etirá tu plata desde la App y recibala al instante. ',
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
    <section className='md:h-[90vh] p-12 md:flex justify-between'>
    <div className='flex flex-col items-center relative'>
      <h2>Gestiona tus finanzas</h2>
      <h3 className='text-extra font-bold'>desde cualquier rincon del mundo.</h3>
      <img src={tarjeta} alt='tarjeta' className='mt-8'/>
      <h3 className='text-extra  w-3/5 self-start absolute bottom-0 '>Ahorra dinero al enviar, gastar y recibir pagos en diferentes divisas. Todo lo que necesitas,
      en una sola cuenta, siempre que lo necesites.</h3>
    </div>
    <img src={landingimg} alt='' className='w-[50%] hidden md:block'/>
    </section>

    <section className='md:h-[100vh] text-center bg-dark p-6 md:p-16'>
      <h2 className='text-5xl font-extrabold bg-gradient-to-r from-grisclaro to-verde bg-clip-text text-transparent'>Descubre todos los beneficios de tu cuenta Payout</h2>
      <div className='md:flex  bg-verde p-4 md:p-6 m-4 mt-6 md:m-20 rounded-2xl'>
        {cards.map((card) =>(
          <div className='bg-white flex relative p-4 m-3 h-[250px] w-1/4 rounded-2xl'>
          <div className='text-left'>
            <img src={card.imagen} alt='img'/>
            <h3 className='font-bold'>{card.titulo}</h3>
            <p class='text-black w-3/4' >{card.texto}</p>
          </div>
          <img src={card.numero} alt='numero' className='absolute right-2 self-end h-[70px] '/>
        </div>
        ))}
        
        

      </div>

    </section>

    <section className=' text-center p-8 md:h-[90vh]'>
      <h2 className=''>Sobre PAYOUT</h2>
      <h3 className='mt-8 font-bold'>Payout es la plataforma de pagos líder a nivel mundial, diseñada especialmente para viajeros frecuentes. Facilitamos la gestión de tus finanzas mientras te desplazas por el mundo. Con nuestra sólida tecnología, cumplimiento normativo, operaciones eficientes e infraestructura bancaria global, Payout te permite enviar, recibir y convertir dinero de manera fácil y segura. Simplificamos el manejo de tus pagos internacionales para que puedas disfrutar de tus viajes sin preocupaciones.</h3>

      <div className='md:flex md:px-20 '>
        <img src={celular} className='w-[full] md:w-[500px]'/>
        <div className='flex flex-col gap-10 justify-center md:p-4 items-center'>
          <h2 className='font-black text-xl tracking-tighter leading-tight md:text-4xl text-left bg-gradient-to-r from-primario to-verde bg-clip-text text-transparent'>Mantenemos tu información financiera segura y protegida</h2>
          <img src={icon} className='w-[200px] md:w-[300px] self-end'/>
        </div>
      </div>
      
    </section>
    </>
  )
}

export default LandingPage