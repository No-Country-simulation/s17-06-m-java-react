
import './App.css'
import './index.css'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/footer/Footer';



function App() {

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        
            <Outlet />
              
        <Footer/>
      </div>
    </>
  )
}

export default App
