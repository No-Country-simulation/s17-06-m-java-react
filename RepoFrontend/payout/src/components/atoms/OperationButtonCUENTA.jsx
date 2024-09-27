
import {Link} from 'react-router-dom';

/**
 * Array de operaciones disponibles. Cada objeto contiene un ícono SVG y un texto descriptivo
 * que representa una acción, como ingresar, transferir o convertir dinero.
 */

export const operationsPesos = [
    {
        id: 1,        
        element: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
        </svg>, 
        texto: 'Ingresar',
        path: ''
    },
    {
        id: 2,
        element: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" style={{ transform: 'rotate(270deg)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>,
        texto: 'Transferir',
        path: '/transferencia/destinatario'
    },
    {
        id: 3,
        element: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>,
        texto: 'Convertir',
        path: ''
    },    
]

export const operationsDolares = [
    {       
        id: 1,
        element: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" style={{ transform: 'rotate(270deg)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>,
        texto: 'Transferir',
        path: '/transferencia/destinatario'
    },
    {
        id: 2,
        element: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>,
        texto: 'Convertir',
        path: ''
    },   
]

export const operationsEuros = [
    {       
        id: 1,
        element: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" style={{ transform: 'rotate(270deg)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>,
        texto: 'Transferir',
        path: '/transferencia/destinatario'
    },
    {
        id: 2,
        element: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>,
        texto: 'Convertir',
        path: ''
    },   
]

/**
 * Componente OperationButton
 * 
 * Renderiza un botón estilizado que muestra un ícono representando una operación financiera y un texto
 * descriptivo. Se ajusta según el tamaño de pantalla para mostrar más o menos detalles.
 * 
 * @component
 * @param {Object} props - Propiedades que recibe el componente
 * @param {string} props.texto - Texto descriptivo de la operación (e.g., "Ingresar", "Transferir")
 * @param {JSX.Element} props.element - Ícono o SVG que representa gráficamente la operación
 * @returns {JSX.Element} Un botón estilizado que muestra un ícono y texto relacionados a una operación.
 * 
 * @example
 * // Ejemplo de uso
 * <OperationButton 
 *   texto="Ingresar" 
 *   element={<svg xmlns="http://www.w3.org/2000/svg" ... />} 
 * />
 */

const OperationButtonCUENTA = ({texto, element, path }) => {
    return (
        <Link to={path} className='flex flex-col justify-center items-center pointer-events'>
            <div className="size-[32px] bg-white dark:bg-grisclaro rounded-full py-5 px-5 flex flex-col justify-center items-center border-4 border-primario gap-1 ">
                <p className='text-primario font-semibold'>
                {element}
                </p>                
            </div>
            <p className='text-primario text-xs'>{texto}</p>
        </Link>


    )
}

export default OperationButtonCUENTA