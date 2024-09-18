import  notif  from '../assets/Notificaciones.png'
import { Ask } from './icons/ask';
import { useNavigate } from "react-router-dom";
import { FlechaTriangulitoBack } from './icons/flechaTriangulitoBack';





export const BannerPerfilAyuda = () => {
    
    const navigate = useNavigate()   

  return (
    <div id='div-total-banner' className='md:hidden flex justify-between items-center w-full'>
        <section className='flex'>
            <button onClick={()=>navigate(-1)} className='flex text-white whitespace-nowrap font-semibold'>
                <p className='w-6 h-6 absolute left-2 flex items-center'>
                    <span className='left-7 absolute'>Transferir</span>
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
  )
}

