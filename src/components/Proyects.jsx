import React from 'react'

function Proyects() {
  return (
    <section id='proyectos'>
    <h3>PROYECTOS</h3>
    <div className='proyecto'>
      <a className='cartas' href='https://tributo-redhotchillpeppers.netlify.app/'><img className='proyect card bg-light bg-opacity-10' src="../img/webtributo.jpg" alt="" /></a>
      <a className='cartas' href='https://react-rick-and-morty-api-karen.netlify.app'><img className='proyect card bg-light bg-opacity-10' src="../img/rickandmorty.jpg" alt=""/></a>
      <a className='cartas' href='https://wheel-of-doom.netlify.app'><img className='proyect card bg-light bg-opacity-10' src="../img/wheelofdoom.jpg" alt="" /></a>
      <a className='cartas' href='https://calculadora-js-karen.netlify.app'><img className='proyect card bg-light bg-opacity-10' src="../img/calculadora.jpg" alt="" /></a>
    </div>
  </section>
  )
}

export default Proyects
