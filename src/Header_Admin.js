import React, { useEffect, useState } from 'react'
import './Header_Admin.css'
import logo from './Images/logofinanciero.png'
import {auth} from './firebase-config'
import {onAuthStateChanged, signOut} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';





function Header_Admin() {
    const [user, setUser] = useState({});
    const navigate = useNavigate()

    if(user){
      console.log(user)
    }else{
      navigate('/login')
    }

    useEffect(()=>{
      onAuthStateChanged(auth, (currentUser) =>{
          setUser(currentUser)
      })
      
  },[])

   const logout = async () => {
        await signOut(auth);
          navigate('/login')
    
    }
    
    
  
  return (
    <div className='header2'>
    <img className='header__logo2' src={logo} alt='logo'/>
    <div className='header__nav2'>
     <p>Bienvenido al Panel Administrativo | Guillermo</p>

     
     <button onClick={logout} className='button-19'  type='submit'>Cerrar Sesion</button>
     
      </div>
    </div>
  )
}

export default Header_Admin