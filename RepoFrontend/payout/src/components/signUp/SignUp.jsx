import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import './SignUp.css'
import  google  from '../../assets/google.png'
import  apple  from '../../assets/apple.png'
import  image  from '../../assets/Signup-imagen.png'


const schema = Yup.object().shape({
    /* nombre: Yup.string()
                .min(2, "El nombre es demasiado corto")
                .max(30, "Máximo 30 caracteres")
                .required("Este campo es obligatorio"), */
    email: Yup.string()                
                .email("El email es inválido")
                .required("Este campo es obligatorio"),
    rEmail: Yup.string()
                .oneOf([Yup.ref('email'), null], 'Las direcciones de email no coinciden')
                .required('Este campo es requerido'),
    password: Yup.string()
                .min(8, "La contraseña es demasiado corta")
                .required("Este campo es obligatorio"),
    /* rPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
                .required('Este campo es requerido'), */
                
})





export const SignUp = () => { 

  return (
    <div className="h-[100dvh] py-0 md:py-36 bg-secundario flex gap-14 justify-center">
        <div className="w-[466px] h-[100dvh] md:h-[614px] py-11 px-16 bg-white rounded-[15px] shadow-down-dark-md">
            <h2 className="text-primario text-[26px] font-semibold font-['Montserrat'] leading-[63px] text-center pb-11">REGISTRO</h2>

            <Formik
                initialValues={{
                    /* nombre: '', */
                    email: '',
                    rEmail: '',
                    password: '',
                    /* rPassword: '' */
                }}
                onSubmit={(values) => {
                    console.log('Formulario enviado:', values);
                }}
                validationSchema={schema}
            >
                {({ isValid, dirty }) => (
                    <Form className="flex flex-col gap-4">
                        {/* <Field placeholder="Nombre" className="py-8 border border-gray-300 rounded" type="text" name="nombre"/>
                        <ErrorMessage name="nombre" component="p"/> */}

                        <Field placeholder="Email" className="py-2.5 pl-4 border border-primario rounded-lg text-sm" type="email" name="email"/>
                        <ErrorMessage name="email" component="p"/>

                        <Field placeholder="Confirma tu email" className="py-2.5 pl-4 border border-primario rounded-lg text-sm" type="email" name="rEmail"/>
                        <ErrorMessage name="rEmail" component="p"/>

                        <Field placeholder="Tu contraseña" className="py-2.5 pl-4 border border-primario rounded-lg text-sm" type="text" name="password"/>
                        <ErrorMessage name="password" component="p"/>

                        {/* <Field placeholder="Confirma tu contraseña" className="form-control py-2" type="text" name="rPassword"/>
                        <ErrorMessage name="rPassword" component="p"/> */}

                        <div className="flex items-center space-x-2">
                            <Field
                                type="checkbox"
                                name="termsAccepted"
                                className="custom-checkbox"
                            />
                            <label className="text-xs" htmlFor="termsAccepted">
                            Al registrarme acepto las <a className="text-celeste" href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">politicas de privacidad</a>
                            </label>
                            <ErrorMessage name="termsAccepted" component="div" className="text-red-500" />
                        </div>
                        

                        <button type="submit" className="w-full py-3.5 px-4 bg-primario text-white rounded-lg text-xl font-['Montserrat'] font-semibold hover:bg-primario-hover focus:outline-none focus:bg-primario-hover" disabled={!isValid || !dirty}>Registrarme</button>
                    </Form>
                    )}
                </Formik>

                <div className="flex flex-col gap-4 items-center">
                    <p className="mt-4 text-sm">O continuar con: </p>
                    <div className="g-apple-buttons flex gap-3">
                        <button className="border border-primario rounded-lg py-2.5 px-3.5"><img className="w-[32px] h-[32px]" src={google} alt="" /></button>
                        <button className="border border-primario rounded-lg py-2.5 px-3.5"><img className="w-[32px] h-[32px]" src={apple} alt="" /></button>                        
                    </div>
                    <div>
                        <p className="text-center text-sm text-gris">
                        ¿Ya tienes cuenta?{" "}                    
                        </p>
                        <div className="flex justify-center">
                            <a href="/login"
                                className="text-primario text-center font-semibold underline leading-[21px]">
                                Iniciar sesión
                            </a>
                        </div>
                    </div>
                </div>


                
        </div>
        <img className="h-[614px] hidden md:block" src={image} alt="" />
    </div>
  );
};