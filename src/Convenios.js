import React from 'react'
import './Convenios.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';

function Convenios({icon, id}) {
  return (
    <div id={id} className='convenios'>

       <div className='icon'>
            <Link style={{textDecoration: 'none', color: 'black'}}  to='/'>
            {icon}            
            </Link>
        </div> 

        <h2 className='conveniosTitle'>Convenios Pensionados</h2>
        <div className='checkBox'>
            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50, color:'white', background:'#0f275c', borderRadius:'50%' }}/>
            <p>Colpensiones</p>
            </div>

            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50 , color:'white', background:'#0f275c', borderRadius:'50%'}}/>
            <p>Casur</p>
            </div>

            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50 , color:'white', background:'#0f275c', borderRadius:'50%'}}/>
            <p>Cremil</p>
            </div>

            {/* <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50 , color:'blue'}}/>
            <p>Tegen</p>
            </div> */}

            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50, color:'white', background:'#0f275c', borderRadius:'50%'}}/>
            <p>Cagen/Tegen</p>
            </div>

            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50 , color:'white', background:'#0f275c', borderRadius:'50%'}}/>
            <p>Proteccion</p>
            </div>

            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50 , color:'white', background:'#0f275c', borderRadius:'50%'}}/>
            <p>Porvenir</p>
            </div>

            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50 , color:'white', background:'#0f275c', borderRadius:'50%'}}/>
            <p>Fiduprevisora</p>
            </div>

            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50 , color:'white', background:'#0f275c', borderRadius:'50%'}}/>
            <p>Fopep</p>
            </div>

        </div>

        <h2 className='conveniosTitle'>Convenios Empleados Publicos</h2>

        <div className='checkBox'>
            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50 , color:'white', background:'#0f275c', borderRadius:'50%'}}/>
            <p>Ejercito Nacional</p>
            </div>

            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50 , color:'white', background:'#0f275c', borderRadius:'50%'}}/>
            <p>Policia Nacional</p>
            </div>

            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50, color:'white', background:'#0f275c', borderRadius:'50%' }}/>
            <p>Atento</p>
            </div>

            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50 , color:'white', background:'#0f275c', borderRadius:'50%'}}/>
            <p>Migracion Colombia</p>
            </div>

            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50, color:'white', background:'#0f275c', borderRadius:'50%'}}/>
            <p>Proteccion Social</p>
            </div>

            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50 , color:'white', background:'#0f275c', borderRadius:'50%'}}/>
            <p>Alcaldia de Pereira</p>
            </div>

            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50 , color:'white', background:'#0f275c', borderRadius:'50%'}}/>
            <p>Gobernacion de Risaralda</p>
            </div>

            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50 , color:'white', background:'#0f275c', borderRadius:'50%'}}/>
            <p>Convenio</p>
            </div>

            <div className='box'>
            <CheckCircleOutlineIcon sx={{ fontSize: 50 , color:'white', background:'#0f275c', borderRadius:'50%'}}/>
            <p>Secretarias de Educacion</p>
            </div>

        </div>
    </div>
  )
}

export default Convenios