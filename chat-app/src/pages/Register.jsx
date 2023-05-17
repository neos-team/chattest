import React from 'react'
import './style.css'
import İnput from '../components/İnput'
import {Link} from 'react-router-dom'
export default function Register() {
  return (
    <div className='container text-center'>
        <div className='form mt-5'>
            <h1 className='title-form'>Hesap Oluştur</h1>
            <h6 className='mt-4'>Hesabını Oluştur ve Mesajlaşmaya Başla</h6>
            <div className='form mt-5'>
            <İnput type='text' placeholder='Kullanıcı Adı'/>
            <İnput type='email' placeholder='E-mail'/>
            <İnput type='text' placeholder='Telefon Numarası'/>
            <İnput type='password' placeholder='Şifre' /> 
              <h6 className='mt-3'>Hesabın Varmı? <Link to='/Login'>Giriş Yap</Link></h6>
           <div className='chek mt-4 d-flex'>
           <input className="form-check-input m-1" type="checkbox" value="" id="flexCheckDefault"/>
           <h6>
           <a href='/'> Aydınlatma Metnini</a>Okudum Kabul Ediyorum</h6>
          </div>
          <div className='buton'>
              <button className='btn-register mt-4'>Hesap Oluştur</button>
          </div>
          
            
            
            </div>
        </div>
        <div className='community mt-5'>
          <h4>Sohbet Odasına Katıl</h4>
          <div className='buton'>
         <Link to='/ChatChannel'><button className='btn-register mt-4'>Katıl</button></Link> 
      </div>
        </div>
      </div>
  )
}
