import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import './Login.css'
import google from '../../assets/google.png'
import apple from '../../assets/apple.png'
import image from '../../assets/login-imagen.png'
import CustomButton from "../components/CustomButton"
import { Link } from "react-router-dom"
import InputField from "../components/InputField"
import PasswordField from "../components/PasswordField"



const schema = Yup.object().shape({
    email: Yup.string()
        .email("El email es inválido")
        .required('El email es requerido'),

    password: Yup.string()
        .min(8, "La contraseña es demasiado corta")
        .required("Este campo es obligatorio"),
})




export const Login = () => {


    const [showPassword, setShowPassword] = useState(false);
/*     const [light, setLight] = useState(true); */

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
        <div className="md:py-8 flex xl:gap-14 lg:gap-14 justify-center h-[90vh]">
            <div className="w-full md:w-[466px] h-full md:h-[614px] bg-white py-11 px-16 rounded-[15px] shadow-down-dark-md">
                <h2 className="text-primario text-[26px] leading-[63px] text-center pb-11">¡Bienvenido a Payout!</h2>

                <Formik 
                    initialValues={{
                        email: '',
                        password: '',

                    }}
                    onSubmit={(values) => {
                        console.log('Inicio de Sesion Exitoso:', values);
                    }}
                    validationSchema={schema}
                >
                    {({ isValid, dirty }) => (
                        <Form className="flex flex-col gap-4 text-black">

                            {/* INPUT EMAIL */}
                            <InputField placeholder="Email" type='email' name='email' />

                            {/* INPUT CONTRASEÑA */}
                            <PasswordField placeholder='Contraseña' name='password' />

                            {/* OLVIDASTE TU CONTRASEÑA? */}
                            <div className="flex items-center justify-center">
                                <p className="text-center text-masxs text-gris">
                                ¿olvidaste tu contraseña? {" "} <a href="/signup"
                                    className="text-primario text-masxs text-center font-semibold underline leading-[21px]">
                                    Recuperar contraseña
                                </a>                   
                                </p>
                                
                            </div>

                            {/* BOTON SUBMIT */}
                            <CustomButton className='custom-button hover:bg-primario-hover focus:outline-none focus:bg-primario-hover text-sm dark:text-white' texto={'Iniciar sesion'} disabled={!isValid || !dirty} type='login' />

                            {/* AUN NO TIENES CUENTA? */}
                            <div className="flex gap-1.5 justify-center">
                                <p className="text-center text-sm text-gris">
                                ¿aún no tienes cuenta? {" "}                    
                                </p>
                                <Link to="/signup"
                                    className="text-primario text-center text-sm font-semibold underline leading-[21px]">
                                    Registrate
                                </Link>
                            </div>
                        </Form>
                    )}
                </Formik>

                {/* LOGIN GOOGLE APPLE */}
                <div className="flex flex-col gap-4 items-center">
                    <p className="mt-9 text-sm text-black">O continuar con: </p>
                    <div className="g-apple-buttons flex gap-3">
                        <button type='button' className="border border-primario rounded-lg py-2.5 px-3.5"><img className="w-[32px] h-[32px]" src={google} alt="" /></button>
                        <button type='button' className="border border-primario rounded-lg py-2.5 px-3.5"><img className="w-[32px] h-[32px]" src={apple} alt="" /></button>
                    </div>

                </div>
            </div>

            {/* IMAGEN */}
            <img className="hidden lg:block lg:h-[614px] xl:block xl:h-[614px] 2xl:block 2xl:h-[614px]" src={image} alt="" />
        </div>
    );
};