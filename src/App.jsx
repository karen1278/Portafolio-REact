import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Data from './components/Data'
import Skills from './components/Skills'
import Proyects from './components/Proyects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Navbar />
      <Data />
      <Skills />
      <Proyects />
      <Experience />
      <Contact />
      <section id='flecha'>
        <a className='flecha' href="#nav"><img src="../img/flecha.png" alt="" /></a>
      </section>
    </div>
  )
}

export default App
