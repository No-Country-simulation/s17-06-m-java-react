import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import  notif  from '../assets/Notificaciones.png'
import  userimage  from '../assets/userimage.png'
import  addUser  from '../assets/AddUser.png'

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'









const schema = Yup.object().shape({
    nombres: Yup.string()
                .min(2, "El nombre es demasiado corto")
                .max(30, "Máximo 40 caracteres"),
                /* .required("Este campo es obligatorio"), */
    apellidos: Yup.string()
    .min(2, "El nombre es demasiado corto")
    .max(30, "Máximo 40 caracteres")
    /* .required("Este campo es obligatorio") */,
    telefono: Yup.string()
        .matches(/^[0-9]+$/, 'El teléfono solo debe contener números')
        /* .required('El teléfono es obligatorio') */,
    direccion: Yup.string()
    .min(2, "El nombre es demasiado corto")
    .max(50, "Máximo 40 caracteres")
    /* .required("Este campo es obligatorio") */,
    email: Yup.string()                
                .email("El email es inválido")
                /* .required("Este campo es obligatorio") */,    
    username: Yup.string()
    .min(2, "El nombre es demasiado corto")
    .max(40, "Máximo 40 caracteres")
    /* .required("Este campo es obligatorio") */,                
})

const urlInfoUserLogged = 'https://payout.redromsolutions.com/user/0'
const urlInfoUserModified = 'https://payout.redromsolutions.com/user'




