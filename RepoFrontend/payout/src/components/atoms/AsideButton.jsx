import inicioIcon from './assets/house.svg';
import creditCardIcon from './assets/credit-card.svg';
import userIcon from './assets/user.svg';
import ayudaIcon from './assets/help-circle.svg';
import loginIcon from './assets/log-in.svg';

/**
 * Array de opciones que contiene los íconos y nombres para el menú lateral.
 * Cada opción tiene un identificador único, una imagen y un nombre que describe la acción o sección.
 */

export const options = [
    {
        id: 1, 
        image: inicioIcon,
        name: 'Inicio',
        path:'/home'
    },
    {
        id: 2,
        image: creditCardIcon,
        name: 'Cuenta',
        path:'/cuenta'
    },
    {
        id: 3,
        image: userIcon,
        name: 'Perfil',
        path: '/prevperfil',
    },
    {
        id: 4,
        image: ayudaIcon,
        name: 'Ayuda',
        path: '/help'
    },
    {
        id: 5,
        image: loginIcon,
        name: 'Cerrar sesión'
       
    }
];

/**
 * Componente AsideButton
 * 
 * Renderiza un botón en una lista que puede mostrar un ícono y un texto. Cambia de estilo según si está 
 * seleccionado o no y dispara una acción al hacer clic, redirigiendo al usuario a una sección específica de la página.
 * 
 * @component
 * @param {Object} props - Propiedades que recibe el componente
 * @param {string} props.image - Referencia a la URL de la imagen del ícono a mostrar junto al texto
 * @param {string} props.text - Texto que se mostrará junto al ícono
 * @param {boolean} props.isSelected - Determina si el botón está seleccionado, lo que cambiará su estilo
 * @param {function} props.onClick - Función que se ejecutará cuando se haga clic en el botón
 * @returns {JSX.Element} Un botón estilizado con un ícono y texto, que puede ser seleccionado o no.
 * 
 * @example
 * // Ejemplo de uso
 * <AsideButton 
 *   image={inicioIcon} 
 *   text="Inicio" 
 *   isSelected={true} 
 *   onClick={() => console.log('Inicio seleccionado')} 
 * />
 */

const AsideButton = ({ image, text, isSelected, onClick }) => {

return (
    <li className='list-none'>
      <button onClick={onClick} // Agregamos el evento onClick 
      className={`flex items-center gap-2 px-4 py-2 w-3/4 text-left flex justify-start font-extrabold hover:bg-grisclaro hover:rounded-3xl
        ${isSelected
          ? "bg-white text-black font-semibold rounded-3xl shadow-md hover:bg-grisclaro focus:outline-none focus:ring-5 focus:ring-gris focus:ring-opacity-50"
          : "text-black" // Sin diseño para no seleccionado
      }`}>
        {image && <img className='h-5 w-5' src={image} alt={text} />}
        <span class='px-2 py-1'>{text}</span>
      </button>
    </li>
    );
};

export default AsideButton;