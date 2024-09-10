import React from 'react';
import NotificationItem, { activitiesNotif } from '../components/atoms/NotificationItem.jsx';
import { Link } from 'react-router-dom';

const Actividad = () => {
    return (

        <section className='px-4 md:px-10 w-full'>

                <p className='font-semibold pt-10 flex items-start'>Actividad</p>
                
                    <p className='text-sm pt-2 pb-3 flex items-start'>Agosto</p>
                    
                

                {/* LINEA */}
                <section id='linea-completa' className='pt-3 display flex justify-between pb-3 border-b border-primario w-full'>
                    {activitiesNotif.map(({ id, element, datetime, actNotification, amount, activityType }) => (
                        <NotificationItem key={id}
                            element={element}
                            datetime={datetime}
                            actNotification={actNotification}
                            amount={amount}
                            activityType={activityType}
                        />
                    ))}
                </section>
                {/* LINEA */}

            
        </section>

    )
}

export default Actividad