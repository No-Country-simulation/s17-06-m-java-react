import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Stepbar from '../components/transferencias/Stepbar';
import { useState } from 'react';
import { TransferenciaContext } from '../contexts/TransferenciaContext';

const Transferencia = () => {
    /* Gestiona el stepper */
    const [currentStep, setCurrentStep] = useState(0); // Estado para el stepper
    const navigate = useNavigate();

    /* Maneja el boton de volver atras */
    const handleVolverAtras = () => {
        if (currentStep > 0) {
            const previousStep = currentStep - 1;
            setCurrentStep(previousStep); // Actualiza el paso actual
            navigate(`/transferencia/${steps[previousStep].path}`,
                { state: { updateStepOnly: true } }); // Navega a la siguiente etapa con updateStepOnly
        } else {
            navigate('/home'); // Vuelve a la página principal si estás en la primera etapa
        }
    };

    /* Maneja el boton de continuar */
    const handleContinuar = () => {
        if (currentStep < steps.length - 1) {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            navigate(`/transferencia/${steps[nextStep].path}`); // Navega a la siguiente etapa
        }
    };

    const steps = [
        { id: 0, label: 'Destinatario', path: 'destinatario' },
        { id: 1, label: 'Datos Bancarios', path: 'datos-bancarios' },
        { id: 2, label: 'Monto', path: 'monto' },
        { id: 3, label: 'Revisión', path: 'revision' },
        { id: 4, label: 'Pago', path: 'pago-exitoso' },
    ];

    return (
        <TransferenciaContext.Provider value={{ currentStep, setCurrentStep }}>
            <section className='flex flex-col bg-secundario h-full dark:bg-dark text-black dark:text-white'>
                <header className='flex items-center px-2 bg-navbar-transfer w-full text-primario h-[15vh]'>
                    <ul className='flex h-[10vh] items-center w-full justify-between px-[5rem]'>
                        <button onClick={handleVolverAtras} className='text-primario whitespace-nowrap font-semibold'>Volver atrás</button>
                        <Stepbar currentStep={currentStep} setCurrentStep={setCurrentStep} handleContinuar={handleContinuar} />
                        <NavLink to={'/home'} className='text-primario'>Salir</NavLink>
                    </ul>
                </header>
                <Outlet />
            </section>
        </TransferenciaContext.Provider>
    );
};

export default Transferencia;