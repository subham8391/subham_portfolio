import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import './App.css'

function App() {

  return (
    <>
    <Navbar />
      <div className='main '>
        <Home />
        <About />
      </div>
    </>
  )
}

export default App
