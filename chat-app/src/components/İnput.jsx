import React from 'react'
import './component.css'

export default function İnput({type,placeholder}) {
  return (
    <div className='form'>
        <input className='form-control w-50 m-auto mt-4' type={type} placeholder={placeholder}/>
        
    </div>
  )
}
