import React from 'react';
import  notif  from '../assets/Notificaciones.png'
import  userimage  from '../assets/userimage.png'
import  addUser  from '../assets/AddUser.png'

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import CustomButton from "../authentication/components/CustomButton"
import InputField from "../authentication/components/InputField"
import PasswordField from "../authentication/components/PasswordField"



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



export const Perfil = () => {
    return (
        <section className='px-4 md:px-10 w-full'>

        {/* BANNER NOMBRE DE USUARIO */}

            {/* BANNER MOBILE */}
            <div id='div-total-banner' className='md:hidden flex flex-row justify-between items-center py-6 w-full'>             
                {/* FOTO Y USERNAME */}
                <div id='foto-y-username' className='flex flex-row gap-3 items-center'>
                    {/* FOTO */}
                    <div className="para-recortar-foto w-[32px] h-[32px] overflow-hidden rounded-full">
                            <img className='w-full h-full object-cover' src={userimage} alt="" />
                    </div>
                    {/* USERNAMES */}
                    <div id='texto-username' className=']'>
                        <p className="text-sm font-['Montserrat']">RAFAEL DIAZ</p>
                        <p className="text-start text-verde text-sm font-['Montserrat']">@Rafael</p>
                    </div>
                </div>
                {/* CAMPANA Y SIGNO DE PREGUNTA MOBILE */}
                <div className='flex gap-4'>
                    <img src={notif} className='md:hidden w-[24px] h-[24px] items-center' alt="" />
                    <p className='text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    </p>
                </div>
                            
            </div>


            {/* BANNER DESKTOP */}
            <div id='div-total-banner' className='hidden md:flex md:flex-row justify-between items-center py-6 border-b w-full'>
                {/* HOLA */}
                <p className="dark:text-white md:font-semibold md:text-2xl">
                    ¡Hola, Rafael!</p>
                {/* ELEMENTOS DE LA DERECHA, CAMPANA, FOTO USER Y NOMBRES */}
                <div id='elementos-de-la-derecha' className='flex flex-row gap-8 items-center justify-between '>
                    {/* CAMPANA */}
                    <img src={notif} className='hidden md:w-[24px] md:h-[24px] items-center' alt="" />
                    {/* FOTO Y USERNAME */}
                    <div id='foto-y-username' className='flex flex-row gap-3 items-center'>
                        {/* FOTO */}
                        <div className="para-recortar-foto w-[32px] h-[32px] overflow-hidden rounded-full">
                                <img className='w-full h-full object-cover' src={userimage} alt="" />
                        </div>
                        {/* USERNAMES */}
                        <div id='texto-username' className=''>
                            <p className="text-sm font-semibold">RAFAEL DIAZ</p>
                            <p className="text-verde text-sm font-['Montserrat']">@Rafael</p>
                        </div>
                    </div>                
                </div>
            </div>

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
                            initialValues={{
                                nombres: '',
                                apellidos: '',
                                telefono: '',
                                fechadenacimiento: '',
                                email: '',
                                usuario: ''
                            }}
                            onSubmit={(values) => {
                                console.log('Formulario enviado:', values);
                            }}
                            validationSchema={schema}
                        >
                            {({ isValid, dirty, submitForm, resetForm }) => (
                                <>
                                    <Form className="flex flex-col gap-1 md:gap-4 w-full px-6 md:w-auto">
                                        <div className='block md:flex gap-6 w-full'>
                                            <div id='nombres' className='px-1 pt-1 md:pt-0'>
                                                <p className='text-black text-start p-0'>Nombres</p>
                                                <Field className="w-full md:w-[360px] text-black m-0 py-1  md:py-1.5 pl-4 border border-gris rounded-lg text-sm" type="text" name="nombres" />
                                                <ErrorMessage name="nombres" component="p" className='text-red-500' />
                                            </div>

                                            <div id='apellidos' className='px-1 pt-2 md:pt-0'>
                                                <p className='text-black text-start p-0'>Apellidos</p>
                                                <Field className="w-full md:w-[360px] text-black m-0 py-1  md:py-1.5 pl-4 border border-gris rounded-lg text-sm" type="text" name="apellidos" />
                                                <ErrorMessage name="apellidos" component="p" className='text-red-500' />
                                            </div>
                                        </div>

                                        <div className='block md:flex gap-6 w-full'>
                                            <div id='telefono' className='px-1 pt-1 md:pt-0'>
                                                <p className='text-black text-start p-0'>Teléfono</p>
                                                <Field className="w-full md:w-[360px] text-black m-0 py-1  md:py-1.5 pl-4 border border-gris rounded-lg text-sm" type="text" name="telefono" />
                                                <ErrorMessage name="telefono" component="p" className='text-red-500' />
                                            </div>

                                            <div id='fechadenacimiento' className='px-1 pt-2 md:pt-0'>
                                                <p className='text-black text-start p-0'>Fecha de nacimiento</p>
                                                <Field className="w-full md:w-[360px] text-black m-0 py-1  md:py-1.5 pl-4 border border-gris rounded-lg text-sm" type="text" name="fechadenacimiento" />
                                                <ErrorMessage name="fechadenacimiento" component="p" className='text-red-500' />
                                            </div>
                                        </div>

                                        <div className='block md:flex gap-6 w-full'>
                                            <div id='email' className='px-1 pt-1 md:pt-0'>
                                                <p className='text-black text-start p-0'>Email</p>
                                                <Field className="w-full md:w-[360px] text-black m-0 py-1  md:py-1.5 pl-4 border border-gris rounded-lg text-sm" type="email" name="email" />
                                                <ErrorMessage name="email" component="p" className='text-red-500' />
                                            </div>

                                            <div id='usuario' className='px-1 pt-2 md:pt-0'>
                                                <p className='text-black text-start p-0'>Nombre de usuario - Alias</p>
                                                <Field className="w-full md:w-[360px] text-black m-0 py-1  md:py-1.5 pl-4 border border-gris rounded-lg text-sm" type="text" name="usuario" />
                                                <ErrorMessage name="usuario" component="p" className='text-red-500' />
                                            </div>
                                        </div>

                                        {/* botones dentro de la tarjeta perfil PARA MOBILE */}
                                        <div className='mt-8 flex gap-4 items-center justify-end md:hidden'>
                                            <p className='text-black'>Cancelar</p>
                                            <button type="submit" className="py-1 px-4 bg-verde text-white rounded-lg text-base font-['Montserrat'] font-semibold hover:bg-primario-hover focus:outline-none focus:bg-primario-hover" disabled={!isValid || !dirty}>Guardar</button>
                                        </div>
                                    </Form>

                                    
                                </>
                            )}
                        </Formik>
                    </div>
                </div>
                {/* fin de div tarjeta perfil */}
                

                {/* BOTONES FUERA DEL DIV PRINCIPAL PARA DESKTOP*/}
                <div className='hidden mt-4 md:flex gap-4 items-center justify-end'>
                    {/* Usamos los métodos de Formik */}
                    <p className='cursor-pointer' onClick={() => document.querySelector('form').reset()}>Cancelar</p>
                    <button id='submit' type="submit" className="py-1 px-4 bg-verde text-white rounded-lg text-base font-semibold hover:bg-primario-hover focus:outline-none focus:bg-primario-hover" onClick={(e, values) => {e.preventDefault(); document.querySelector('form').submit(); console.log(values)} } /* disabled={!isValid || !dirty} */>
                        Guardar
                    </button>
                </div>              



            </div>
           
           
        </section>
    );
}

