import { useState } from 'react'
import './App.css'
import Header from './Components/Index/Header/Header'
import HomeResturants from './Components/Index/Resturants/HomeResturants'
import Customers from './Components/Index/Customers/Customers'
import Info from './Components/Index/InfoSection/Info'
import Footer from './Components/Footer/Footer'

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
        <h2>What our Customers say about us</h2>
        <div className='bar'></div>
        <Customers />
      </div>
      <section className='Info'>
        <h2>Food Ways</h2>
        <Info />
      </section>
      <Footer />
   </>
  )
}

export default App
