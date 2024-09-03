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
    <section className='h-[90vh] p-6 flex justify-between'>
    <div>
      <h1>Gestiona tus finanzas</h1>
      <p>desde cualquier rincon del mundo.</p>
      <img src={tarjeta}/>
      <p>Ahorra dinero al enviar, gastar y recibir pagos en diferentes divisas. Todo lo que necesitas,
      en una sola cuenta, siempre que lo necesites.</p>
    </div>
    <img src={landingimg} alt='' className='w-[50%]'/>
    </section>
    <section className='h-[100vh]'>
      <h1>Descubre todos los beneficios de tu cuenta Payout</h1>
      <div className='flex'>
        {cards.map((card) =>(
          <div className='bg-slate-300 flex'>
          <div>
            <img src={card.imagen} alt='img'/>
            <h3>{card.titulo}</h3>
            <p>{card.texto}</p>
          </div>
          <img src={card.numero} alt='numero'/>
        </div>
        ))}
        
        

      </div>

    </section>
    </div>
  )
}

export default LandingPage