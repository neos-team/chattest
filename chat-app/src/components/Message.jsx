import React from 'react'
import userİmage from './user.JPG'
import './component.css'
export default function Message() {
  return (
    <div className='card d-flex '>
        <div className='row'>
        <div className='col-4'>
        <div className='image-div'>
        <img src={userİmage} alt='userİmage' className='image'/>
        </div>
            
        </div>
        <div className='col-7'>
            <h5 className='userName'>Kerem Bozmaz</h5>
        </div>
        </div>
    </div>
  )
}
