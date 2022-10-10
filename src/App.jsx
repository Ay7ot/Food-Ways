import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Index/Home'
import About from './Components/About/About'
import FAQ from './Components/FAQ/FAQ'
import Vendor from './Components/Vendor/Vendor'
import SignUp from './Components/SignUp/SignUp'

function App() {

  const [navToggle, setNavToggle] = useState(false)

  function toggleNav(){
    setNavToggle(prevNavToggle=>!prevNavToggle)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Home navToggle={navToggle} toggleNav={toggleNav}/>}/>
        <Route path='/about' element={<About navToggle={navToggle} toggleNav={toggleNav}/>}/>
        <Route path='/faq' element={<FAQ navToggle={navToggle} toggleNav={toggleNav}/>}/>
        <Route path='/vendor' element={<Vendor navToggle={navToggle} toggleNav={toggleNav}/>}/>
        <Route path='/signup' element={<SignUp navToggle={navToggle} toggleNav={toggleNav}/>}/>
      </Routes>
    </>
  )
}

export default App
 