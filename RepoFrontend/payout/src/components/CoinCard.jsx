import argIcon  from '../assets/banderaArg.svg';
import usaIcon from './atoms/assets/usa.png';
import euroIcon from './atoms/assets/euro.png';

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
        cbu: 'CBU 0123456'
    },
    {
        id: 2,
        image: usaIcon,
        coin:  'Dólares estadounidenses',
        saldo: '$800,00 USD',
        cbu: 'CBU XXXX'
    },
    {
        id: 3,
        image: euroIcon,
        coin:  'Euros',
        saldo: '$80,00 EUR',
        cbu: 'CBU XXXX'
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

const CoinCard = ({ image, coin, saldo, cbu }) => {
    return (
            <div className="w-[320px] h-[127px] bg-primario rounded-2xl relative py-4 px-4 min-w-[320px] flex-shrink-0">
                {/* Banda superior blanca */}
                <div className="absolute top-0 left-0 w-full h-[50px] dark:bg-white bg-grisclaro rounded-t-lg px-4 flex items-center gap-4">
                    <img src={image} className='w-[40px] h-[40px]' alt={coin} />
                    <p className='text-primario font-semibold'>{coin}</p>
                </div>
                {/* Contenido del div principal */}
                <div className="pt-12 flex flex-col items-start">
                    <p className="text-white text-lg">{saldo}</p>
                    <p className="text-white text-sm">{cbu}</p>
                </div>
            </div>
    )
}

export default CoinCard;