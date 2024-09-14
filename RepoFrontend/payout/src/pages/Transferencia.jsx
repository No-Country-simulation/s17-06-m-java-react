import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Stepper from '../components/transferencias/Stepper';
import { useState } from 'react';
import { TransferenciaContext } from '../contexts/TransferenciaContext';

const Transferencia = () => {
    /* Gestiona el stepper */
    const [currentStep, setCurrentStep] = useState(1); // Estado para el stepper
    const [transferenciaData, setTransferenciaData] = useState({});
    const navigate = useNavigate();

    /* Maneja el boton de volver atras */
    const handleVolverAtras = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            navigate(`/transferencia/${steps[currentStep - 2].path}`); // Navega a la etapa anterior
        } else {
            navigate('/home'); // Vuelve a la página principal si estás en la primera etapa
        }
    };

    const steps = [
        { id: 1, label: 'Destinatario', path: 'destinatario' },
        { id: 2, label: 'Datos Bancarios', path: 'datos-bancarios' },
        { id: 3, label: 'Monto', path: 'monto' },
        { id: 4, label: 'Revisión', path: 'revision' },
    ];

    return (
        <TransferenciaContext.Provider value={{ currentStep, setCurrentStep,transferenciaData,setTransferenciaData}}>
        <section className='flex flex-col bg-secundario h-full dark:bg-dark text-black dark:text-white'>
            <header className='flex items-center px-2 bg-navbar-transfer w-full text-primario h-[15vh]'>
                <ul className='flex h-[10vh] items-center w-full justify-between px-[5rem]'>
                    <button onClick={handleVolverAtras} className='text-primario whitespace-nowrap'>Volver atrás</button>
                    <Stepper currentStep={currentStep} />
                    <NavLink to={'/home'} className='text-primario'>Salir</NavLink>
                </ul>
            </header>            
                <Outlet />
        </section>
        </TransferenciaContext.Provider>
    );
};

export default Transferencia;