export const Perfil = () => {

    const [initialValues, setInitialValues] = useState({
        nombres: '',
        apellidos: '',
        telefono: '',
        direccion: '',
        email: ''        
    });    

    
    const navigate = useNavigate()
    


      /* FETCH PARA TRAER LA INFO DE BASE DE DATOS Y LLENAR LOS CAMPOS */
    useEffect(() => {
        fetch(urlInfoUserLogged, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(data => data.json())
            .then(data => {
                const userData = data.data[0];
                console.log('data perfil', data)
                if (userData.userDetail) {
                    setInitialValues({
                        nombres: userData.userDetail.name,
                        apellidos: userData.userDetail.lastName,
                        telefono: userData.phone,
                        direccion: userData.userDetail.address,
                        email: userData.email                    
                    });
                } else {
                    setInitialValues({                        
                        email: userData.email                    
                    });
                }

                /* setInitialValues({
                    nombres: userData.userDetail.name,
                    apellidos: userData.userDetail.lastName,
                    telefono: userData.phone,
                    direccion: userData.userDetail.address,
                    email: userData.email                    
                }); */
            });
    }, []);



      /* const handleChangeInput = (e) => {
        setForm(prevForm => ({
          ...prevForm,
          [e.target.name]: e.target.value || ""
        }))
      } */



        /* HANDLE SUBMIT */
        const handleSubmit = async (values) => {
            console.log('FUNCIONA', values);  
            fetch(urlInfoUserModified, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    email: values.email,
                    phone: values.telefono,
                    userDetail: {
                        address: values.direccion,
                        name: values.nombres,
                        lastName: values.apellidos
                    },
                }),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log('Actualización exitosa', data); 
                /* navigate('/home'); */
            })
            .catch(error => {
                console.log('Error en la actualización:', error);
            });
        };



    /* CONSOLE LOG PARA VER QUE TOMA LOS CAMBIOS DEL TECLADO */
    /* useEffect(() => {
        console.log('Formulario enviado:', form)        
    }, [form]); */
    




    return (
        <section className='px-4 md:px-10 md:pt-10 w-full dark:bg-dark dark:text-white'>

       

            {/* CUERPO HOME */}
            <div id='cuerpo-vista-home' className='py-6 pb-10 px-3'>


                {/* TARJETA PERFIL */}
                <div id='tarjeta-perfil' className='py-6 md:py-10 pb-10 md:pb-20 w-full bg-grisclaro rounded-md md:rounded-3xl shadow-down-dark-md'>
                    <div className='pl-5 md:pl-16 flex h-[50px] gap-4 mb-6'>
                        {/* ICONO FOTO, TITULO PERFIL, TITULO DATOS PERSONALES */}
                        <div className='border-2 border-primario pb-2.5 rounded-lg'>
                            <img className='pl-2.5 mt-1 mb-10 h-full' src={addUser} alt="" />
                        </div>

                        <div id='texto' className='flex flex-col text-start pt-1 md:pt-3'>
                            <h2 className='text-primario text-base'>Perfil</h2>
                            <p className='text-black font-semibold'>Datos personales</p>
                        </div>
                    </div>

                    {/* FORMULARIO */}
                    <div className='pt-6 flex gap-6 justify-center w-full '>
                        <Formik
                            initialValues={initialValues}
                            enableReinitialize={true}
                            onSubmit={handleSubmit}
                            validationSchema={schema}
                        >
                            {({  values, handleChange, handleSubmit }) => (
                                    <Form className="flex flex-col gap-1 md:gap-4 w-full px-6 md:w-auto" onSubmit={handleSubmit}>
                                        <div className='block md:flex gap-6 w-full'>
                                            <div id='nombres' className='px-1 pt-1 md:pt-0'>
                                                <p className='text-black text-start p-0'>Nombres</p>
                                                <Field className="w-full md:w-[300px] text-black m-0 py-1  md:py-1.5 pl-4 border border-gris rounded-lg text-sm" type="text" name="nombres" />
                                                <ErrorMessage name="nombres" component="p" className='text-red-500' />
                                            </div>
                                            <div id='apellidos' className='px-1 pt-2 md:pt-0'>
                                                <p className='text-black text-start p-0'>Apellidos</p>
                                                <Field className="w-full md:w-[300px] text-black m-0 py-1  md:py-1.5 pl-4 border border-gris rounded-lg text-sm" type="text" name="apellidos" />
                                                <ErrorMessage name="apellidos" component="p" className='text-red-500' />
                                            </div>
                                        </div>
            
                                        <div className='block md:flex gap-6 w-full'>
                                            <div id='telefono' className='px-1 pt-1 md:pt-0'>
                                                <p className='text-black text-start p-0'>Teléfono</p>
                                                <Field className="w-full md:w-[300px] text-black m-0 py-1  md:py-1.5 pl-4 border border-gris rounded-lg text-sm" type="text" name="telefono" />
                                                <ErrorMessage name="telefono" component="p" className='text-red-500' />
                                            </div>
                                            <div id='email' className='px-1 pt-1 md:pt-0'>
                                                <p className='text-black text-start p-0'>Email</p>
                                                <Field className="w-full md:w-[300px] text-black m-0 py-1  md:py-1.5 pl-4 border border-gris rounded-lg text-sm" type="email" name="email" />
                                                <ErrorMessage name="email" component="p" className='text-red-500' />
                                            </div>
                                        </div>
            
                                        <div className='block md:flex gap-6 w-full'>
                                            <div id='direccion' className='px-1 pt-2 md:pt-0'>
                                                <p className='text-black text-start p-0'>Dirección</p>
                                                <Field className="w-full md:w-[300px] text-black m-0 py-1  md:py-1.5 pl-4 border border-gris rounded-lg text-sm" type="text" name="direccion" />
                                                <ErrorMessage name="direccion" component="p" className='text-red-500' />
                                            </div>                                            
                                        </div>
            
                                        
                                        {/* botones dentro de la tarjeta perfil*/}
                                        <div className='mt-8 flex gap-4 items-center justify-end '>
                                            <p className='text-black' /* onClick={resetForm} */>Cancelar</p>
                                            <button type="submit" className="py-1 px-4 bg-verde text-white rounded-lg text-base font-semibold hover:bg-primario-hover focus:outline-none focus:bg-primario-hover" >Guardar</button>
                                        </div>
                                    </Form>
                            )}
                        </Formik>
                    </div>
                </div> 
            </div>            
        </section>
    );
}

