import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Stepbar from '../components/transferencias/Stepbar';
import { useState } from 'react';
import { TransferenciaContext } from '../contexts/TransferenciaContext';
import notif from '../assets/Notificaciones.png'

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
        { id: 1, label: 'Cuenta', path: 'datos-bancarios' },
        { id: 2, label: 'Monto', path: 'monto' },
        { id: 3, label: 'Revisión', path: 'revision' },
        { id: 4, label: 'Pago', path: 'pago-exitoso' },
    ];

    return (
        <TransferenciaContext.Provider value={{ currentStep, setCurrentStep }}>
            <section className='flex flex-col bg-secundario dark:bg-dark dark:text-white h-full'>
                <header className='flex items-center justify-between bg-dark w-full text-white h-[6vh] md:h-[15vh] md:bg-navbar-transfer md:text-primario'>
                    <section className='flex md:h-[10vh] items-center w-full justify-between px-[2rem]'>
                        <button onClick={handleVolverAtras} className='text-primario whitespace-nowrap font-semibold hidden md:flex handle-step'>Volver atrás</button>
                        <div className='w-full mt-[10rem] md:mt-5 md:w-[50vw] flex'>
                            <Stepbar currentStep={currentStep} setCurrentStep={setCurrentStep} handleContinuar={handleContinuar} />
                        </div>
                        <NavLink to={'/home'} className='text-primario hidden md:block'>Salir</NavLink>
                        {/* BANNER MOBILE */}
                        <div id='div-total-banner' className='md:hidden flex justify-between items-center w-full'>
                            <section className='flex'>
                                <button onClick={handleVolverAtras} className='flex text-white whitespace-nowrap font-semibold handle-step'>
                                    <p className='w-6 h-6 absolute left-2 flex items-center'>
                                        <span className='left-7 absolute'>Transferir</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </p>
                                </button>
                                <div className='absolute right-4 flex gap-4'>
                                    <img src={notif} className='w-[24px] h-[24px] items-center' alt="" />
                                    <p className='text-white '>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                        </svg>
                                    </p>
                                </div>
                            </section>
                        </div>
                    </section>
                </header>
                <div className='mt-[5vh]'>
                <Outlet />
                </div>
            </section>
        </TransferenciaContext.Provider>
    );
};

export default Transferencia;