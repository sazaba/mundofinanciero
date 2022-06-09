import React from 'react'
import Formulario from './Formulario'
import PaginaPrincipal from './PaginaPrincipal'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';



function App() {
  
  return (
    <div>
      <Router> 
       <Routes >
       <Route path='/' element={<PaginaPrincipal/>}/>
       <Route path='/formulario' element={<Formulario/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App