import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import './SignUp.css'
import  google  from '../../assets/google.png'
import  apple  from '../../assets/apple.png'
import  image  from '../../assets/Signup-imagen.png'
import CustomButton from "../components/CustomButton"
import InputField from "../components/InputField"
import PasswordField from "../components/PasswordField"
/* import { fetchSignUp } from "../../api/authApi" */


const schema = Yup.object().shape({    
    email: Yup.string()                
                .email("El email es inválido")
                .required("Este campo es obligatorio"),
    rEmail: Yup.string()
                .oneOf([Yup.ref('email'), null], 'Las direcciones de email no coinciden')
                .required('Este campo es requerido'),
    password: Yup.string()
                .min(8, "La contraseña es demasiado corta")
                .required("Este campo es obligatorio"),                
})

const urlSignUp = 'https://payout.redromsolutions.com/register'


export const SignUp = () => { 

    let navigate = useNavigate()
    // const [email, setEmail] = useState(null);
    // const [rEmail, setREmail] = useState(null);
    // const [password, setPassword] = useState(null);

    const [showPassword, setShowPassword] = useState(false);
/*     const [light, setLight] = useState(true); */

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

/*     const toggleTheme = () => {
        setLight(!light);
      };
 */


    const handleSubmit = async (values) => {   
        console.log('Formulario enviado:', values) 
        
        fetch(urlSignUp, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
                    body: JSON.stringify({              
                      email: values.email,                      
                      password: values.password
                    }),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      const token = data.token
                      localStorage.setItem('token', token)
                      navigate('/home')
                    })
                    .catch (error =>{
                      console.log(error)              
                    })
             
    }



  return (
    <>
    {/* <button id='button-toggle-mode' onClick={toggleTheme} className="bg-primario w-[100px] rounded-md my-2 mx-2 text-white">Tema</button> */}
    <div className="md:py-8 flex xl:gap-14 lg:gap-14 justify-center h-[90vh]">
        
        <div className="w-full md:w-[466px] h-[90vh] md:h-[614px] py-11 px-6 md:px-16 bg-white md:rounded-[15px] shadow-down-dark-md">
            <h2 className="text-[26px] leading-[63px] text-center text-primario">REGISTRO</h2>

            <Formik
                initialValues={{                    
                    email: '',
                    rEmail: '',
                    password: '',                    
                }}
                /* onSubmit={(values) => {
                    console.log('Formulario enviado:', values);
                }} */
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {({ isValid, dirty }) => (
                    <Form className="flex flex-col gap-4 text-black">                        

                        {/* EMAIL */}
                        <InputField placeholder="Email" type='email' name='email' />

                        {/* CONFIRMA EMAIL */}
                        <InputField placeholder="Confirma tu email" type="email" name="rEmail"/>

                        {/* CONTRASEÑA */}
                        <div className="relative">
                            <PasswordField placeholder='Contraseña' name='password' />

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
                        

                        {/* TERMINOS Y CONDICIONES */}
                        <div className="flex items-center space-x-2">
                            <Field
                                type="checkbox"
                                name="termsAccepted"
                                className=""
                            />
                            <label className="text-xxs text-black" htmlFor="termsAccepted">
                            Al registrarme acepto las <a className="text-celeste text-xxs" href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">politicas de privacidad</a>
                            </label>
                            <ErrorMessage name="termsAccepted" component="div" className="text-red-500" />
                        </div>
                        
                        {/* BOTON REGISTRARSE */}
                        <CustomButton className='custom-button hover:bg-primario-hover focus:outline-none focus:bg-primario-hover dark:text-white' texto={'Registrarse'} disabled={!isValid || !dirty} type='signup'/>
                    </Form>
                    )}
                </Formik>


                {/* REGISTRO GOOGLE APPLE */}
                <div className="flex flex-col gap-4 items-center">
                    <p className="mt-4 text-sm text-black">O continuar con: </p>
                    <div className="g-apple-buttons flex gap-3">
                        <button className="custom-social-button"><img className="w-[32px] h-[32px]" src={google} alt="" /></button>
                        <button className="custom-social-button"><img className="w-[32px] h-[32px]" src={apple} alt="" /></button>                        
                    </div>
                    <div>
                        <p className="text-center text-sm text-gris">
                        ¿Ya tienes cuenta?{" "}                    
                        </p>
                        <div className="flex justify-center">
                            <Link to='/login'
                                className="text-primario text-sm text-center font-semibold underline leading-[21px]">
                                Iniciar sesión
                            </Link>
                        </div>
                    </div>
                </div>


                
        </div>

        {/* IMAGEN */}
        <img className="hidden lg:block lg:h-[614px] xl:block xl:h-[614px] 2xl:block 2xl:h-[614px]" src={image} alt="" />
    </div>
    </>
    
  );
};