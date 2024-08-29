
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate, redirect } from "react-router-dom"
import { SignUp } from './components/signUp/SignUp';
import { Login } from "./components/Login/Login"


function App() { 

  return (
    <>    
      <BrowserRouter>
          <Routes>
              <Route
                    path="/register" element={
                      <div>
                        <SignUp/>
                        <Login />
                      </div>
                    }
                  />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
