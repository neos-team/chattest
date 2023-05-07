import React from 'react'
import Register from './Register'
import './style.css'
import Message from '../components/Message'
import image from './iphone.jpeg'
export default function Home() {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-5 sidebar'>
                <h1 className='title text-center'>Neos Chat</h1>
                <h2 className='title text-center'>Sende Kayıt Ol ve yeni insanlar tanı</h2>
                <div className='desen'>
                 
                </div>
                
        </div>
        <div className='col-7'> <Register/></div>
    </div>
   
    </div>
  )
}
