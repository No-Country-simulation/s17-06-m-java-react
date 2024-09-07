import depositarIcon from './assets/upload.svg';
import transferIcon from './assets/transfer.svg';
import convertIcon from './assets/convertIcon.svg';
import plus from './assets/plus.svg';

export const operations = [
    {
        id: 1,
        image: depositarIcon,
        texto: 'Ingresar'
    },
    {
        id: 2,
        image: transferIcon,
        texto: 'Transferir'
    },
    {
        id: 3,
        image: convertIcon,
        texto: 'Convertir'
    },
    {
        id: 4,
        image: plus,
    },
]

const OperationButton = ({ image, texto }) => {
    return (
        <div
            className="size-[85px] md:w-[210px] md:h-[85px] md:min-w-[210px] bg-white rounded-full md:rounded-3xl py-4 px-8 flex flex-col justify-center items-center border-4 border-primario gap-2">
            <p className='text-primario font-semibold'>
               <img src={image} alt={texto} />
            </p>
            <p className='md:text-primario md:font-semibold'>{texto}</p>
        </div>
    )
}

export default OperationButton