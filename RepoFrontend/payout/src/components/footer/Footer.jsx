
import  icon  from '../../assets/icon.png'
import  payout  from '../../assets/PAYOUT.png'






export const Footer = () => { 

  return (
    <div className="md:py-4 bg-secundario flex px-32 gap-10 justify-between items-center fixed bottom-0 w-full">
        <div className='flex gap-4 items-end'>
            <img src={icon} className='w-[33px] h-[27px]' alt="" />
            <img src={payout} className='w-[136px] h-[18px]' alt="" />
        </div>

        <div className='flex flex-col gap-1.5'>
            <p className='text-xs'>Legal</p>
            <p className='text-xs'>Reclamaciones</p>
        </div>

        <div className='flex flex-col gap-1.5'>
            <p className='text-xs'>Términos</p>
            <p className='text-xs'>Política de cookies</p>
        </div>

        <div className='flex flex-col gap-1.5'>
            <p className='text-xs'>Política de privacidad</p>
            <p className='text-xs'>Mapa de países</p>
        </div>
    </div>
  );
};