import React from 'react'
import Login from './Login'
import './style.css'
import Message from '../components/Message'
export default function Home() {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-5 sidebar'>
                <h1 className='title text-center'>Neos Chat</h1>
                <h2 className='title'>Sende Kayıt Ol ve yeni insanlar tanı</h2>
                
        </div>
        <div className='col-7'> <Login/></div>
    </div>
   
    </div>
  )
}
