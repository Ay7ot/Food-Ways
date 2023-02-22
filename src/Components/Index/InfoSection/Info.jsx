import React from 'react'
import { Information } from './InfosecInfo'
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css"

export default function Info() {
  return (
    <AnimationOnScroll animateIn='animate__slideInUp'>
        <div className='info-items'>
        {Information.map(info=>{
          return (
            <div key={info.id}>
              <h3>{info.number}</h3>
              <p>{info.title}</p>
            </div>
          )
        })}
      </div>
    </AnimationOnScroll>
  )
}
