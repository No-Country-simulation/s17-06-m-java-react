import pagoExitoso from './assets/amico.svg'
import { useNavigate } from "react-router-dom"


const PagoExitoso = () => {
    const navigate = useNavigate();

    return (
        <section className='flex flex-col items-center justify-end h-full w-full gap-3 mt-[5vh] md:mt-0'>
            <h2 className='text-2xl md:text-[30px] md:px-none'>El pago se realizó con éxito!</h2>
            <img src={pagoExitoso} alt="Icono pago exitoso" className='w-[70vw] md:w-[30vw] h-[50vh]' />
            <div className='flex'>
                <button onClick={() => navigate('/home')}
                    type="submit"
                    className="w-[90vw] md:w-[40vw] py-3 mt-[6.5vh] md:mt-4 bg-primario md:bg-verde text-white rounded-2xl md:rounded-lg font-semibold hover:bg-green-600 transition duration-200">Volver a la home</button>
            </div>
        </section>
    )
}

export default PagoExitoso