import './CustomButton.css'
import { useNavigate } from 'react-router-dom';

/**
 * Componente CustomButton
 * 
 * Renderiza un botón personalizado que redirige al usuario a una página de login o signup 
 * dependiendo del tipo de acción especificada. El botón utiliza estilos personalizados 
 * definidos en un archivo CSS externo.
 * 
 * @component
 * @param {Object} props - Propiedades que recibe el componente
 * @param {string} props.texto - Texto a mostrar en el botón
 * @param {string} props.className - Clases CSS adicionales para personalizar el estilo del botón
 * @param {string} props.type - Define el tipo de acción del botón, puede ser 'login' o cualquier otro valor que redirige a 'signup'
 * @returns {JSX.Element} Un botón personalizado que redirige a la página de login o signup.
 * 
 * @example
 * // Ejemplo de uso para botón de login
 * <CustomButton 
 *   texto="Iniciar Sesión" 
 *   className="btn-login" 
 *   type="login" 
 * />
 * 
 * @example
 * // Ejemplo de uso para botón de signup
 * <CustomButton 
 *   texto="Registrarse" 
 *   className="btn-signup" 
 *   type="signup" 
 * />
 */

const CustomButton = ({ texto, className, type }) => {
  const navigate = useNavigate();

    /**
   * Función que maneja el clic del botón, redirigiendo al usuario
   * a la página correspondiente según el tipo ('login' o 'signup').
   */

  const handleClick = () => {
    const url = type === 'login' ? '/login' : '/signup';
    navigate(url);
  }

  return (
    <button onClick={handleClick} class={`custom-button ${className}`}><p className='text-lg'>{texto}</p></button>
  )
}

export default CustomButton;