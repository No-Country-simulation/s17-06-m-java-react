
import  notif  from '../assets/Notificaciones.png'
import  userimage  from '../assets/userimage.png'
import  arg  from '../assets/banderaArg.svg'
/* import  upload  from '../assets/upload.png' */
import  transfer  from '../assets/transfer.png'
import  intercambiar  from '../assets/intercambiar.png'


const Home = () => {
  return (
    <section className='block px-4 md:px-10 w-full'>

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
            <p className="md:text-white md:font-semibold md:text-2xl">
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
                    <div id='texto-username' className=']'>
                        <p className="text-white text-sm font-['Montserrat']">RAFAEL DIAZ</p>
                        <p className="text-verde text-sm font-['Montserrat']">@Rafael</p>
                    </div>
                </div>                
            </div>
        </div>



        

        {/* CUERPO HOME */}
        <div id='cuerpo-vista-home' className='py-6 pb-10 w-full'>
            <p className='text-white font-semibold pb-4'>Tu cuenta Payout</p>

            {/* FILA SALDOS */}
            <div id='para-poner-en-fila-las-tarjetas' className='flex w-full justify-between gap-6 overflow-hidden'>
                <div className="w-[320px] h-[127px] bg-primario rounded-2xl relative py-4 px-4 min-w-[320px] flex-shrink-0">
                    {/* Banda superior blanca */}
                    <div className="absolute top-0 left-0 w-full h-[50px] bg-white rounded-t-lg px-4 flex items-center gap-4">
                      <img src={arg}  className='w-[40px] h-[40px]' alt="" />
                      <p className='text-primario font-semibold'>Peso Argentino</p>
                    </div>
                    {/* Contenido del div principal */}
                    <div className="pt-12">                  
                      <p className="text-white text-lg">$800.000,00 ARS</p>
                      <p className="text-white text-sm">CBU 0123456</p>
                    </div>
                </div>

                <div className="w-[320px] h-[127px] bg-primario rounded-2xl relative py-4 px-4 min-w-[320px]">
                    {/* Banda superior blanca */}
                    <div className="absolute top-0 left-0 w-full h-[50px] bg-white rounded-t-lg px-4 flex items-center gap-4">
                      <img src={arg}  className='w-[40px] h-[40px]' alt="" />
                      <p className='text-primario font-semibold'>Dólares estadounidenses</p>
                    </div>
                    {/* Contenido del div principal */}
                    <div className="pt-12">                  
                      <p className="text-white text-lg">$800,00 USD</p>
                      <p className="text-white text-sm">CBU XXXX</p>
                    </div>
                </div>

                <div className="w-[320px] h-[127px] bg-primario rounded-2xl relative py-4 px-4 min-w-[320px]">
                    {/* Banda superior blanca */}
                    <div className="absolute top-0 left-0 w-full h-[50px] bg-white rounded-t-lg px-4 flex items-center gap-4">
                      <img src={arg}  className='w-[40px] h-[40px]' alt="" />
                      <p className='text-primario font-semibold'>Euros</p>
                    </div>
                    {/* Contenido del div principal */}
                    <div className="pt-12">                  
                      <p className="text-white text-lg">$80,00 EUR</p>
                      <p className="text-white text-sm">CBU 0123456</p>
                    </div>
                </div>
            </div>
            
            <p className='text-white font-semibold pt-10'>Qué deseas hacer?</p>



            {/* FILA BOTONES BLANCOS */}
            <div id='para-poner-en-fila-botones' className='py-2 flex justify-between gap-6 overflow-hidden'>

              {/* BOTON BLANCO */}
                <div className="w-[85px] h-[85px] md:w-[210px] md:h-[85px] md:min-w-[210px] bg-white rounded-full md:rounded-3xl py-4 px-8 flex flex-col justify-center items-center border-4 border-primario">
                  <p className='text-primario font-semibold'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                  </p>
                  <p className='hidden md:text-primario md:font-semibold'>Depositar</p>                  
                </div>

              {/* BOTON BLANCO */}
                <div className="w-[85px] h-[85px] md:w-[210px] md:h-[85px] md:min-w-[210px] bg-white rounded-full md:rounded-3xl py-4 px-10 flex flex-col justify-center items-center border-4 border-primario">
                  <p className='text-primario font-semibold'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" style={{ transform: 'rotate(270deg)' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>

                  </p>
                  <p className='hidden md:text-primario md:font-semibold'>Transferir</p>                  
                </div>

              {/* BOTON BLANCO */}
                <div className="w-[85px] h-[85px] md:w-[210px] md:h-[85px] md:min-w-[210px] bg-white rounded-full md:rounded-3xl py-4 px-8 flex flex-col justify-center items-center border-4 border-primario">
                  <p className='text-primario font-semibold'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  </p>
                  <p className='hidden md:text-primario md:font-semibold'>Intercambiar</p>                  
                </div>

              {/* BOTON BLANCO */}
                <div className="w-[85px] h-[85px] md:w-[210px] md:h-[85px] md:min-w-[210px] bg-white rounded-full md:rounded-3xl py-4 px-10 flex flex-col justify-center items-center border-4 border-primario">
                  <p className='text-primario'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                  </p>
                  <p className='hidden md:text-primario md:font-semibold'>xxx</p>                  
                </div>

              {/* BOTON BLANCO */}
                <div className="w-[85px] h-[85px] md:w-[210px] md:h-[85px] md:min-w-[210px] bg-white rounded-full md:rounded-3xl py-4 px-10 flex flex-col justify-center items-center border-4 border-primario">
                  <p className='text-primario'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                  </p>
                  <p className='text-primario font-semibold'>xxx</p>                  
                </div>
            </div>



        {/* SECCION TU ACTIVIDAD */}
            <p className='text-white font-semibold pt-10'>Tu actividad</p>
            <p className='text-white text-sm pt-2 pb-3'>Agosto</p>

            {/* LINEA */}
            <div id='linea-completa' className='pt-3 display flex justify-between pb-3 border-b border-primario w-full'>
                <div id='lado-izq' className='flex items-center gap-5'>
                    <p className='text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                      </svg>
                    </p>
                    <div>
                        <p className='text-primario'>27AG02024 - 12.00</p>
                        <p className='text-white'>Envío a José Luis</p>
                    </div>
                </div>
                <div id='lado-der' className='flex flex-col items-center gap-1.5'>
                    <p className='text-white'>- 15.000 ARS</p>
                    <div className='bg-verde w-[140px] rounded-2xl'>
                        <p className='text-dark text-xs text-center'>Envío realizado</p>
                    </div>
                </div>
            </div>
            {/* LINEA */}
            <div id='linea-completa' className='pt-3 display flex justify-between pb-3 border-b border-primario w-full'>
                <div id='lado-izq' className='flex items-center gap-5'>
                    <p className='text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                      </svg>
                    </p>
                    <div>
                        <p className='text-primario'>27AG02024 - 12.00</p>
                        <p className='text-white'>Envío a José Luis</p>
                    </div>
                </div>
                <div id='lado-der' className='flex flex-col items-center gap-1.5'>
                    <p className='text-white'>- 15.000 ARS</p>
                    <div className='bg-verde w-[140px] rounded-2xl'>
                        <p className='text-dark text-xs text-center'>Envío realizado</p>
                    </div>
                </div>
            </div>
            {/* LINEA */}
            <div id='linea-completa' className='pt-3 display flex justify-between pb-3 border-b border-primario w-full'>
                <div id='lado-izq' className='flex items-center gap-5'>
                    <p className='text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                      </svg>
                    </p>
                    <div>
                        <p className='text-primario'>27AG02024 - 12.00</p>
                        <p className='text-white'>Envío a José Luis</p>
                    </div>
                </div>
                <div id='lado-der' className='flex flex-col items-center gap-1.5'>
                    <p className='text-white'>- 15.000 ARS</p>
                    <div className='bg-verde w-[140px] rounded-2xl'>
                        <p className='text-dark text-xs text-center'>Envío realizado</p>
                    </div>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default Home