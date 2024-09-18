import argIcon  from '../assets/banderaArg.svg';
import usaIcon from './atoms/assets/usa.png';
import euroIcon from './atoms/assets/euro.png';
import { useEffect, useState } from 'react';





/* let montoPesos
let montoDolares
let montoEuros */


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
        /* saldo: `$ ${montoPesos} ARS` , */
        /* cbu: 'CBU 0123456' */
    },
    {
        id: 2,
        image: usaIcon,
        coin:  'Dólares estadounidenses',
        /* saldo: `$ ${montoDolares} USD`, */
        /* cbu: 'CBU XXXX' */
    },
    {
        id: 3,
        image: euroIcon,
        coin:  'Euros',
        /* saldo: `€ ${montoEuros} EUR`, */
        /* cbu: 'CBU XXXX' */
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


const urlBankInfo = 'https://payout.redromsolutions.com/bank_account/bytoken'


const CoinCard = ({ image, coin, /* saldo, cbu */ }) => {


    const [montoPesos, setMontoPesos] = useState(''); 
    const [montoDolares, setMontoDolares] = useState('');
    const [montoEuros, setMontoEuros] = useState('');   

    const [CVUPesos, setCVUPesos] = useState(''); 
    const [CVUDolares, setCVUDolares] = useState('');
    const [CVUEuros, setCVUEuros] = useState('');   
    
    

    
    
    
      /* FETCH PARA TRAER LA INFO DE BASE DE DATOS Y LLENAR LOS CAMPOS */
    useEffect(() => {
        fetch(urlBankInfo, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(data => data.json())
            .then(data => {                
                setMontoPesos(data[0].balance);
                setMontoDolares(data[1].balance);
                setMontoEuros(data[2].balance)
                setCVUPesos(data[0].cvu);
                setCVUDolares(data[1].cvu);
                setCVUEuros(data[2].cvu)
                console.log(data)
            });
    }, []);


    let saldo;
    if (coin === 'Peso Argentino') {
        saldo = `$ ${montoPesos} ARS`;
    } else if (coin === 'Dólares estadounidenses') {
        saldo = `$ ${montoDolares} USD`;
    } else if (coin === 'Euros') {
        saldo = `€ ${montoEuros} EUR`;
    }

    let cvu;
    if (coin === 'Peso Argentino') {
        cvu = `CVU ${CVUPesos}`;
    } else if (coin === 'Dólares estadounidenses') {
        cvu = `CVU ${CVUDolares}`;
    } else if (coin === 'Euros') {
        cvu = `CVU ${CVUEuros}`;
    }



    return (
            <div className="lg:w-[250px] xl:w-[320px] h-[127px] bg-primario rounded-2xl relative py-4 px-4  flex-shrink-0">
                {/* Banda superior blanca */}
                <div className="absolute top-0 left-0 w-full h-[50px] dark:bg-white bg-grisclaro rounded-t-lg px-4 flex items-center gap-4">
                    <img src={image} className='w-[40px] h-[40px]' alt={coin} />
                    <p className= 'text-start text-primario font-semibold'>{coin}</p>
                </div>
                {/* Contenido del div principal */}
                <div className="pt-12 flex flex-col items-start">
                    <p className="text-white text-sm">{saldo}</p>
                    <p className="text-white text-sm">{cvu}</p>
                </div>
            </div>
    )
}

export default CoinCard;