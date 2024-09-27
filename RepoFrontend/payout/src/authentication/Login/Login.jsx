
import { Formik, Form} from "formik"
import * as Yup from 'yup'
import './Login.css'
import google from '../../assets/google.png'
import apple from '../../assets/apple.png'
import image from '../../assets/login-imagen.png'
import CustomButton from "../components/CustomButton"
import { Link } from "react-router-dom"
import InputField from "../components/InputField"
import PasswordField from "../components/PasswordField"
import { useNavigate } from "react-router-dom"




const schema = Yup.object().shape({
    email: Yup.string()
        .email("El email es inválido")
        .required('El email es requerido'),

    password: Yup.string()
        .min(8, "La contraseña es demasiado corta")
        .required("Este campo es obligatorio"),
})

const urlLogin = 'https://payout.redromsolutions.com/login'


export const Login = () => {

    let navigate = useNavigate()

    


    const handleSubmit = async (values) => {   
        console.log('Formulario enviado:', values) 
        fetch(urlLogin, {
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
            if (data.jwtToken) { // Verifica que el token exista
                const token = data.jwtToken;
                console.log('Token recibido:', token);
                const expiresAt = new Date(data.expiresAt).getTime();
                
                // Guardar token y expiración en localStorage
                localStorage.setItem('token', token);
                console.log('Token guardado en localStorage:', localStorage.getItem('token')); // Verifica si se guarda correctamente
                localStorage.setItem('expiresAt', expiresAt);
    
                navigate('/home');
            } else {
                console.log('Error: No se recibió el token.');
            }
        })
        .catch(error => {
            console.log(error);              
        });
    }

    return (
        <div className="md:py-8 lg:px-8 flex xl:gap-14 lg:gap-14 justify-center dark:bg-dark dark:text-white">
            <div className="w-full md:w-[466px] h-[90vh] lg:h-[500px] xl:h-[614px] py-11 px-8 md:px-16 bg-white md:rounded-[15px] shadow-down-dark-md">
                <h2 className="text-primario text-[26px] leading-[63px] text-center pb-9">¡Bienvenido a Payout!</h2>

                <Formik 
                    initialValues={{
                        email: '',
                        password: '',

                    }}
                    onSubmit={handleSubmit}
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

                
            </div>

            {/* IMAGEN */}
            <img className="hidden lg:block lg:h-[500px]  xl:h-[614px]  2xl:h-[614px]" src={image} alt="" />
        </div>
    );
};