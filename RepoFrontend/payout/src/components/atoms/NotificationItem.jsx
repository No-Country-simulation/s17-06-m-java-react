import notifIcon from './assets/upload.svg';

export const activitiesNotif = [
    {
        id: 1,
        datetime: '27AGO2024 - 12.00',
        actNotification: 'Envío a Jose Luis',
        amount: '-15.000 ARS',
        activityType: 'Transferencia'
    }
]


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