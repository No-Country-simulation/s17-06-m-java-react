import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import Select from 'react-select';
import { useState, useContext, useEffect, useCallback } from "react";
import { TransferenciaContext } from "../../contexts/TransferenciaContext.jsx";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import argIcon from './assets/banderaArg.svg';
import usaIcon from './assets/usa.png';
import euroIcon from './assets/euro.png';
import BankModal from "./BankModal.jsx";
import ArgIconDefault from "./ArgIconDefault.jsx";

// Esquema de validación
const schema = Yup.object().shape({
    amount: Yup.number()
        .typeError('Ingrese un monto válido')
        .positive('El monto debe ser mayor a cero')
        .min(10, 'El mínimo de envío es el equivalente a $10 USD')
        .required('Este campo es requerido'),
    currency: Yup.string()
        .oneOf(['ARS', 'USD', 'EUR'])
        .required('Este campo es requerido'),
    accountNumber: Yup.string()
        .notRequired('Este campo es requerido')
});

// Opciones de divisas con íconos
const currencyOptions = [
    { value: 'ARS', label: 'ARS', icon: argIcon },
    { value: 'USD', label: 'USD', icon: usaIcon },
    { value: 'EUR', label: 'EUR', icon: euroIcon }
];

// Componente campo select con íconos
const CustomSelect = ({ options, field, form, ...props }) => (
    <Select
        options={options}
        styles={{
            control: (base) => ({
                ...base,
                border: 'none',
                boxShadow: 'none',
                indicatorSeparator: () => null,
                dropdownIndicator: () => null,
            }),
        }}
        formatOptionLabel={(option) => (
            <div className="flex items-center">
                <img className="mr-2 w-5 h-5" src={option.icon} alt="currency-icon" />
                {option.label}
            </div>
        )}
        onChange={(option) => form.setFieldValue(field.name, option.value)}
        {...props}
    />
);

const BankAccountField = ({ onChangeAccount }) => {
    const [field] = useField('accountNumber');
    const [bankAccount, setBankAccount] = useState(null);
    const [amount] = useField('amount');
    const [currency] = useField('currency');

    return (
        <>
            <div className="flex items-center gap-3 px-3">
                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 41H40M4.11111 34.615H37.8889M8.33333 34.615V23.9732M16.7778 34.615V23.9732M25.2222 34.615V23.9732M33.6667 34.615V23.9732M21 11.2177L21.0156 11.2034M40 17.5882L25.4882 4.58347C23.9 3.16033 23.106 2.44878 22.2101 2.17854C21.4205 1.94049 20.5795 1.94049 19.7899 2.17854C18.894 2.44878 18.1 3.16033 16.5119 4.58347L2 17.5882H40Z" stroke="#A483DF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-semibold">{'Cuenta: Victor Molinas'}</span>
            </div>
        </>
    );
}

const BankForm = () => {
    const { currentStep, setCurrentStep } = useContext(TransferenciaContext);
    const navigate = useNavigate();

    const handleSubmit = () => {
/*             // Aquí puedes hacer la llamada a la API con los datos
            console.log('Datos del formulario:', values);
            // Simulación de espera
            await new Promise(r => setTimeout(r, 1000)); */
            // Navegar a la siguiente página
            setCurrentStep(3);
            navigate('/transferencia/revision');
    };

    return (
        <>
            <Formik
                initialValues={{ amount: '', currency: 'ARS', accountNumber: '' }}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="flex flex-col w-full items-center gap-5 mt-[10vh] md:mt-[2vh]">
                        <h3 className="text-center font-bold text-xl md:text-2xl">¿Cuánto estás enviando?</h3>
                        {/* Campo para el monto a enviar */}
                        <div className="mb-2 text-start">
                            <label htmlFor="amountSend" className="block font-semibold mb-2">
                                Envías exactamente
                            </label>
                            <div className="flex items-center bg-white rounded-lg p-2 w-[90vw] md:w-[40vw]">
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
                        <div className="mb-2 text-start">
                            <label htmlFor="amountReceive" className="block font-semibold mb-2">
                                El destinatario recibe
                            </label>
                            <div className="flex items-center bg-white rounded-lg p-2 w-[90vw] md:w-[40vw]">
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
                        <div className="flex flex-col gap-2 items-start">
                            <label className="font-semibold">Pagando con</label>
                            <div className="flex input-container bg-white text-black text-xs md:text-m w-[90vw] md:w-[40vw] py-5 rounded-lg items-center justify-between px-3" style={{ zIndex: '2' }}>
                                <BankAccountField />
                            </div>
                            <ErrorMessage name="accountNumber" component="p" className='custom-error-message' />
                        </div>
                        <div className="flex">

                            <button onClick={handleSubmit} className='mt-[16vh] bg-primario md:bg-verde text-white text-center rounded-2xl md:rounded-lg w-[90vw] md:w-[40vw] py-3 md:mt-0 hover:bg-green-600 transition duration-200'>Continuar</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default BankForm;

/* 
Transferencia que funciona
    {
    "userId": 79,
    "userName": "Victor Molinas",
    "transactionId": 59,
    "sourceAccountId": 88,
    "targetAccountId": 83,
    "amount": 3000,
    "balance": 34200,
    "targetAccountCvu": 1128801662594826600,
    "targetAccountAlias": "Sabio.Estrella.Rojo",
    "createdAt": "2024-09-18T23:31:47.502344867",
    "type": null,
    "targetName": null
}
*/