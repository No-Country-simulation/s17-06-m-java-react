import { useNavigate } from "react-router-dom";

import { FlechaTriangulitoBack } from '../icons/flechaTriangulitoBack';
import Ask from '../icons/Ask';
import  notif  from '../../assets/Notificaciones.png'
import  Whatsapp  from '../../assets/whatsapp.svg'
import  iconoenviar  from '../../assets/iconoenviar.svg'

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import InputField from "../../authentication/components/InputField";
import CustomButton from "../../authentication/components/CustomButton";

/* import InputField from "../components/InputField" */



const schema = Yup.object().shape({
    nombre: Yup.string()
                .min(2, "El nombre es demasiado corto")
                .max(30, "Máximo 40 caracteres"),
    email: Yup.string()        
        .required("Este campo es obligatorio"),
    telefono: Yup.string()
        .matches(/^[0-9]+$/, 'El teléfono solo debe contener números')
        .required('El teléfono es obligatorio'),
    asunto: Yup.string()
                .min(2, "El nombre es demasiado corto")
                .max(40, "Máximo 40 caracteres"),
})


export const Contacto = () => {

    const navigate = useNavigate()


    const handleSubmit = async (values) => {   
        console.log('Formulario enviado:', values)         
    }



    return (
        <div className="md:py-8">
        {/* BANNER MOBILE*/}        
        <div id='div-total-banner' className='py-4 md:hidden flex justify-between items-center w-full'>
            <section className='flex'>
                <button onClick={()=>navigate('/help')} className='flex text-white whitespace-nowrap font-semibold'>
                    <p className='w-6 h-6 absolute left-2 flex items-center'>
                        <span className='left-7 absolute'>Chatear con Payout</span>
                        <FlechaTriangulitoBack/>
                    </p>
                </button>
                <div className='absolute right-4 flex gap-4'>
                    <img src={notif} className='w-[24px] h-[24px] items-center' alt="" />
                    <p className='text-white '>
                        <Ask/>
                    </p>
                </div>
            </section>
        </div>

        <section className='w-full flex flex-col items-center justify-center h-[90vh] md:h-full px-6 md:px-10'>        

            {/* CUERPO HOME */}
            <div id='cuerpo-vista-home' className='w-full'>                


                {/* TARJETA */}
                <div id='tarjeta-perfil' className='px-5 py-6 w-full bg-grisclaro text-black flex flex-col justify-center items-center gap-4 mb-5'>  
                    
                    <p className='text-primario font-bold'>¿Cómo podemos ayudarte?</p>
                    <p className='pb-3 font-semibold text-sm'>Hablemos por Whatsapp</p>                        
                    <button className="py-3 px-4 bg-verdefluo rounded-full text-white shadow-down-dark-md flex gap-2 items-center">
                        <img src={Whatsapp} alt="" />
                        <p>Escribenos por Whatsapp</p>
                    </button>
                    <p className="pt-8 text-center font-semibold text-sm">También podemos comunicarnos por correo electronico</p>
                    <div className="py-8 bg-celesteform rounded-3xl w-full md:w-[500px] flex flex-col items-center justify-center">
                        <Formik 
                        initialValues={{
                            nombre: '',
                            email: '',
                            telefono: '',
                            asunto: ''

                        }}
                        onSubmit={(values, { resetForm }) => {
                            handleSubmit(values);
                            resetForm();  // Resetea los campos del formulario
                        }}
                        validationSchema={schema}
                    >
                        {({ isValid, dirty }) => (
                            <Form className="flex flex-col gap-4 w-full px-6">

                                {/* INPUT NOMBRE */}
                                <Field placeholder="Nombre completo*" className="w-full text-black m-0 py-3  md:py-1.5 pl-4 border border-grisclaro rounded-full text-sm shadow-down-dark-md" type="text" name="nombre" />
                                <ErrorMessage name="nombre" component="p" className='text-red-500' />
                                

                                {/* INPUT EMAIL */}
                                <Field placeholder="Email*" className="w-full text-black m-0 py-3  md:py-1.5 pl-4 border border-grisclaro rounded-full text-sm shadow-down-dark-md" type="email" name="email" />
                                <ErrorMessage name="email" component="p" className='text-red-500' />
                                

                                {/* INPUT TELEFONO */}
                                <Field placeholder="Teléfono*" className="w-full text-black m-0 py-3  md:py-1.5 pl-4 border border-grisclaro rounded-full text-sm shadow-down-dark-md" type="text" name="telefono" />
                                <ErrorMessage name="telefono" component="p" className='text-red-500' />

                                {/* INPUT ASUNTO */}
                                <Field placeholder="Asunto*" className="w-full text-black m-0 py-3  md:py-1.5 pl-4 border border-grisclaro rounded-full text-sm shadow-down-dark-md" type="text" name="asunto" />
                                <ErrorMessage name="asunto" component="p" className='text-red-500' />
                                
                                {/* BOTON SUBMIT */}
                                <button type="submit" className="flex justify-between items-center py-3 px-4 bg-verde text-white text-m rounded-full font-semibold shadow-down-dark-md" >
                                    <p>Enviar correo</p>
                                    <img src={iconoenviar} alt="" />
                                </button> 
                            </Form>
                        )}
                    </Formik>
                    </div>

                    
                </div>                 

            </div>            
        </section>
        </div>
        
    );
}