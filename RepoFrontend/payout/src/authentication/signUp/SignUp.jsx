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
                    .then((res) => {res.json()
                
                    console.log('res.json', res.json)
                }
                )
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
    <div className="md:py-8 lg:px-8 flex xl:gap-14 lg:gap-14 justify-center h-[90vh] dark:bg-dark">
        
        <div className="w-full md:w-[466px] h-[90vh] lg:h-[500px] xl:h-[614px] py-11 px-6 md:px-16 bg-white md:rounded-[15px] shadow-down-dark-md">
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


                {/* YA TIENES CUENTA? */}
                <div className="mt-4 flex flex-col gap-4 items-center">                    
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

        {/* IMAGEN */}
        <img className="hidden lg:block lg:h-[500px] xl:block xl:h-[614px] 2xl:block 2xl:h-[614px]" src={image} alt="" />
    </div>
    </>
    
  );
};