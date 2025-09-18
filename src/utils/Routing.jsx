import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Library from '../pages/Library'
import About from '../pages/About'

function Routing() {
  return (
    <div>
        <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/library' element= {<Library/>} />
        <Route path='/aboutus' element= {<About/>} />
        </Routes></div>
  )
}

export default Routing