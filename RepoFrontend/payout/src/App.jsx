
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate, redirect } from "react-router-dom"
import { SignUp } from './components/signUp/SignUp';


function App() { 

  return (
    <>
    <h1 className='text-red-500'>hola</h1>
      <BrowserRouter>
          <Routes>
              <Route
                    path="/register" element={
                      <div>
                        <SignUp/>
                      </div>
                    }
                  />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
