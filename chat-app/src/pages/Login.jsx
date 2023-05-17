import React from 'react'
import İnput from '../components/İnput'
import {Link} from 'react-router-dom'
import image from './4441864-01 1.png'
import './style.css'
export default function Login() {
  return (
    <div className='container'>
    <div className='row'>
    <div className='col-6 sidebar'>
    <div className='image'>
    <img src={image} alt="" />
    </div>
            <h1 className='title text-center'>Neos Chat</h1>
            <h2 className='title text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quaerat, impedit quas nobis possi</h2>
            <div className='desen'>
             
            </div>
            
    </div>
      <div className='col-6 '>
      <div className='form form-login text-center'>
      <h1 className='title-form'>Giriş Yap</h1>
      <h6 className='mt-4'>Giriş Yaparak Uygulamaya Dahil Olun</h6>
      <div className='form mt-5'>
      
      <İnput type='email' placeholder='E-mail'/>
      
      <İnput type='password' placeholder='Şifre' /> 
        <h6 className='mt-3'>Hesabın Yokmu? <Link to='/'>Kayıt Olun</Link></h6>
     
    <div className='buton'>
        <button  className='btn-register mt-4'>Giriş Yap</button>
    </div>
    
      
      
      </div>
  </div>
      </div>
</div>
    </div>
  )
}
