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
        setCurrentStep(4);
        navigate('/transferencia/pago-exitoso');

        console.log(currentStep)
    };

    const navigate = useNavigate();

    const [datos, setDatos] = useState({});
    const { datosBancarios, monto } = useContext(TransferenciaContext);

    useEffect(() => {
        const obtenerDatos = async () => {
            const response = await fetch('https://payout.redromsolutions.com/transferencia', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    identifier: datosBancarios.identifier,
                    amountSend: monto.amountSend,
                    currencySend: monto.currencySend,
                    amountReceive: monto.amountReceive,
                    currencyReceive: monto.currencyReceive,
                }),
            });

            if (response.ok) {
                const datosObtenidos = await response.json();
                setDatos(datosObtenidos);
            } else {
                console.error(await response.json());
            }
        };

        obtenerDatos();
    }, [datosBancarios, monto]);

    return Object.keys(datos).length > 0 ? (
        <Formik
            initialValues={{
                nombre: datos.nombre,
                amountSend: datos.amountSend,
                currencySend: datos.currencySend,
                amountReceive: datos.amountReceive,
                currencyReceive: datos.currencyReceive,
            }}
            onSubmit={() => console.log('Formulario enviado: ', datos)}
        >
            {() => (
                <Form className="flex flex-col gap-4 w-full items-center mt-[10vh] md:mt-[2vh] bg-white rounded-2xl md:rounded-lg p-4 md:p-6">
                    <h3 className="text-center font-bold text-xl md:text-2xl">Revisa tus datos</h3>
                    <div className="flex flex-col items-center gap-2 md:gap-4">
                        <label htmlFor="nombre" className="block font-semibold mb-2 md:mb-4">
                            Nombre
                        </label>
                        <Field
                            name="nombre"
                            type="text"
                            placeholder="Nombre"
                            className="w-full px-2 py-2 text-black focus:outline-none border-2 border-primario rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-2 md:gap-4">
                        <label htmlFor="amountSend" className="block font-semibold mb-2 md:mb-4">
                            Monto a enviar
                        </label>
                        <Field
                            name="amountSend"
                            type="number"
                            placeholder="$0"
                            className="w-full px-2 py-2 text-black focus:outline-none border-2 border-primario rounded-lg"
                        />
                        <Field
                            name="currencySend"
                            component={CustomSelect}
                            options={currencyOptions}
                            className="w-full px-2 py-2 text-black focus:outline-none border-2 border-primario rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-2 md:gap-4">
                        <label htmlFor="amountReceive" className="block font-semibold mb-2 md:mb-4">
                            Monto a recibir
                        </label>
                        <Field
                            name="amountReceive"
                            type="number"
                            placeholder="$0"
                            className="w-full px-2 py-2 text-black focus:outline-none border-2 border-primario rounded-lg"
                        />
                        <Field
                            name="currencyReceive"
                            component={CustomSelect}
                            options={currencyOptions}
                            className="w-full px-2 py-2 text-black focus:outline-none border-2 border-primario rounded-lg"
                        />
                    </div>
                </Form>
            )}
        </Formik>
    ) : null;

    return (

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
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Form className="flex flex-col items-center justify-center text-start p-8 rounded-lg mt-[5vh] md:mt-0">
                        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">¿Corresponden estos datos a la cuenta?</h2>

                        {/* Campo para el nombre de usuario */}
                        <div className="mb-4">
                            <label htmlFor="nombre" className="block font-semibold mb-2">
                                Nombre
                            </label>
                            <div className="flex items-center bg-white rounded-lg p-2 w-[90vw] md:w-[40vw]">
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
                        <div className="mb-4">
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

                        {/* Campo para la cuenta bancaria */}
                        <div className="mb-4">
                            <label htmlFor="cuentaBancaria" className="block font-semibold mb-2">
                                Cuenta bancaria
                            </label>
                            <div className="flex items-center bg-white rounded-lg p-2 w-[90vw] md:w-[40vw]">
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
                            <div className="flex items-center bg-white rounded-lg p-2 w-[90vw] md:w-[40vw]">
                                <Field
                                    name="alias"
                                    type="text"
                                    placeholder="Alias"
                                    className="w-full px-2 py-2 text-black focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Botón de envío */}
                        <div className='flex'>
                            <button
                                disabled={isSubmitting}
                                onClick={handleContinuar}
                                type="submit"
                                className="w-[90vw] md:w-[40vw] py-3 mt-3 md:mt-2 bg-primario md:bg-verde text-white rounded-2xl md:rounded-lg font-semibold hover:bg-green-600 transition duration-200"
                            >
                                Continuar
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    );
};

export default Revision;

