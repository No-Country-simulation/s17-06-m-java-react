import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TransferenciaContext } from "../../contexts/TransferenciaContext";

export const DatosBancarios = () => {
  const schema = Yup.object().shape({
    alias: Yup.string()
      .required('Este campo es obligatorio')
      .test('is-valid', 'El valor ingresado no es válido.', (value) => {
        // Validación para CBU, CVU y Alias
        const isCBU = /^\d{22}$/.test(value);
        const isCVU = /^\d{22}$/.test(value);
        const isAlias = /^[a-zA-Z0-9.-]{6,25}$/.test(value);

        return isCBU || isCVU || isAlias;
      }),
  });

  /* Gestiona el stepper */
  const { currentStep, setCurrentStep } = useContext(TransferenciaContext);
  const navigate = useNavigate();

  const handleContinuar = () => {
    setCurrentStep(2);
    navigate('/transferencia/monto');
  };

  const handleSubmit = async ({ alias }) => {
    if (!alias) return console.error('No se ha proporcionado el valor requerido')

    // Crear la URL para la solicitud GET.
    const url = `https://payout.redromsolutions.com/bank_account/find-by-alias?alias=${alias}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}` // Asegúrate de tener un token válido.
        },
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      console.log('Éxito: ', data);

      localStorage.setItem('alias', JSON.stringify(data));
      handleContinuar();
    } catch (error) {
      console.error('Error al guardar los datos en localStorage:', error);
    }
  };

  return (
    <section className="flex flex-col gap-4">
      <Formik
        initialValues={{ alias: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="flex flex-col gap-6 items-center mt-[10vh] w-full">
            <div className="flex flex-col md:justify-center md:px-0 items-center gap-6 dark:bg-grisclaro bg-grisclaro rounded-2xl md:rounded-lg w-[90vw] md:w-[40vw] h-[40vh]">
              <article className="mt-[4rem] md:mt-0 flex items-center justify-center">
                <h3 className="text-black text-m md:text-2xl font-bold text-center whitespace-nowrap">Introduzca los datos bancarios</h3>
              </article>
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="alias" className="dark:text-primario text-black font-bold text-sm">CBU/CVU o Alias</label>
                <Field
                  className="md:w-[18vw] w-[70vw] text-black m-0 py-2 border md:bg-secundario shadow-md rounded-2xl md:rounded-lg text-sm px-2 outline-none"
                  id="alias" type="text" name="alias" placeholder='Ingrese su CBU, CVU o Alias' />
                <ErrorMessage name="alias" component="p" className='custom-error-message' />
              </div>
            </div>
            <div className="flex">
              <button type="submit"
                className='mt-[21vh] md:mt-0 bg-primario md:bg-verde text-white text-center rounded-2xl md:rounded-lg w-[90vw] md:w-[40vw] py-3 hover:bg-green-600 transition duration-200'>Continuar</button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default DatosBancarios;
