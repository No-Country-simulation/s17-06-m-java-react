import { ErrorMessage, useField } from 'formik';

/**
 * Componente InputField
 * 
 * Este componente crea un campo de entrada (`input`) personalizado, utilizando las funcionalidades
 * proporcionadas por Formik para manejar formularios. También muestra un mensaje de error si 
 * existe un error en el campo, basado en las validaciones de Formik.
 * 
 * @component
 * @param {Object} props - Propiedades que recibe el componente
 * @param {string} props.name - El nombre del campo de formulario, utilizado para enlazar el campo con Formik
 * @param {string} [props.type] - Tipo de input (e.g., "text", "password", "email"), por defecto "text"
 * @param {string} [props.placeholder] - Texto de marcador de posición que aparece dentro del campo
 * @param {string} [props.className] - Clases CSS adicionales para estilizar el campo
 * @returns {JSX.Element} Un campo de entrada con validación y mensajes de error.
 * 
 * @example
 * // Ejemplo de uso dentro de un formulario manejado por Formik
 * <Formik initialValues={{ email: '' }} onSubmit={...} validationSchema={...}>
 *   <Form>
 *     <InputField 
 *       name="email" 
 *       type="email" 
 *       placeholder="Ingresa tu email" 
 *       className="input-email"
 *     />
 *   </Form>
 * </Formik>
 */

const InputField = ({ ...props }) => {
    const [field] = useField(props);

    return (
        <div className='relative'>
            <input
                {...field}
                {...props}
                className="custom-field w-full"
            />
            <ErrorMessage name={field.name} component="p" className="custom-error-message" />
        </div>
    );
};

export default InputField;