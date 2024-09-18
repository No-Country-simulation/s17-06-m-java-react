import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import Select from 'react-select';
import { useState, useContext, useCallback, useEffect } from "react";
import { TransferenciaContext } from "../../contexts/TransferenciaContext.jsx";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import argIcon from './assets/banderaArg.svg';
import usaIcon from './assets/usa.png';
import euroIcon from './assets/euro.png';
import DatosBancarios from "./DatosBancarios";
import BankModal from "./BankModal.jsx"

const schema = Yup.object().shape({
    amount: Yup.number()
        .typeError('Ingrese un monto válido')
        .positive('El monto debe ser mayor a cero')
        .min(10, 'El mìnimo de envío es el equivalente a $10 USD')
        .required('Este campo es requerido'),
    currency: Yup.string()
        .oneOf(['ARS', 'USD', 'EUR'])
        .required('Este campo es requerido'),
    accountNumber: Yup.string()
        .required('Este campo es requerido')
        .typeError('Ha habido un error, vuelva a intentarlo.'),
})


// Opciones de divisas con íconos
const currencyOptions = [
    { value: 'ARS', label: 'ARS', icon: argIcon },
    { value: 'USD', label: 'USD', icon: usaIcon },
    { value: 'EUR', label: 'EUR', icon: euroIcon },
    // Agrega más divisas aquí
];

// Componente campo select con íconos
const CustomSelect = ({ options, field, form, ...props }) => (
    <Select
        options={options}
        styles={{
            control: (base) => ({
                ...base,
                border: 'none',
                boxShadow: 'none'
            }),
        }}
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

const BankAccountField = ({ onChangeAccount }) => {
    const [field, { value }] = useField('cuentaBancaria');

    const fetchAmountDetails = useCallback(async () => {
        if (value) {
            const response = await fetch('https://payout.redromsolutions.com/transfer/v1', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier: value }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('amountSend', data.amountSend);
                localStorage.setItem('currencySend', data.currencySend);
                localStorage.setItem('amountReceive', data.amountReceive);
                localStorage.setItem('currencyReceive', data.currencyReceive);
            }
        }
    }, [value]);

    useEffect(() => {
        fetchAmountDetails();
    }, [fetchAmountDetails]);

    return (
        <>
            <div className="flex items-center gap-3 px-3">
                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 41H40M4.11111 34.615H37.8889M8.33333 34.615V23.9732M16.7778 34.615V23.9732M25.2222 34.615V23.9732M33.6667 34.615V23.9732M21 11.2177L21.0156 11.2034M40 17.5882L25.4882 4.58347C23.9 3.16033 23.106 2.44878 22.2101 2.17854C21.4205 1.94049 20.5795 1.94049 19.7899 2.17854C18.894 2.44878 18.1 3.16033 16.5119 4.58347L2 17.5882H40Z" stroke="#A483DF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className="font-semibold">{value || 'Cuenta bancaria ingresada'}</span>
            </div>
            <button type="button" className="bg-gray-200 text-primario p-2 rounded-3xl" onClick={onChangeAccount}>
                <div className="flex items-center gap-2">
                    <span>Cambiar</span>
                    <svg width="10" height="10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2749 38.65C13.1234 38.5867 12.9839 38.4979 12.8624 38.3875C12.7452 38.2713 12.6522 38.133 12.5888 37.9807C12.5253 37.8284 12.4926 37.665 12.4926 37.5C12.4926 37.335 12.5253 37.1716 12.5888 37.0193C12.6522 36.867 12.7452 36.7287 12.8624 36.6125C12.9839 36.5021 13.1234 36.4133 13.2749 36.35C13.4231 36.2796 13.5859 36.2453 13.7499 36.25C14.0814 36.25 14.3994 36.3817 14.6338 36.6161C14.8682 36.8505 14.9999 37.1685 14.9999 37.5C14.9999 37.8315 14.8682 38.1495 14.6338 38.3839C14.3994 38.6183 14.0814 38.75 13.7499 38.75C13.5865 38.748 13.4252 38.7141 13.2749 38.65ZM15.7124 32.975L18.6624 29.225C18.8679 28.9648 19.1684 28.7968 19.4978 28.7581C19.8272 28.7195 20.1584 28.8132 20.4186 29.0187C20.6789 29.2243 20.8468 29.5248 20.8855 29.8542C20.9242 30.1835 20.8304 30.5148 20.6249 30.775L17.6749 34.525C17.4693 34.7852 17.1688 34.9532 16.8395 34.9919C16.5101 35.0305 16.1789 34.9368 15.9186 34.7312C15.6584 34.5257 15.4905 34.2252 15.4518 33.8958C15.4131 33.5665 15.5068 33.2352 15.7124 32.975ZM21.6124 25.475L25.9124 20L12.7624 3.275C12.5568 3.01475 12.4631 2.68352 12.5018 2.35416C12.5405 2.0248 12.7084 1.72429 12.9686 1.51875C13.2289 1.31321 13.5601 1.21946 13.8895 1.25814C14.2188 1.29682 14.5193 1.46475 14.7249 1.725L28.4749 19.225C28.6493 19.4457 28.7441 19.7187 28.7441 20C28.7441 20.2813 28.6493 20.5543 28.4749 20.775L23.5624 27.025C23.3568 27.2852 23.0563 27.4532 22.727 27.4919C22.3976 27.5305 22.0664 27.4368 21.8061 27.2312C21.5459 27.0257 21.378 26.7252 21.3393 26.3958C21.3006 26.0665 21.3943 25.7352 21.5999 25.475H21.6124Z" fill="#5C27BB" />
                    </svg>
                </div>
            </button>
        </>
    );
};

const Monto = () => {
    const { currentStep, setCurrentStep } = useContext(TransferenciaContext);
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting }) => {
        const response = await fetch('/api/transaction/v1/transfer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            setCurrentStep(3);
            navigate('/transferencia/revision', { replace: true });
        } else {
            console.error('Error:', response.status, response.statusText);
            setSubmitting(false);
        }
    };

    const [initialValues, setInitialValues] = useState({
        amountSend: '',
        currencySend: 'ARS',
        amountReceive: '',
        currencyReceive: 'USD',
        cuentaBancaria: '',
    });

    const handleChangeAccount = () => {
        setInitialValues(prevState => ({
            ...prevState,
            cuentaBancaria: 'Cuenta cambiada',
        }));
    };

    return (
        <section className="flex flex-col gap-4 h-full">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {({ values }) => (
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
                                <BankAccountField onChangeAccount={handleChangeAccount} />
                            </div>
                            <ErrorMessage name="cuentaBancaria" component="p" className='custom-error-message' />
                        </div>
                        <div className="flex">

                            <button onClick={() => handleSubmit()} className='mt-[16vh] bg-primario md:bg-verde text-white text-center rounded-2xl md:rounded-lg w-[90vw] md:w-[40vw] py-3 md:mt-0 hover:bg-green-600 transition duration-200'>Continuar</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    )
}

export default Monto;