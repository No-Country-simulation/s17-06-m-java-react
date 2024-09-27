import { useState, useEffect, useCallback } from 'react';

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
  const isToggled = localStorage.getItem('theme') === 'light';

  /**
 * Maneja el evento de clic para alternar el estado del botón.
 * Si el nuevo estado es activado, se llama a `onActivate`. Si es desactivado, se llama a `onDeactivate`.
  */
  const handleToggle = useCallback(() => {
      const newState = !isToggled;
      const htmlElement = document.documentElement;

      if (newState) {
        htmlElement.classList.add('light');
        onActivate();
        localStorage.setItem('theme', 'light');
      } else {
        htmlElement.classList.remove('light');
        onDeactivate();
        localStorage.setItem('theme', 'dark');
      }
    }, [isToggled, onActivate, onDeactivate]);

  return (
    <div className='relative'>
      <button
        onClick={handleToggle}
        className={`w-14 h-7 xl:w-16 xl:h-8 flex items-center rounded-full p-1 duration-300 ease-in-out absolute top-0 right-1 md:right-7 md:mt-2 md:mr-2 ${isToggled ? 'bg-verde' : 'bg-primario'
          }  `}


      >
        <div
          className={`w-5 h-5 md:w-6 md:h-6 rounded-full shadow-md transform duration-300 ease-in-out ${isToggled ? 'translate-x-7 md:translate-x-8 bg-primario' : 'bg-verde'
            }`}

        ></div>
      </button>
    </div>
  );
}