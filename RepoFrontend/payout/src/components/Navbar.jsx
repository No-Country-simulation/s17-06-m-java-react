import  payout  from '../assets/PAYOUT.png'
import icon from '../assets/icon.png'
import line from '../assets/line.png'



const Navbar = () => {
  return (
    <div className="w-full h-[10vh] flex-col justify-center ">
      <div className='w-full h-[9.5vh] flex  items-center justify-between'>
      <div className='flex items-center  gap-6 '>
        <div className='flex items-center'>
      <img className="h-[30px] ml-10 hidden md:block" src={icon} alt=""/>
      <img className="h-[18px] ml-2 hidden md:block" src={payout} alt=""/>
      </div>
        <a >Personal</a>
        <a>Empresas</a>
      </div>
      <div className='flex gap-6 mx-8 '> 
        <a>Funciones</a>
        <a>Precios</a>
        <a>Ayuda</a>
        <a>Iniciar sesion</a>
        <a>Crear cuenta</a>
      </div>
      </div>
    
      <img className="w-full " src={line} alt=""/>
      

    </div>
  )
}

export default Navbar