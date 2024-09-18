import React from 'react'

const ActivityButton = ({  text, isSelected, onClick }) => {
  return (
    <li className='list-none'>
      <button onClick={onClick} // Agregamos el evento onClick 
      className={`flex items-center gap-2 px-2 py-1 w-full text-left flex justify-start font-extrabold  hover:rounded-3xl
        ${isSelected
          ? "bg-primario text-white font-semibold rounded-3xl shadow-md focus:outline-none "
          : "bg-white  text-black font-semibold rounded-3xl shadow-md hover:bg-grisclaro focus:outline-none focus:ring-5 focus:ring-gris focus:ring-opacity-50" // Sin diseño para no seleccionado
      }`}>
        
        <span class='px-2 py-1 text-xs md:text-m'>{text}</span>
      </button>
    </li>
  )
}

export default ActivityButton