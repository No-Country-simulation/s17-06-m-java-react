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
                <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                </p>
                <div className='text-start'>
                    <p className='text-primarioclaro'>{datetime}</p>
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