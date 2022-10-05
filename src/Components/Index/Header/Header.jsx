import React from 'react'
import Navbar from './Navbar'
import {BiLocationPlus, BiDownArrow, BiSearch} from 'react-icons/bi'


export default function Header({navToggle, toggleNav}) {
  return (
    <div className='header-main'>
      <Navbar navToggle={navToggle} toggleNav={toggleNav}/>
      <h1>Food Ways</h1>
      <p className='header-talk'>Order your meals from any resturant of your choice and get it delivered anywhere</p>
      <div className='inputField'>
        <div className='inputFieldRight'>
          <i><BiLocationPlus /></i>
          <p className='locate'>Lagos</p>
          {navToggle ? <i><BiDownArrow /></i> : <></>}
        </div>
        <i className='searchIcon'><BiSearch /></i>
        <input type='text' placeholder='Search for Resturants or dish'/>
      </div>
    </div>
  )
}
