import inicioIcon from './assets/house.svg';
import creditCardIcon from './assets/credit-card.svg';
import userIcon from './assets/user.svg';
import ayudaIcon from './assets/help-circle.svg';
import loginIcon from './assets/log-in.svg';


export const options = [
    {
        id: 1, 
        image: inicioIcon,
        name: 'Inicio'
    },
    {
        id: 2,
        image: creditCardIcon,
        name: 'Cuenta'
    },
    {
        id: 3,
        image: userIcon,
        name: 'Perfil'
    },
    {
        id: 4,
        image: ayudaIcon,
        name: 'Ayuda'
    },
    {
        id: 5,
        image: loginIcon,
        name: 'Cerrar sesión'
    }
];

const AsideButton = ({ image, text, isSelected, onClick }) => {

return (
    <li className='list-none'>
      <button onClick={onClick} // Agregamos el evento onClick 
      className={`flex items-center gap-2 px-4 py-2 w-full text-left flex justify-start font-extrabold hover:bg-grisclaro hover:rounded-3xl
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