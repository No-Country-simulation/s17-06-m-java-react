import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TransferenciaContext } from "../../contexts/TransferenciaContext"

const schema = Yup.object().shape({
  identifier: Yup.string()
  .required('Este campo es obligatorio')
  .test('is-valid', 'El valor ingresado no es válido.', (value) => {
    // Validación para CBU
    const isCBU = /^\d{22}$/.test(value);
    // Validacón para CVU
    const isCVU = /^\d{22}$/.test(value);
    //Validación para Alias
    const isAlias = /^[a-zA-Z0-9.-]{6,20}$/.test(value);

    return isCBU || isCVU || isAlias;
  }),
})

export const DatosBancarios = () => {

  /* Gestiona el stepper */
  const { currentStep, setCurrentStep } = useContext(TransferenciaContext);
  const navigate = useNavigate();
  const handleContinuar = () => {
    setCurrentStep(2); 
    navigate('/transferencia/monto'); 
  };

  const handleSubmit = async (values) => {
    const url = 'https://payout.redromsolutions.com/transferencia';
    const data = {
      identifier: values.identifier,
      example: 'hola' // Hardcode de hola
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const json = await response.json();
      if (response.ok) {
        console.log(json);
      } else {
        console.error(json);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <section className="flex flex-col gap-4">
        <Formik
          initialValues={{ identifier: '' }}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          {({ values, handleSubmit }) => (
            <Form className="flex flex-col gap-6 items-center mt-[10vh] w-full">
              <div className="flex flex-col md:justify-center md:px-0 items-center gap-6 bg-grisclaro md:bg-white rounded-2xl md:rounded-lg w-[90vw] md:w-[40vw] h-[40vh]">
                <article className="mt-[4rem] md:mt-0 flex items-center justify-center">
                  <p className='hidden'><svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 41H40M4.11111 34.615H37.8889M8.33333 34.615V23.9732M16.7778 34.615V23.9732M25.2222 34.615V23.9732M33.6667 34.615V23.9732M21 11.2177L21.0156 11.2034M40 17.5882L25.4882 4.58347C23.9 3.16033 23.106 2.44878 22.2101 2.17854C21.4205 1.94049 20.5795 1.94049 19.7899 2.17854C18.894 2.44878 18.1 3.16033 16.5119 4.58347L2 17.5882H40Z" stroke="#A483DF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </p>
                  <p className='md:hidden'><svg width="43" height="23" viewBox="0 0 70 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 41H40M4.11111 34.615H37.8889M8.33333 34.615V23.9732M16.7778 34.615V23.9732M25.2222 34.615V23.9732M33.6667 34.615V23.9732M21 11.2177L21.0156 11.2034M40 17.5882L25.4882 4.58347C23.9 3.16033 23.106 2.44878 22.2101 2.17854C21.4205 1.94049 20.5795 1.94049 19.7899 2.17854C18.894 2.44878 18.1 3.16033 16.5119 4.58347L2 17.5882H40Z" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </p>
                  <h3 className="text-black text-m md:text-2xl font-bold text-center whitespace-nowrap">Introduzca los datos bancarios</h3>
                </article>
                <div className="flex flex-col items-start gap-2">
                  <label htmlFor="cvu/alias" className="text-primario font-bold text-sm">CBU/CVU o Alias</label>
                  <Field className="md:w-[18vw] w-[70vw] text-black m-0 py-2 border md:bg-secundario shadow-md rounded-2xl md:rounded-lg text-sm px-2 outline-none" id="cvu/alias" type="text" name="cvu/alias" />
                  <ErrorMessage name="cvu/alias" component="p" className='custom-error-message' />
                </div>
              </div>
              <div className="flex">
              <button onClick={handleContinuar} className='mt-[21vh] md:mt-0 bg-primario md:bg-verde text-white text-center rounded-2xl md:rounded-lg w-[90vw] md:w-[40vw] py-3 hover:bg-green-600 transition duration-200'>Continuar</button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
  )
}

export default DatosBancarios