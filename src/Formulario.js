import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Button, TextField } from '@mui/material'
import './Formulario.css'

function Formulario() {
    const {reset, register, handleSubmit, watch, formState: { errors } } = useForm();

    const [tableData, setTableData] = useState([])

    const inputInfo = (data)=>{
          setTableData([...tableData, data])
          reset()
        }
        console.log([...tableData])
        
    return (
    <div className='formulario'>
        <h1>Formulario Clientes</h1>
      <form onSubmit={handleSubmit(inputInfo)}>
      <TextField {...register('Nombre')} label="Nombre" variant="standard" />
      <TextField {...register('Apellido')} label="Apellido" variant="standard" />
      <TextField {...register('Cedula')} label="Cedula" variant="standard" />
      <TextField {...register('Celular')} label="Celular" variant="standard" />
      <TextField {...register('Actividad_Economica')} label="Actividad_Economica" variant="standard" />
      <TextField {...register('Ingresos_Mensuales')} label="Ingresos_Mensuales" variant="standard" />
      <TextField {...register('Direccion')} label="Direccion" variant="standard" />
      <TextField {...register('Ciudad')} label="Ciudad" variant="standard" />
      <Button type='submit'>Enviar</Button>
      </form>
      <table>
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
    </table>
      
    </div>

  )
}

export default Formulario