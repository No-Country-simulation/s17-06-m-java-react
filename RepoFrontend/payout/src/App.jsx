
import './App.css'
import './index.css'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';



function App() {

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App
