import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'

import  google  from '../../assets/google.png'
import  apple  from '../../assets/apple.png'
import  image  from '../../assets/Signup-imagen.png'


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
    <div className="h-[100dvh] py-0 md:py-36 bg-secundario flex gap-14 justify-center">
        <div className="w-[466px] h-[100dvh] md:h-[614px] py-11 px-16 bg-white rounded-[15px] shadow-down-dark-md">
            <h2 className="text-primario text-[26px] font-semibold font-['Montserrat'] leading-[63px] text-center pb-11">¡Bienvenido a Payout!</h2>

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
                       
                        <Field placeholder="Email" className="py-2.5 pl-4 border border-primario rounded-lg text-sm" type="email" name="email"/>
                        <ErrorMessage name="email" component="p"/>

                       
                        <Field placeholder="contraseña" className="py-2.5 pl-4 border border-primario rounded-lg text-sm" type="text" name="password"/>
                        <ErrorMessage name="password" component="p"/>

                       

                        <div className="flex items-center space-x-2">
                            <label className="text-xs" htmlFor="Olv">
                            ¿Olvidaste tu Contraseña? <a className="text-celeste" href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">Recuperar Contraseña</a>
                            </label>
                            
                        </div>
                        

                        <button type="submit" className="w-full py-3.5 px-4 bg-primario text-white rounded-lg text-xl font-['Montserrat'] font-semibold hover:bg-primario-hover focus:outline-none focus:bg-primario-hover" disabled={!isValid || !dirty}>Iniciar Sesion</button>

                        <div className="flex items-center space-x-2">
                            <label className="text-xs" htmlFor="Olv">
                            ¿aun no tienes cuenta? <a className="text-celeste" href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">Registrate</a>
                            </label>
                            
                        </div>
                    </Form>
                    )}
                </Formik>

                <div className="flex flex-col gap-4 items-center">
                    <p className="mt-4 text-sm">O continuar con: </p>
                    <div className="g-apple-buttons flex gap-3">
                        <button className="border border-primario rounded-lg py-2.5 px-3.5"><img className="w-[32px] h-[32px]" src={google} alt="" /></button>
                        <button className="border border-primario rounded-lg py-2.5 px-3.5"><img className="w-[32px] h-[32px]" src={apple} alt="" /></button>                        
                    </div>
                    
                </div>


                
        </div>
        <img className="h-[614px] hidden md:block" src={image} alt="" />
    </div>
  );
};