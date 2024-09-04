import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import './Login.css'
import google from '../../assets/google.png'
import apple from '../../assets/apple.png'
import image from '../../assets/Signup-imagen.png'
import CustomButton from "../components/CustomButton"

const schema = Yup.object().shape({
    email: Yup.string()
        .email("El email es inválido")
        .required('El email es requerido'),

    password: Yup.string()
        .min(8, "La contraseña es demasiado corta")
        .required("Este campo es obligatorio"),
})

export const Login = () => {

    return (
        <body className="md:py-8 flex gap-14 justify-center">
            <div className="w-[466px] h-[100dvh] md:h-[614px] bg-light py-11 px-16 rounded-[15px] shadow-down-dark-md">
                <h2 className="text-primario text-[26px] leading-[63px] text-center pb-11">Inicia sesión o registrate</h2>

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
                        <Form className="flex flex-col gap-4">

                            <Field placeholder="Email" className="py-2.5 pl-4 border border-primario rounded-lg text-sm" type="email" name="email" />
                            <ErrorMessage name="email" component="p" className="text-red-500" />


                            <Field placeholder="contraseña" className="py-2.5 pl-4 border border-primario rounded-lg text-sm" type="text" name="password" />
                            <ErrorMessage name="password" component="p" className="text-red-500" />



                            <div className="flex items-center space-x-2">
                                <label className="text-xs" htmlFor="Olv">
                                    ¿Olvidaste tu Contraseña? <a className="text-celeste" href="#">Recuperar Contraseña</a>
                                </label>

                            </div>
                            <CustomButton className='hover:bg-primario-hover focus:outline-none focus:bg-primario-hover' texto={'Iniciar sesion'} disabled={!isValid || !dirty} type='login' />
                            <div className="flex items-center space-x-2">
                                <label className="text-xs" htmlFor="Olv">
                                    ¿aun no tienes cuenta? <a className="text-celeste" href="#">Registrate</a>
                                </label>

                            </div>
                        </Form>
                    )}
                </Formik>

                <div className="flex flex-col gap-4 items-center">
                    <p className="mt-4 text-sm">O continuar con: </p>
                    <div className="g-apple-buttons flex gap-3">
                        <button type='button' className="border border-primario rounded-lg py-2.5 px-3.5"><img className="w-[32px] h-[32px]" src={google} alt="" /></button>
                        <button type='button' className="border border-primario rounded-lg py-2.5 px-3.5"><img className="w-[32px] h-[32px]" src={apple} alt="" /></button>
                    </div>

                </div>



            </div>
            <img className="h-[614px] hidden md:block" src={image} alt="" />
        </body>
    );
};