import React from 'react'
import { Information } from './InfosecInfo'

export default function Info() {
  return (
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
  )
}
