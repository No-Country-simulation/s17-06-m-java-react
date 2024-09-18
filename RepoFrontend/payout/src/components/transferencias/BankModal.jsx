
export const BankModal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full" onClick={onClose}>
        <div className="bg-grisclaro p-4 rounded-lg" onClick={(e) => e.stopPropagation()}>
            <button className="bg-primario text-white font-semibold px-2 rounded-md shadow-md shadow-primario-300" onClick={onClose}>X</button>
            {children}
        </div>
    </div>
  )
}

export default BankModal;