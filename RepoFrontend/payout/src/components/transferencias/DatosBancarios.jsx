import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TransferenciaContext } from "../../contexts/TransferenciaContext"

const schema = Yup.object().shape({
  'cvu/alias': Yup.string()
    .min(4, "Mínimo 22 caracteres")
    .max(22, "Máximo 22 caracteres")
    .required("Este campo es obligatorio"),
})

export const DatosBancarios = () => {
  const [initialValues, setInitialValues] = useState({
    cvu: ''
  });

  /* Gestiona el stepper */
  const { currentStep, setCurrentStep } = useContext(TransferenciaContext);
  const navigate = useNavigate();
  const handleContinuar = () => {
    setCurrentStep(2); 
    navigate('/transferencia/monto'); 
  };

  const handleSubmit = (values) => {
    console.log('Formulario enviado:', values)
  }

  return (
      <section className="flex flex-col gap-4 h-full" >
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          {({ values, handleSubmit }) => (
            <Form className="flex flex-col gap-6 items-center mt-[10vh] w-full h-full">
              <div className="flex flex-col justify-center items-center gap-6 bg-white rounded-lg w-[40vw] h-[35vh]">
                <article className="flex items-center justify-center gap-2">
                  <p><svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 41H40M4.11111 34.615H37.8889M8.33333 34.615V23.9732M16.7778 34.615V23.9732M25.2222 34.615V23.9732M33.6667 34.615V23.9732M21 11.2177L21.0156 11.2034M40 17.5882L25.4882 4.58347C23.9 3.16033 23.106 2.44878 22.2101 2.17854C21.4205 1.94049 20.5795 1.94049 19.7899 2.17854C18.894 2.44878 18.1 3.16033 16.5119 4.58347L2 17.5882H40Z" stroke="#A483DF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  </p>
                  <h3 className="text-black text-2xl font-bold text-center">Introduzca los datos bancarios</h3>
                </article>
                <div className="flex flex-col items-start gap-2 relative">
                  <label htmlFor="cvu/alias" className="text-primario font-bold text-sm">CBU/CVU o Alias</label>
                  <Field className="w-[18vw] text-black m-0 py-2 border bg-secundario shadow-lg rounded-lg text-sm px-2 outline-none" id="cvu/alias" type="text" name="cvu/alias" />
                  <ErrorMessage name="cvu/alias" component="p" className='custom-error-message' />
                </div>
              </div>
              <button onClick={handleContinuar} className='bg-verde text-white text-center rounded-lg w-[40vw] py-3 hover:bg-green-600 transition duration-200'>Continuar</button>
            </Form>
          )}
        </Formik>
      </section>
  )
}

export default DatosBancarios