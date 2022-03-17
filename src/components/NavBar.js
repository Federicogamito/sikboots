import React from 'react'
import Button from '@mui/material/Button';

function NavBar() {

    return(
        <header className="main-header">
        <div className='container-logo'> 
         <img
            src=".../imagesfede/zapalogo.jpg"
            classname="img-header"
            />
          </div>
            <ul className={'navbar'}>
              <li><Button>Home</Button></li>
              <li><Button>Productos</Button></li>
              <li><Button>Nosotros</Button></li>
              <li><Button variant="outlined">Contacto</Button></li>
            </ul>
        </header>
    )
}

export default NavBar