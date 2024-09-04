import './App.css'
import './index.css'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/footer/Footer';



function App() {

  return (
    <>
      <div className="flex flex-col h-screen">
<<<<<<< HEAD
        <Navbar />        
          <Outlet />
=======
        <Navbar />
        <div className=' grow'>
            <Outlet/>
            </div>    
>>>>>>> 9b605ae2929cc531200c91cc9171aa3b4d38ecb6
        <Footer/>
      </div>

    </>
  )
}

export default App;