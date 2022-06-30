import React, { useState, useEffect } from 'react'
import {db} from './firebase-config'
import { collection, getDocs, deleteDoc, doc }  from 'firebase/firestore'
import './Admin.css'
import Header_Admin from './Header_Admin';

function Admin() {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, 'users')
    useEffect(()=>{
        const getUsers = async () =>{
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id })))
        }
        getUsers()
    },);
    const deleteUser = async(id) =>{
        const userDoc = doc(db, 'users', id)
        await deleteDoc(userDoc)
    }


  return (
    
    <div className='admin'>
      <Header_Admin/>
          
        {users.map((user)=>{
            return <div className='admin__card'>
                <p> <strong>Nombre:</strong> {user.Nombre}</p>
                <p> <strong>Apellido:</strong> {user.Apellido}</p>
                <p> <strong>Cedula:</strong> {user.Cedula}</p>
                <p> <strong>Celular:</strong> {user.Celular}</p>
                <p> <strong>Actividad Economica:</strong> {user.Actividad_Economica}</p>
                <p> <strong>Ingresos Mensuales:</strong> {user.Ingresos_Mensuales}</p>
                <p> <strong>Edad:</strong> {user.Edad}</p>
                <p> <strong>Ciudad:</strong> {user.Ciudad}</p>
               <button className='btn__admin' onClick = {()=>{deleteUser(user.id)}}>Borrar Formulario</button>
            </div>
        })}
    </div>
  )
}

export default Admin