import React from 'react'

function Navbar() {
  return (
    <div>
      <nav id='nav' className='d-flex justify-content-around'>
        <h5><a href="#habilidades">Habilidades</a></h5>
        <h5><a href="#proyectos">Proyectos</a></h5>
        <h5><a href="#experiencia">Experiencia</a></h5>
        <h5><a href="#contacto">Contacto</a></h5>
      </nav>
    </div>
  )
}

export default Navbar
