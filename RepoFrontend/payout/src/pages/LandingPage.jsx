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
    <div>
    <section className='md:h-[90vh] p-6 md:flex justify-between'>
    <div>
      <h1>Gestiona tus finanzas</h1>
      <p>desde cualquier rincon del mundo.</p>
      <img src={tarjeta}/>
      <p>Ahorra dinero al enviar, gastar y recibir pagos en diferentes divisas. Todo lo que necesitas,
      en una sola cuenta, siempre que lo necesites.</p>
    </div>
    <img src={landingimg} alt='' className='w-[50%] hidden md:block'/>
    </section>

    <section className='md:h-[100vh] text-center bg-grisclaro p-6 md:p-16'>
      <h2 className='text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Descubre todos los beneficios de tu cuenta Payout</h2>
      <div className='md:flex bg-verde p-4 md:p-6 m-4 mt-6 md:m-20 rounded-2xl'>
        {cards.map((card) =>(
          <div className='bg-white flex p-4 m-3 h-[250px] rounded-2xl'>
          <div>
            <img src={card.imagen} alt='img'/>
            <h3>{card.titulo}</h3>
            <p class='text-black' >{card.texto}</p>
          </div>
          <img src={card.numero} alt='numero' className='h-[30px]'/>
        </div>
        ))}
        
        

      </div>

    </section>

    <section className=' text-center p-8'>
      <h2 className='text-white'>Sobre PAYOUT</h2>
      <p className='m-8'>Payout es la plataforma de pagos líder a nivel mundial, diseñada especialmente para viajeros frecuentes. Facilitamos la gestión de tus finanzas mientras te desplazas por el mundo. Con nuestra sólida tecnología, cumplimiento normativo, operaciones eficientes e infraestructura bancaria global, Payout te permite enviar, recibir y convertir dinero de manera fácil y segura. Simplificamos el manejo de tus pagos internacionales para que puedas disfrutar de tus viajes sin preocupaciones.</p>

      <div className='md:flex md:px-20 md:h-[500px]'>
        <img src={celular} className='w-[full] md:w-[600px]'/>
        <div className='flex flex-col gap-10 justify-center md:p-4 items-center'>
          <h2 className='font-black text-4xl md:text-5xl text-left bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Mantenemos tu información financiera segura y protegida</h2>
          <img src={icon} className='w-[200px] md:w-[300px] self-end'/>
        </div>
      </div>
      
    </section>
    </div>
  )
}

export default LandingPage