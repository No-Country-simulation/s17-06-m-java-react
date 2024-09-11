import React,  { useState } from 'react';
import ActivityItem, { activities } from '../components/atoms/ActivityItem.jsx';
import ActivityButton from '../components/atoms/ActivityButton.jsx';


const Actividad = () => {

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
            <section className='px-4 md:px-10 w-full '>
                <h2 className='font-semibold  py-4 text-left'>Mi Actividad</h2>
                <section className='flex gap-4'>
    
                {options.map(({ id, name }) => (
                <ActivityButton 
                  key={id}  
                  text={name}
                  onClick={() => handleButtonClick(id)}
                  isSelected={selectedId === id} />
              ))}
    
                </section>
    
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