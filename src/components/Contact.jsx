import React from 'react'

function Contact() {
  return (
    <section id='contacto'>
        <h3>Contacto</h3>
        <div className='contact d-flex justify-content-evenly'>
          <a href='https://www.linkedin.com/in/karen-cisneros-800143191/'><img className='contactlogo' src="../img/linkedin.png" alt="x" /></a>
          <a href='https://wa.me/3044143323'><img className='contactlogo' src="../img/whatsapp.png" alt="x" /></a>
          <a href='https://github.com/karen1278'><img className='contactlogo' src="../img/github.png" alt="x" /></a>
        </div>
      </section>
  )
}

export default Contact
