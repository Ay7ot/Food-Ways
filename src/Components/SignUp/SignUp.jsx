import React from 'react'
import Navbar3 from '../Index/Header/Navbar3'
import SignUpForm from './SignUpForm'

export default function SignUp({navToggle, toggleNav}) {
  return (
    <div className='signUpPage'>
      <Navbar3 navToggle={navToggle} toggleNav={toggleNav}/>
      <SignUpForm />
    </div>
  )
}
