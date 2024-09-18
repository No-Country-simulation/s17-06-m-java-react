import { useNavigate } from "react-router-dom";
import argIcon  from '../assets/banderaArg.svg'
import usaIcon from './atoms/assets/usa.png'
import euroIcon from './atoms/assets/euro.png';

import {Link} from 'react-router-dom';

import { FlechaTriangulito } from './icons/flechaTriangulito';

import OperationButtonCUENTA, { operationsPesos, operationsDolares, operationsEuros } from './atoms/OperationButtonCUENTA.jsx';




/**
 * Array de información de saldos. Cada objeto en el array representa el saldo de una cuenta
 * en una moneda específica, incluyendo la imagen de la bandera, el tipo de moneda, el saldo
 * y el CBU asociado.
 */



export const infoSaldos = [
    {
        id: 1,
        image: argIcon,
        coin:  'Peso Argentino',
        saldo: '$800.000,00 ARS',
        cbu: 'CBU 0123456',
        arrayBotones: operationsPesos
    },
    {
        id: 2,
        image: usaIcon,
        coin:  'Dólares estadounidenses',
        saldo: '$800,00 USD',
        cbu: 'CBU XXXX',
        arrayBotones: operationsDolares
    },
    {
        id: 3,
        image: euroIcon,
        coin:  'Euros',
        saldo: '$80,00 EUR',
        cbu: 'CBU XXXX',
        arrayBotones: operationsEuros
    }
]

/**
 * Componente CoinCard
 * 
 * Renderiza una tarjeta que muestra la información financiera de una cuenta, incluyendo el saldo
 * y el CBU. Cada tarjeta tiene una sección superior con el ícono de la moneda y el nombre de la divisa.
 * 
 * @component
 * @param {Object} props - Propiedades que recibe el componente
 * @param {string} props.image - Referencia a la URL de la imagen de la moneda a mostrar (bandera o símbolo de la divisa)
 * @param {string} props.coin - Nombre de la moneda (e.g., "Peso Argentino", "Dólares estadounidenses")
 * @param {string} props.saldo - El saldo disponible en la cuenta, incluyendo el formato de la moneda
 * @param {string} props.cbu - El CBU asociado a la cuenta bancaria
 * @returns {JSX.Element} Una tarjeta estilizada que muestra el saldo, moneda y CBU de una cuenta.
 * 
 * @example
 * // Ejemplo de uso
 * <CoinCard 
 *   image={argIcon} 
 *   coin="Peso Argentino" 
 *   saldo="$800.000,00 ARS" 
 *   cbu="CBU 0123456" 
 * />
 */



const CoinCardCUENTA = ({ image, coin, saldo, cbu, arrayBotones }) => {

    const navigate = useNavigate()

    return (
            <div className="w-[380px] h-[230px] bg-primario rounded-2xl relative py-4 px-4 min-w-[320px] flex-shrink-0 text-white z-20">                
                <div className="flex items-center gap-4">
                    <img src={image} className='w-[40px] h-[40px]' alt={coin} />
                    <p className= 'font-semibold'>{coin}</p>
                </div>
                {/* Contenido del div principal */}
                <div className="pt-4 flex flex-col gap-2">
                    <div className='flex justify-between'>
                        <p className="text-white text-lg font-semibold">{saldo}</p>
                        <button onClick={()=>navigate('/cuentapesos')}>
                            <FlechaTriangulito/>
                        </button>
                    </div>                    
                    <p className="text-start text-white text-sm">{cbu}</p>
                </div>

                {/* Banda inferior blanca */}
                <div className="absolute bottom-0 left-0 w-full h-[85px] dark:bg-white bg-grisclaro rounded-b-2xl px-4 flex items-center justify-start gap-4">
                    <div id='para-poner-en-fila-botones' className='py-2 flex justify-start gap-10'>
                            {/* <Link to='' className='flex flex-col justify-center items-center pointer-events'>
                            <div
                                className="size-[32px] bg-white rounded-full py-5 px-5 flex flex-col justify-center items-center border-4 border-primario gap-1 ">
                                <p className='text-primario font-semibold'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg>
                                </p>                                
                            </div>
                            <p className='text-primario text-xs'>Ingresar</p>
                        </Link>
                        <Link to='' className='flex flex-col justify-center items-center pointer-events'>
                            <div
                                className="size-[32px] bg-white rounded-full py-5 px-5 flex flex-col justify-center items-center border-4 border-primario gap-1 ">
                                <p className='text-primario font-semibold'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" style={{ transform: 'rotate(270deg)' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                </p>                                
                            </div>
                            <p className='text-primario text-xs'>Transferir</p>
                        </Link> */}

                        {arrayBotones.map(({ id, texto, element, path }) => (
                        <OperationButtonCUENTA
                            key={id}
                            texto= {texto}
                            element= {element}
                            path={path}/>
                        ))}
                       
                    </div>                      
                    
                </div>
            </div>
    )
}

export default CoinCardCUENTA;