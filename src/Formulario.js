import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { Button, TextField, } from '@mui/material'
import './Formulario.css'
import {db} from './firebase-config'
import { collection, getDocs, addDoc }  from 'firebase/firestore'
import Header from './Header'
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function Formulario({logo}) {

    // const [tableData, setTableData] = useState([])
    const navigate = useNavigate()
    const [newName, setNewName] = useState('')
    const [newLastName, setNewLastName] = useState('')
    const [newId, setNewId] = useState(0)
    const [newPhone, setNewPhone] = useState(0)
    const [newEconomic, setNewEconomic] = useState('')
    const [newIncome, setNewIncome] = useState(0)
    const [newAge, setNewAge] = useState(0)
    const [newCity, setNewCity] = useState('')
    const usersCollectionRef = collection(db, 'users')  
    const swal = require('sweetalert')
    
  const clearFields = () =>{
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    document.getElementById("input5").value = "";
    document.getElementById("input6").value = "";
    document.getElementById("input7").value = "";
    document.getElementById("input8").value = "";
  }
  const createUser = async ()=>{

    if(newName === '' || newLastName === '' || newId === '' || newPhone === '' || newEconomic === '' || newIncome === '' || newAge === '' || newCity === ''){
      errorForm()
    }else{
      mostrarAlerta()
      await addDoc(usersCollectionRef, {Nombre: newName, Apellido: newLastName, Cedula: newId, Celular: newPhone, Actividad_Economica: newEconomic, Ingresos_Mensuales: newIncome, Edad: newAge, Ciudad: newCity});
      navigate('/')
      
    }
  }
  const mostrarAlerta=()=>{
    swal({
      title: "Gracias por elegirnos",
      text: "Un asesor se comunicara contigo",
      icon: "success",
      button: "Aceptar",
      timer: "4000"
    });
}
const errorForm=()=>{
  swal({
    title: "Error",
    text: "Llene todos los campos",
    icon: "error",
    button: "Aceptar",
    timer: "4000"
  });
}
        
    return (
    <div className='formulario'>
      <Link to='/'>
      <img className='logoFormulario' src={logo}/>      
      </Link>
      
        <h1>Consulta tu Estado de Credito</h1>
      <div className='form'>
      <input className='input' id='input1' onChange={(event) => {setNewName(event.target.value)}} label="Nombre" placeholder='Nombre' />
      <input className='input' id='input2' onChange={(event) => {setNewLastName(event.target.value)}} label="Apellido" placeholder='Apellido'  />
      <input className='input' id='input3' onChange={(event) => {setNewId(event.target.value)}} label="Cedula" placeholder='Cedula'  />
      <input className='input' id='input4' onChange={(event) => {setNewPhone(event.target.value)}} label="Celular" placeholder='Celular'  />
      <input className='input' id='input5' onChange={(event) => {setNewEconomic(event.target.value)}} placeholder='Actividad Economica'  />
      <input className='input' id='input6' onChange={(event) => {setNewIncome(event.target.value)}} placeholder='Ingresos Mensuales'  />
      <input className='input' id='input7' onChange={(event) => {setNewAge(event.target.value)}} label="Edad"  placeholder='Edad' />
      <input className='input' id='input8' onChange={(event) => {setNewCity(event.target.value)}} label="Ciudad" placeholder='Ciudad' />
      </div>
    
      <button onClick={()=>{createUser();clearFields()}} className='button-17'  type='submit'>Enviar</button>


      {/* <table>
      {tableData.map(({Nombre, Apellido, Cedula, Celular, Actividad_Economica,Ingresos_Mensuales, Direccion,Ciudad})=>(
          <tr>
          <td>{Nombre}</td>
          <td>{Apellido}</td>
          <td>{Cedula}</td>
          <td>{Celular}</td>
          <td>{Actividad_Economica}</td>
          <td>{Ingresos_Mensuales}</td>
          <td>{Direccion}</td>
          <td>{Ciudad}</td>
        </tr>
    
    ))}
    </table> */}
      
    </div>

  )
}

export default Formulario