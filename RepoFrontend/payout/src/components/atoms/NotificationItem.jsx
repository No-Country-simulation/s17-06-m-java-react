import notifIcon from './assets/upload.svg';

/**
 * Array de notificaciones de actividades. Cada objeto representa una actividad reciente,
 * como una transferencia, con información sobre la fecha y hora, descripción de la actividad,
 * monto involucrado y tipo de actividad.
 */

export const activitiesNotif = [
    {
        id: 1,
        element: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
        </svg>,
        datetime: '27AGO2024 - 12.00',
        actNotification: 'Envío a Jose Luis',
        amount: '-15.000 ARS',
        activityType: 'Transferencia'
    }
]

/**
 * Componente NotificationItem
 * 
 * Renderiza un ítem de notificación que muestra información sobre una actividad reciente
 * realizada por el usuario, como una transferencia de dinero. Muestra la fecha y hora de la actividad,
 * una descripción, el monto, y el tipo de actividad.
 * 
 * @component
 * @param {Object} props - Propiedades que recibe el componente
 * @param {string} props.datetime - Fecha y hora en que ocurrió la actividad (e.g., '27AGO2024 - 12.00')
 * @param {string} props.actNotification - Descripción de la actividad (e.g., 'Envío a Jose Luis')
 * @param {string} props.amount - Monto de la actividad, incluyendo el símbolo de la moneda (e.g., '-15.000 ARS')
 * @param {string} props.activityType - Tipo de actividad realizada (e.g., 'Transferencia')
 * @returns {JSX.Element} Un ítem de notificación que muestra la información de la actividad realizada.
 * 
 * @example
 * // Ejemplo de uso
 * <NotificationItem 
 *   datetime="27AGO2024 - 12.00" 
 *   actNotification="Envío a Jose Luis" 
 *   amount="-15.000 ARS" 
 *   activityType="Transferencia" 
 * />
 */

const NotificationItem = ({ element, datetime, actNotification, amount, activityType }) => {
    return (
        <>
            <div id='lado-izq' className='flex items-center gap-5'>
                <p> {element}                    
                </p>
                <div className='text-start'>
                    <p className='text-primarioclaro'>{datetime}</p>
                    <p>{actNotification}</p>
                </div>
            </div>
            <div id='lado-der' className='flex flex-col items-center gap-1.5'>
                <p>{amount}</p>
                <div className='bg-verde w-[150px] h-[20px] rounded-2xl flex items-center justify-center'>
                    <p className='text-dark text-xs text-center'>{activityType} realizada</p>
                </div>
            </div>
        </>
    )
}

export default NotificationItem;