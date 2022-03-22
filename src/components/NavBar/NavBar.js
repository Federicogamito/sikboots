import React from 'react'
import Button from '@mui/material/Button';
import logo from "./zapalogo.jpg"
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {

    return(
        <header className="main-header">
        <div className='container-logo'> 
        <img src={ logo } />
          </div>
            <ul className={'navbar'}>
              <li><Button>Home</Button></li>
              <li><Button>Productos</Button></li>
              <li><Button>Nosotros</Button></li>
              <li><Button variant="outlined">Contacto</Button></li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar