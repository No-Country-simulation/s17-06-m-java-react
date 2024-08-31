import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { SignUp } from './components/signUp/SignUp';
import { Login } from "./components/Login/Login";

function App() { 
  return (
    <>    
      <BrowserRouter>
        <div>
          <h1>Welcome</h1>
          <button>
            <Link to="/register">Go to Register</Link>
          </button>
          <button>
            <Link to="/login">Go to Login</Link>
          </button>
        </div>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;