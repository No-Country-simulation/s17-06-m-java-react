import './CustomButton.css'

const CustomButton = ({ texto }) => {
  return (
    <button type="submit" className="custom-button">{texto}</button>
  )
}

export default CustomButton;