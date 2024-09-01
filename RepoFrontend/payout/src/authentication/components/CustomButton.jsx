import './CustomButton.css'
import { useNavigate } from 'react-router-dom';

const CustomButton = ({ texto = '', className, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const url = type === 'login' ? '/login' : '/signup';
    navigate(url);
  }

  return (
    <button onClick={handleClick} className={`custom-button ${className}`}>{texto}</button>
  )
}

export default CustomButton;