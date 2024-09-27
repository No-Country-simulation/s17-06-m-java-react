import { ErrorMessage, useField } from 'formik';
import { useState } from 'react';
import { Ojovisible } from '../../components/icons/Ojovisible';
import { Ojotachado } from '../../components/icons/Ojotachado';

/**
 * Componente PasswordField
 * 
 * Este componente crea un campo de entrada (`input`) especializado para contraseñas, 
 * utilizando Formik para la integración con formularios y permitiendo la funcionalidad
 * de mostrar/ocultar la contraseña.
 * 
 * @component
 * @param {Object} props - Propiedades que recibe el componente.
 * @param {string} props.label - Etiqueta opcional que describe el campo de contraseña.
 * @param {string} props.name - El nombre del campo en el formulario, necesario para que Formik maneje el estado del campo.
 * @param {string} [props.placeholder] - Texto de placeholder dentro del campo.
 * @param {string} [props.className] - Clases CSS adicionales para personalizar el estilo del campo.
 * @returns {JSX.Element} Un campo de contraseña con la opción de mostrar/ocultar el valor ingresado y manejo de errores de validación.
 * 
 * @example
 * // Ejemplo de uso dentro de un formulario con Formik
 * <Formik initialValues={{ password: '' }} onSubmit={...} validationSchema={...}>
 *   <Form>
 *     <PasswordField 
 *       name="password" 
 *       placeholder="Ingresa tu contraseña"
 *     />
 *   </Form>
 * </Formik>
 */

const PasswordField = ({ label, ...props }) => {
  const [field] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

    /**
   * Alterna la visibilidad de la contraseña.
   */

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        {...field}
        {...props}
        type={showPassword ? 'text' : 'password'}
        className="custom-field w-full"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="text-gray-500 absolute top-0 right-0 flex items-center px-3 py-3"
      >
        {showPassword ? (
          <Ojovisible/>
        ) : <Ojotachado/>}
      </button>
      <ErrorMessage name={field.name} component="p" className="custom-error-message" />
    </div>
  );
};

export default PasswordField;