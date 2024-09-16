import { Formik, Form, Field } from 'formik';
import Select from 'react-select';
import argIcon from './assets/banderaArg.svg';
import usaIcon from './assets/usa.png';
import euroIcon from './assets/euro.png'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TransferenciaContext } from '../../contexts/TransferenciaContext';

// Opciones de divisas con íconos
const currencyOptions = [
    { value: 'ARS', label: 'ARS', icon: argIcon },
    { value: 'USD', label: 'USD', icon: usaIcon },
    { value: 'EUR', label: 'EUR', icon: euroIcon },
    // Agrega más divisas aquí
];

// Componente Select con íconos
const CustomSelect = ({ options, field, form, ...props }) => (
    <Select
        options={options}
        formatOptionLabel={(option) => (
            <div className="flex items-center">
                <img className="mr-2 w-5 h-5" src={option.icon} />
                {option.label}
            </div>
        )}
        onChange={(option) => form.setFieldValue(field.name, option.value)}
        {...props}
    />
);


const Revision = () => {
    const { currentStep, setCurrentStep } = useContext(TransferenciaContext);
    const handleContinuar = () => {
        setCurrentStep(3);
        navigate('/transferencia/pago-exitoso');

        console.loh(currentStep)
    };

    const navigate = useNavigate();
    return (
        
        /* Donde pongo el comando para ocultar la barra de scroll */


        <section className='h-full'>
            <Formik
            initialValues={{
                nombre: '',
                amountSend: '',
                currencySend: 'ARS',
                amountReceive: '',
                currencyReceive: 'USD',
                cuentaBancaria: '',
                alias: '',
            }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ setFieldValue }) => (
                <Form className="flex flex-col items-center justify-center text-start p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center">¿Corresponden estos datos a la cuenta?</h2>

                    {/* Campo para el nombre de usuario */}
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block font-semibold mb-2">
                            Nombre
                        </label>
                        <div className="flex items-center bg-white rounded-lg p-2 w-[40vw]">
                            <Field
                                name="nombre"
                                type="text"
                                placeholder="@nombre"
                                className="w-full px-2 py-2 text-black focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Campo para el monto a enviar */}
                    <div className="mb-4">
                        <label htmlFor="amountSend" className="block font-semibold mb-2">
                            Envías exactamente
                        </label>
                        <div className="flex items-center bg-white rounded-lg p-2 w-[40vw]">
                            <Field
                                name="amountSend"
                                type="number"
                                placeholder="$0"
                                className="w-full px-2 py-2 text-black focus:outline-none"
                            />
                            <Field
                                name="currencySend"
                                component={CustomSelect}
                                options={currencyOptions}
                                className="w-64 ml-2 text-black font-semibold"
                            />
                        </div>
                    </div>

                    {/* Campo para el monto a recibir */}
                    <div className="mb-4">
                        <label htmlFor="amountReceive" className="block font-semibold mb-2">
                            El destinatario recibe
                        </label>
                        <div className="flex items-center bg-white rounded-lg p-2 w-[40vw]">
                            <Field
                                name="amountReceive"
                                type="number"
                                placeholder="$0"
                                className="w-full px-2 py-2 text-gray-800 focus:outline-none"
                            />
                            <Field
                                name="currencyReceive"
                                component={CustomSelect}
                                options={currencyOptions}
                                className="w-64 ml-2 text-black font-semibold"
                            />
                        </div>
                    </div>

                    {/* Campo para la cuenta bancaria */}
                    <div className="mb-4">
                        <label htmlFor="cuentaBancaria" className="block font-semibold mb-2">
                            Cuenta bancaria
                        </label>
                        <div className="flex items-center bg-white rounded-lg p-2 w-[40vw]">
                            <Field
                                name="cuentaBancaria"
                                type="text"
                                placeholder="**** **** **** ****"
                                className="w-full px-2 py-2 text-black focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Campo para el alias */}
                    <div className='mb-4'>
                        <label htmlFor="alias" className="block font-semibold mb-2">
                            Alias
                        </label>
                        <div className="flex items-center bg-white rounded-lg p-2 w-[40vw]">
                            <Field
                                name="alias"
                                type="text"
                                placeholder="Alias"
                                className="w-full px-2 py-2 text-black focus:outline-none"
                            />
                        </div>
                    </div>

                        {/* Botón de envío */}
                        <button
                            onClick={handleContinuar}
                            type="submit"
                            className="w-[40vw] py-3 mt-2 bg-verde text-white rounded-lg font-semibold hover:bg-green-600 transition duration-200"
                        >
                            Continuar
                        </button>
                </Form>
            )}
        </Formik>
        </section>
    );
};

export default Revision;
