import React from 'react';
import ActivityItem, {activities} from '../components/atoms/Activityitem.jsx';


const Actividad = () => {
    return (
        <section className='px-4 md:px-10 w-full '>
            <h2 className='font-semibold  py-4 text-right'>Mi Actividad</h2>

            {/* Recorrer y renderizar cada actividad */}
            
            {activities.map(({ id, datetime, actNotification, amount, activityType }) => (
                <ActivityItem
                    key={id}
                    datetime={datetime}
                    actNotification={actNotification}
                    amount={amount}
                    activityType={activityType}
                />
            ))}
           
        </section>
    );
}

export default Actividad;