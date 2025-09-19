import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Library from '../pages/Library'
import About from '../pages/About'
import Services from '../pages/Services'

function Routing() {
  return (
    <div>
        <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/library' element= {<Library/>} />
        <Route path='/aboutus' element= {<About/>} />
        <Route path='/services' element= {<Services/>} />
        </Routes></div>
  )
}

export default Routing