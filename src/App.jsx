import { useState } from 'react'
import './App.css'
import Header from './Components/Index/Header/Header'
import HomeResturants from './Components/Index/Resturants/HomeResturants'
import Customers from './Components/Index/Customers/Customers'

function App() {
  const [navToggle, setNavToggle] = useState(false)

  function toggleNav(){
    setNavToggle(prevNavToggle=>!prevNavToggle)
  }

  return (
   <>
      <div className='Header'>
        <Header navToggle={navToggle} toggleNav={toggleNav}/> 
      </div> 
      <div className='HomeResturants'>
        <h2>Resturants near you</h2>
        <div className='bar'></div>
        <HomeResturants/>
      </div>
      <div className='customers'>
        <Customers />
      </div>
   </>
  )
}

export default App
