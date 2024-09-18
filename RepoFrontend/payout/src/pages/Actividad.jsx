import React,  { useState } from 'react';
import ActivityItem from '../components/atoms/ActivityItem.jsx';
import ActivityButton from '../components/atoms/ActivityButton.jsx';
import { format } from 'date-fns';

const activities = [
    
    {
        idTransaction: 1,
        sourceName: 'Jose Luis',
        targetName: 'Emma Garcia',
        amount: -100.0,
        createdAt: '2024-09-11T10:15:30',
        type: 'TRANSFER'
    },
    {
        idTransaction: 2,
        sourceName: 'Jose Luis',
        targetName: 'Amazon',
        amount: -50.0,
        createdAt: '2024-09-11T12:30:45',
        type: 'PAYMENT'
    },
    {
        idTransaction: 3,
        sourceName: 'Emma Garcia',
        targetName: 'Jose Luis',
        amount: 200.0,
        createdAt: '2024-09-10T09:45:00',
        type: 'DEPOSIT'
    }
];

// Función para agrupar actividades por fecha
const groupActivitiesByDate = (activities) => {
    return activities.reduce((acc, activity) => {
        const date = format(new Date(activity.createdAt), 'dd MMM yyyy');
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(activity);
        return acc;
    }, {});
};


const Actividad = () => {
    
    const groupedActivities = groupActivitiesByDate(activities);
    // Inicializamos el estado con el ID del primer botón (Inicio)
    const [selectedId, setSelectedId] = useState(0);
    
    // Función para manejar la selección de un botón
    const handleButtonClick = (id) => {
      setSelectedId(id);
    };
    
        const options = [
            {
                id: 1, 
                name: 'Pagoss'
            },
            {
                id: 2,
                name: 'Transferencias'
            },
            {
                id: 3,
                name: 'Ingresos de dinero'
            },
        ]
    
        return (
            <section className='px-4 md:px-10 w-full  '>
                
                <h2 className='font-semibold  py-4 text-left'>Mi Actividad</h2>
                <section className='flex gap-4 mb-6'>
    
                {options.map(({ id, name }) => (
                <ActivityButton 
                  key={id}  
                  text={name}
                  onClick={() => handleButtonClick(id)}
                  isSelected={selectedId === id} />
              ))}
    
                </section>
    
                {/* Recorrer y renderizar cada actividad */}
                
                {Object.keys(groupedActivities).map(date => (
                <div className='flex flex-col' key={date}>
                    <h3 className='self-start py-2'>{date}</h3>
                    {groupedActivities[date].map(({ idTransaction, sourceName, targetName, amount, createdAt, type }) => (
                        <ActivityItem
                            key={idTransaction}
                            name={sourceName}
                            activityType={type}
                            amount={`${amount > 0 ? '+' : ''}${amount} ARS`}
                            time={format(new Date(createdAt), 'HH:mm')}
                        />
                    ))}
                </div>
            ))}
               
            </section>
        );
    }
    
    export default Actividad;