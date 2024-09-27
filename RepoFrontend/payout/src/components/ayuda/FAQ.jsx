import { useNavigate } from "react-router-dom";

import { FlechaTriangulitoBack } from '../icons/flechaTriangulitoBack';
import Ask from '../icons/Ask';

import  notif  from '../../assets/Notificaciones.png'




export const FAQ = () => {

    const navigate = useNavigate()


    return (
        <div className="md:pt-20">
        {/* BANNER MOBILE*/}        
        <div id='div-total-banner' className='pt-4 md:hidden flex justify-between items-center w-full'>
            <section className='flex'>
                <button onClick={()=>navigate('/help')} className='flex text-white whitespace-nowrap font-semibold'>
                    <p className='w-6 h-6 absolute left-2 flex items-center'>
                        <span className='left-7 absolute'>Preguntas frecuentes</span>
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
                <div id='tarjeta-perfil' className='px-5 py-6 w-full bg-grisclaro text-primario flex flex-col gap-4 mb-5'>  
                    <div className="border-b border-primario flex flex-col gap-3 pb-3">
                        <p className='text-start font-bold'>Información general de Payout</p>
                        <p className='text-start text-verde text-sm'>¿Qué es Payout? ¿Qué podes hacer en la app? Una introducción.</p>                        
                    </div> 
                    <div className="border-b border-primario flex flex-col gap-3 pb-3">
                        <p className='text-start font-bold'>Creación de tu cuenta personal</p>
                        <p className='text-start text-verde text-sm'>Una guía para  registrarte, verificar tu identidad y configurar tu cuenta.</p>                        
                    </div>  
                    <div className="border-b border-primario flex flex-col gap-3 pb-3">
                        <p className='text-start font-bold'>Depositar Dinero</p>
                        <p className='text-start text-verde text-sm'>Como ingresar dólares, euros, pesos, reales y mucho mas.</p>                        
                    </div>    
                    <div className="border-b border-primario flex flex-col gap-3 pb-3">
                        <p className='text-start font-bold'>Intercambios</p>
                        <p className='text-start text-verde text-sm'>Todo lo que necesitas saber para convertir tu saldo en distintas monedas de manera ágil y segura.</p>                        
                    </div>
                    <div className="border-b border-primario flex flex-col gap-3 pb-3">
                        <p className='text-start font-bold'>Enviar dinero</p>
                        <p className='text-start text-verde text-sm'>Como transferir fondos a otras cuentas, tanto locales como internacionales.</p>                        
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                        <p className='text-start font-bold'>Payout Mastercard ©️</p>
                        <p className='text-start text-verde text-sm'>Una tarjeta prepaga con validez internacional para usar tus pesos o monedas donde quieras.</p>                        
                    </div>            
                </div>                 

            </div>            
        </section>
        </div>
        
    );
}