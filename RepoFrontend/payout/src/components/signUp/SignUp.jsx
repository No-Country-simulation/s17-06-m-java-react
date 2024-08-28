import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'


const schema = Yup.object().shape({
    nombre: Yup.string()
                .min(2, "El nombre es demasiado corto")
                .max(30, "Máximo 20 caracteres")
                .required("Este campo es obligatorio"),
    email: Yup.string()                
                .email("El email es inválido")
                .required("Este campo es obligatorio"),
    password: Yup.string()
                .min(8, "La contraseña es demasiado corta")
                .required("Este campo es obligatorio"),
    rPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
                .required('Este campo es requerido'),
                
})


export const SignUp = () => { 




  return (
    <div className="container my-5">
            <h2 className="text-lg text-red-500">Registrarme</h2>
            

            <Formik
                initialValues={{
                    nombre: '',
                    email: '',
                    password: '',
                    rPassword: ''
                }}
                onSubmit={(values) => {
                    console.log('Formulario enviado:', values);
                  }}
                validationSchema={schema}
            >
                {({ isValid, dirty }) => (
                    <Form className="flex flex-col">
                        <Field placeholder="Nombre" className="py-8 border border-gray-300 rounded" type="text" name="nombre"/>
                        <ErrorMessage name="nombre" component="p"/>

                        <Field placeholder="Email" className="form-control py-2 block" type="email" name="email"/>
                        <ErrorMessage name="email" component="p"/>

                        <Field placeholder="Tu contraseña" className="form-control py-2" type="text" name="password"/>
                        <ErrorMessage name="password" component="p"/>

                        <Field placeholder="Confirma tu contraseña" className="form-control py-2" type="text" name="rPassword"/>
                        <ErrorMessage name="rPassword" component="p"/>

                        <button type="submit" className="btn btn-success" disabled={!isValid || !dirty}>Enviar</button>
                    </Form>
                )}
            </Formik>

            {/* <p className="text-center text-xs pb-6">
                Ya tienes una cuenta?{" "}
                <a
                href="/login"
                className="text-secundario font-semibold">
                INICIA SESION
                </a>
            </p> */}


        </div>
  );
};