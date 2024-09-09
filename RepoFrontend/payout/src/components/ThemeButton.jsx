import { useState, useEffect } from 'react';

/**
 * Componente ThemeButton
 * 
 * Este componente representa un botón de alternancia (toggle) para activar y desactivar el tema de la página por defecto (dark mode). 
 * El estado del botón cambia su apariencia visual y ejecuta las funciones `onActivate` y `onDeactivate` según su estado.
 * 
 * @component
 * @param {Object} props - Propiedades que recibe el componente.
 * @param {function} props.onActivate - Función que se ejecuta cuando el botón es activado (el estado del toggle es verdadero).
 * @param {function} props.onDeactivate - Función que se ejecuta cuando el botón es desactivado (el estado del toggle es falso).
 * @returns {JSX.Element} Un botón de alternancia que activa o desactiva una funcionalidad según su estado.
 * 
 * @example
 * // Ejemplo de uso con funciones de activación y desactivación de tema
 * <ThemeButton 
 *   onActivate={() => console.log("Tema activado")} 
 *   onDeactivate={() => console.log("Tema desactivado")} 
 * />
 */


export const ThemeButton = ({ onActivate, onDeactivate }) => {
    const [isToggled, setIsToggled] = useState(false);

    /**
   * Maneja el evento de clic para alternar el estado del botón.
   * Si el nuevo estado es activado, se llama a `onActivate`. Si es desactivado, se llama a `onDeactivate`.
   */

    /* useEffect(() => {
        onDeactivate();
      }, [onDeactivate]); */
      
      const handleToggle = () => {
        setIsToggled((prevState) => {
          const newState = !prevState;
          const htmlElement = document.body
          if (isToggled) {
              htmlElement.classList.add('dark');
              onActivate(); // Si tienes alguna función para activar
          } else {
              htmlElement.classList.remove('dark');
              onDeactivate(); // Si tienes alguna función para desactivar
          }
          return newState;
        }, [isToggled]) //Se ejecuta cada vez que cambia a toggle
      }
      
    return (
      <div className='relative'>
        <button
        onClick={handleToggle}
        className={`w-16 h-8 flex items-center rounded-full p-1 duration-300 ease-in-out absolute top-0 right-7 mt-2 mr-2 ${
          isToggled ? 'bg-verde' : 'bg-primario'
        }`}
        
        
      >
        <div
          className={` w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
            isToggled ? 'translate-x-8 bg-primario' : 'bg-verde'
          }`}
          
        ></div>
      </button>
      </div>
    );
};