import React from 'react'
import image from './4112337-01 1.png'
import İnput from '../components/İnput'
import {Link} from 'react-router-dom'
export default function Comunity() {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-6 sidebar'>
        <div className='image'>
        <img src={image} alt="" />
        </div>
                <h1 className='title text-center'>Neos Chat</h1>
                <h2 className='title text-center'>Sohbet Kanalına Giriş</h2>
                <div className='desen'>
                 
                </div>
                
        </div>
        <div className='col-6'>
        <div className='form form-login text-center'>
      <h1 className='title-form'>Sohbet Odasına Katılın</h1>
      <h6 className='mt-4'>Sohbete Katılmak İçin Kod Girin</h6>
      <div className='form mt-5'>
      
      <İnput type='email' placeholder='Sohbet Kodu Giriniz'/>
      <İnput type='text' placeholder='Katılımcı Adınızı Giriniz' /> 
        <div className='chek mt-4 d-flex'>
           <input className="form-check-input m-1" type="checkbox" value="" id="flexCheckDefault"/>
           <h6>Anonim Giriş</h6>
          
          </div>
     
    <div className='buton'>
        <button  className='btn-register mt-4'>Sohbete Başla</button>
    </div>
    
      
      
      </div>
  </div> </div>
    </div>
    </div>
  )
}
