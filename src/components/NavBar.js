import React from 'react'

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
              <li><button>Home</button></li>
              <li><button>Productos</button></li>
              <li><button>Nosotros</button></li>
              <li><button>Contacto</button></li>
            </ul>
        </header>
    )
}

export default NavBar