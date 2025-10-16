import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from "./ScrollToTop"
import Home from '../pages/Home'
import Library from '../pages/Library'
import About from '../pages/About'
import Services from '../pages/Services'
import Leadership from '../pages/Leadership'
import Onboard from '../pages/Onboard'
import Competence from '../pages/Competence'
import Dry from '../pages/Dry'
import Right from '../pages/Right'
import Mooring from '../pages/Mooring'
import Audit from '../pages/Audits'
import Contact from '../pages/Contact'
import Blogs from '../pages/Blogs'
function Routing() {
  return (
    <div>
         <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/library' element={<Library />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/leadership' element={<Leadership />} />
        <Route path='/onboard' element={<Onboard />} />
        <Route path='/competence' element={<Competence />} />
        <Route path='/dry' element={<Dry />} />
        <Route path='/right' element={<Right />} />
        <Route path='/mooring' element={<Mooring />} />
        <Route path='/audit' element={<Audit />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes></div>
  )
}

export default Routing