import pagoExitoso from './assets/amico.svg'
import { useNavigate } from "react-router-dom"


const PagoExitoso = () => {
    const navigate = useNavigate();
    
    return (
        <section className='flex flex-col items-center justify-start h-full w-full gap-3 mt-4'>
            <h2>El pago se realizó con éxito</h2>
            <img src={pagoExitoso} alt="Icono pago exitoso" />
            <button onClick={() => navigate('/home')}
                type="submit"
                className="w-[40vw] py-3 mt-2 bg-verde text-white rounded-lg font-semibold hover:bg-green-600 transition duration-200">Volver a la home</button>
        </section>
    )
}

export default PagoExitoso