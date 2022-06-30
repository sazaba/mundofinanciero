import React, { useEffect, useState } from 'react'
import './Login.css'
import {auth} from './firebase-config'
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { useNavigate } from "react-router-dom";






function Login() {
    
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [user, setUser] = useState({});
    const navigate = useNavigate()

    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            console.log(user)
        })
    },[])
    

    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            if(user){
                navigate('/admin/*')
            }
        } catch(error){
            console.log(error.message)
        }
    }
   
    const clearFields = () =>{
        document.getElementById("inputUser").value = "";
        document.getElementById("inputPass").value = "";
      }
  return (
    <div className='login'>
    <div className='inputBox'>
        <h3>Iniciar Sesion</h3>
        <input id='inputUser' className='inputLogin' placeholder='Usuario' onChange={(event) => {
            setLoginEmail(event.target.value);
        }}/>
        <input id='inputPass' className='inputLogin' placeholder='Contraseña' onChange={(event) => {
            setLoginPassword(event.target.value);
        }}/>
        <br/>
           <button onClick={()=>{login();clearFields()}} className='button-18'  type='submit'>Iniciar Sesion</button>          
        
              
        
           
        
        </div>
    </div>
  )
}

export default Login