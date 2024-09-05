import { useState, useEffect } from 'react';


export const ThemeButton = ({ onActivate, onDeactivate }) => {
    const [isToggled, setIsToggled] = useState(false);

    /* useEffect(() => {
        onDeactivate();
      }, [onDeactivate]); */
      
      const handleToggle = () => {
        setIsToggled((prevState) => {
          const newState = !prevState;
          if (newState) {
            onActivate();
          } else {
            onDeactivate();
          }
          return newState;
        });
      };
  
    return (
      <button
        onClick={handleToggle}
        className={`w-16 h-8 flex items-center rounded-full p-1 duration-300 ease-in-out ${
          isToggled ? 'bg-verde' : 'bg-primario'
        }`}
        
        
      >
        <div
          className={` w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
            isToggled ? 'translate-x-8 bg-primario' : 'bg-verde'
          }`}
          
        ></div>
      </button>
    );
};