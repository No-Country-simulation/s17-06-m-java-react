import React from 'react';





// Función para asignar íconos según el tipo de actividad
const getIconByActivityType = (activityType) => {
    switch (activityType) {
        case 'TRANSFERENCIA':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
            );
        case 'DEPOSIT':
            return (
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 3.5H19C19.5304 3.5 20.0391 3.71071 20.4142 4.08579C20.7893 4.46086 21 4.96957 21 5.5V19.5C21 20.0304 20.7893 20.5391 20.4142 20.9142C20.0391 21.2893 19.5304 21.5 19 21.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 17.5L15 12.5L10 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 12.5H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'PAYMENT':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m18 0v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8m18 0H3" />
                </svg>
            );
        default:
            return null; 
    }
}

const formatActivityType = (activityType) => {
    switch (activityType) {
        case 'TRANSFERENCIA':
            return (
                'Transferencia exitosa'
            );
        case 'DEPOSIT':
            return (
                'Depósito realizado'
            );
        case 'PAYMENT':
            return (
                'Pago realizado'
            );
        default:
            return null; 
    }
}



const ActivityItem = ({ name, activityType, amount, time }) => {
    const icon = getIconByActivityType(activityType);
    const activity = formatActivityType(activityType);

    return (
        <div className='flex justify-between py-3 border-b border-primarioclaro'>
            <div className='flex items-center gap-5'>
                <p>{icon}</p>
                <div className='text-start'>
                    <p className='font-semibold'>{name}</p>
                    <p className='text-primarioclaro font-medium'>{activity}</p>
                </div>
            </div>
            <div className='flex flex-col items-end gap-1.5'>
                <p className='font-semibold'>{amount}</p>
                <p className='text-xs text-verde'>{time}</p>
            </div>
        </div>
    );
}

export default ActivityItem;