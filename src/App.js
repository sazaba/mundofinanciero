import React from 'react'
import Formulario from './Formulario'
import PaginaPrincipal from './PaginaPrincipal'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Admin from './Admin';
import Login from './Login';
import Campus from './Campus';
import MenuResponsive from './MenuResponsive';
import Clase from './Clase';
import CloseIcon from '@mui/icons-material/Close';
import logo from './Images/logofinanciero.png'
import Convenios from './Convenios';



function App() {
  
  return (
    <div>
      <Router > 
       <Routes >
       <Route path='/' element={<PaginaPrincipal/>}/>
       <Route path='/formulario/*' element={<Formulario logo = {logo}/>}/>
       <Route path='/admin/*' element={<Admin/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/menuResponsive' element={<MenuResponsive icon={<CloseIcon sx={[
        {'&:hover': {
          color: '#3b5998',
          transition: '1s',
          transform: 'scale(1.5)',
          
        }
        },
        { fontSize: 30, color:'white', position:'absolute', top:'0',right:'0', margin:'20px' }]}/>} />}/>
       <Route path='/formulario/menuResponsive' element={<MenuResponsive icon={<CloseIcon sx={[
        {'&:hover': {
          color: '#3b5998',
          transition: '1s',
          transform: 'scale(1.5)',
          
        }
        },
        { fontSize: 50, color:'white', position:'absolute', top:'0',right:'0', margin:'20px' }]}/>} />}/>
       <Route path='/campus/*' element={<Campus icon={<CloseIcon sx={[
        {'&:hover': {
          color: '#3b5998',
          backgroundColor: 'white',
          transition: '1s',
          transform: 'scale(1.5)'
        }
        },
        { fontSize: 30, mr: '50px'}]}/>}/>}/>


        <Route path='/convenios/*' element={<Convenios icon={<CloseIcon sx={[
        {'&:hover': {
          color: '#3b5998',
          backgroundColor: 'white',
          transition: '1s',
          transform: 'scale(1.5)'
        }
        },
        { fontSize: 30, mr: '50px'}]}/>}/>}/>








       <Route path='/about/*' element={<Clase icon={<CloseIcon sx={[
        {'&:hover': {
          color: '#3b5998',
          backgroundColor: 'white',
          transition: '1s',
          transform: 'scale(1.5)'
        }
        },
        { fontSize: 30, mr: '50px' }]}/>}/>}/>


        </Routes>
      </Router>
    </div>
  )
}

export default App