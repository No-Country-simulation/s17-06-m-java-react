
import { useNavigate } from "react-router-dom";

import { FlechaTriangulitoBack } from '../icons/flechaTriangulitoBack';
import Ask from '../icons/Ask';

import  notif  from '../../assets/Notificaciones.png'
import  Flechagrande  from '../../assets/Flechagrande.svg'
import  Ayuda1  from '../../assets/Ayuda1.svg'
import  Ayuda2  from '../../assets/Ayuda2.svg'




export const AyudaPrincipal = () => {

    const navigate = useNavigate()


    return (
        <>
        {/* BANNER MOBILE*/}        
        <div id='div-total-banner' className='pt-4 md:hidden flex justify-between items-center w-full'>
            <section className='flex'>
                <button onClick={()=>navigate('/prevperfil')} className='flex text-white whitespace-nowrap font-semibold'>
                    <p className='w-6 h-6 absolute left-2 flex items-center'>
                        <span className='left-7 absolute'>Ayuda</span>
                        <FlechaTriangulitoBack/>
                    </p>
                </button>
                <div className='absolute right-4 flex gap-4'>
                    <img src={notif} className='w-[24px] h-[24px] items-center' alt="" />
                    <p className='text-white '>
                        <Ask/>
                    </p>
                </div>
            </section>
        </div>

        <section className='w-full flex flex-col items-center justify-center h-[90vh] md:h-full px-6 md:px-10'>        

            {/* CUERPO HOME */}
            <div id='cuerpo-vista-home' className='w-full'>                


                {/* TARJETA */}
                <button onClick={()=>navigate('/faq')} id='tarjeta-perfil' className='px-5 py-8 w-full bg-grisclaro text-primario flex items-center gap-4 mb-5'>                
                    <img src={Ayuda1} alt="" />
                    <div>
                        <p className='text-start text-lg font-semibold'>Preguntas Frecuentes</p>
                        <p className='text-start text-verde text-sm'>Resuelve tus dudas con nuestras respuestas rápidas a las preguntas más comunes</p>
                    </div>                    
                    <img src={Flechagrande} alt="" />
                </button>
                    
                

                {/* TARJETA */}
                <button onClick={()=>navigate('/contacto')} id='tarjeta-perfil' className='px-5 py-8 w-full bg-grisclaro text-primario flex items-center gap-4 mb-5'>
                    <img src={Ayuda2} alt="" />
                    <div>
                        <p className='text-start text-lg font-semibold'>Chatear con Payout</p>
                        <p className='text-start text-verde text-sm'>Obtén ayuda inmediata chateando en vivo con nuestro equipo de soporte</p>
                    </div>
                    <img src={Flechagrande} alt="" />
                </button>

            </div>            
        </section>
        </>
        
    );
}