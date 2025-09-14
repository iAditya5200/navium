import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Library from '../pages/Library'

function Routing() {
  return (
    <div>
        <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/library' element= {<Library/>} />
        </Routes></div>
  )
}

export default Routing