import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import './SignUp.css'
import  google  from '../../assets/google.png'
import  apple  from '../../assets/apple.png'
import  image  from '../../assets/Signup-imagen.png'
import CustomButton from "../components/CustomButton"


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

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };


  return (
    <div className="md:py-8 bg-secundario flex gap-14 justify-center ">
        <div className="w-[466px] h-full md:h-[614px] py-11 px-16 bg-white rounded-[15px] shadow-down-dark-md">
            <h2 className="text-[26px] font-semibold leading-[63px] text-center pb-11">REGISTRO</h2>

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

                        <Field placeholder="Email" className="custom-field" type="email" name="email"/>
                        <ErrorMessage name="email" component="p" className="custom-error-message"/>

                        <Field placeholder="Confirma tu email" className="custom-field" type="email" name="rEmail"/>
                        <ErrorMessage name="rEmail" component="p" className="custom-error-message"/>

                        <div className="relative">
                            <Field placeholder="Tu contraseña" className="w-full custom-field" type={showPassword ? "text" : "password"}name="password"/>
                            <ErrorMessage name="password" component="p" className="custom-error-message"/>

                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="text-gris absolute top-0 right-0 flex items-center px-3
                                py-3 text-custom-gray-80 "                
                            >
                                {showPassword ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-5">
                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                    <path
                                    fillRule="evenodd"
                                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                                    clipRule="evenodd"
                                    />
                                </svg>
                                ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-5">
                                    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                                    <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.244 4.243z" />
                                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                                </svg>
                                )}
                            </button>
                        </div>
                        


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
                        

                        <CustomButton className='hover:bg-primario-hover focus:outline-none focus:bg-primario-hover' texto={'Registrarse'} disabled={!isValid || !dirty}/>
                    </Form>
                    )}
                </Formik>

                <div className="flex flex-col gap-4 items-center">
                    <p className="mt-4 text-sm">O continuar con: </p>
                    <div className="g-apple-buttons flex gap-3">
                        <button className="custom-social-button"><img className="w-[32px] h-[32px]" src={google} alt="" /></button>
                        <button className="custom-social-button"><img className="w-[32px] h-[32px]" src={apple} alt="" /></button>                        
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