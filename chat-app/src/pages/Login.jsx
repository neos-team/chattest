import React from 'react'
import İnput from '../components/İnput'
import {Link} from 'react-router-dom'
import './style.css'
export default function Login() {
  return (
    <div className='container'>
      <div className="form-login ">
      <h1 className='title-login'>Neos Chat</h1>
        <h2 className='title-form '>Giriş Yap</h2>
        <İnput type='email' placeholder='Kullanıcı Adı veya E-mail'/>
        <İnput type='password' placeholder='Şifre'/>
        <div className='forgot-pass w-75 mt-2'>
        <Link to='/Login'>Şifremi Unuttum</Link>
        </div>
        <div className='buton'>
        <button className='btn-register mt-4 mb-2'>Giriş Yap</button>
    </div>
      </div>  
    </div>
  )
}
