import notifIcon from './assets/upload.svg';

/**
 * Array de notificaciones de actividades. Cada objeto representa una actividad reciente,
 * como una transferencia, con información sobre la fecha y hora, descripción de la actividad,
 * monto involucrado y tipo de actividad.
 */

export const activitiesNotif = [
    {
        id: 1,
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

const NotificationItem = ({ datetime, actNotification, amount, activityType }) => {
    return (
        <>
            <div id='lado-izq' className='flex items-center gap-5'>
                <p>
                    <img src={notifIcon} alt="Icono de notificación" />
                </p>
                <div className='text-start'>
                    <p className='text-primario'>{datetime}</p>
                    <p>{actNotification}</p>
                </div>
            </div>
            <div id='lado-der' className='flex flex-col items-center gap-1.5'>
                <p>{amount}</p>
                <div className='bg-verde w-[150px] h-[20px] rounded-2xl'>
                    <p className='text-dark text-xs text-center'>{activityType} realizada</p>
                </div>
            </div>
        </>
    )
}

export default NotificationItem;