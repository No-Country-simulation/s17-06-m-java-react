
import  icon  from '../../assets/icon.png'
import  payout  from '../../assets/PAYOUT.png'






export const Footer = () => { 

  return (
    <div className="py-3 px-2.5 md:px-16 lg:px-32 md:py-4 bg-secundario flex flex-col md:flex-row gap-4 md:gap-0  justify-between items-center w-full">
        <div className='flex gap-4 items-end'>
            <img src={icon} className='hidden md:block visible w-[33px] h-[27px]' alt="" />
            <img src={payout} className='w-[80px] md:w-[136px] md:h-[18px]' alt="" />
        </div>

        <div className='flex flex-row gap-6 md:gap-10 lg:gap-24'>
            <div className='flex flex-col gap-1.5'>
                <p className='text-xxs md:text-xs'>Legal</p>
                <p className='text-xxs md:text-xs'>Reclamos</p>
            </div>

            <div className='flex flex-col gap-1.5'>
                <p className='text-xxs md:text-xs'>Términos</p>
                <p className='text-xxs md:text-xs'>Política de cookies</p>
            </div>

            <div className='flex flex-col gap-1.5'>
                <p className='text-xxs md:text-xs'>Política de privacidad</p>
                <p className='text-xxs md:text-xs'>Mapa de países</p>
            </div>
        </div>
    </div>
  );
};