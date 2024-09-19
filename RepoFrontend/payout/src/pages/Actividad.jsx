import React, { useState } from 'react';
import ActivityItem from '../components/atoms/ActivityItem.jsx';
import ActivityButton from '../components/atoms/ActivityButton.jsx';
import { format } from 'date-fns';
import { activities } from '../api/activityApi.js';
import { FaSearch } from 'react-icons/fa'; // Icono de lupa

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
    const [filteredActivities, setFilteredActivities] = useState(activities);
    const [selectedId, setSelectedId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Opciones de filtro con sus tipos correspondientes
    const options = [
        {
            id: 1,
            name: 'Pagos',
            filterType: 'PAYMENT',
        },
        {
            id: 2,
            name: 'Transferencias',
            filterType: 'TRANSFER',
        },
        {
            id: 3,
            name: 'Ingresos de dinero',
            filterType: 'DEPOSIT',
        },
    ];

    // Función para manejar la selección de un botón y filtrar/desactivar el filtro
    const handleButtonClick = (filterType, id) => {
        if (selectedId === id) {
            setFilteredActivities(activities);
            setSelectedId(null);
        } else {
            const filtered = activities.filter(activity => activity.type === filterType);
            setFilteredActivities(filtered);
            setSelectedId(id);
        }
    };

    // Función para manejar la búsqueda por palabras clave (tipo o número de transacción)
    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = activities.filter(({ idTransaction, type }) => 
            type.toLowerCase().includes(query) || idTransaction.toString().includes(query)
        );
        setFilteredActivities(filtered);
    };

    // Agrupamos las actividades filtradas por fecha
    const groupedActivities = groupActivitiesByDate(filteredActivities);

    return (
        <section className='px-4 md:px-10 w-full'>
            <h3 className='font-semibold py-4 text-left'>Mi Actividad</h3>
            
            {/* Botones para filtrar actividades y el buscador */}
            <section className='flex flex-col-reverse md:flex-row justify-between md:items-center  mb-6 gap-4'>
                <div className='flex justify-between gap-2 md:gap-4'>
                    {options.map(({ id, name, filterType }) => (
                        <ActivityButton
                            key={id}
                            text={name}
                            onClick={() => handleButtonClick(filterType, id)}
                            isSelected={selectedId === id}
                        />
                    ))}
                </div>
                
                {/* Buscador */}
                <div className='flex items-center border bg-white rounded-3xl w-full md:w-[300px]'>
                
                    <FaSearch className=' ml-4 text-primario' />
                    <input
                        type='text'
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder='Buscar por tipo o número'
                        className='pl-5 pr-5 py-2 text-black rounded-3xl w-80 focus:outline-none '
                    />
              </div>
            </section>

            {/* Renderizado de actividades agrupadas por fecha */}
            {Object.keys(groupedActivities).map(date => (
                <div className='flex flex-col' key={date}>
                    <h3 className='self-start py-2'>{date}</h3>
                    {groupedActivities[date].map(({ idTransaction, sourceName, amount, createdAt, type }) => (
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
};

export default Actividad;
