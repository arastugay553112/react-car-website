import React from 'react';
import '../styles/Iletisim.css';
import Arabalar from '../assets/honda-arabalar.jpg';

function Iletisim() {
  return (
    <div className='contact'>
        <div className='leftSide' 
        style={{backgroundImage:`url(${Arabalar})`}}></div>
        <div className='rightSide'>
            <h1>Honda İletişim</h1>
            <form id="contact-form" method='POST'>
                <label htmlFor='name'>Ad-Soyad</label>
                <input name="name" placeholder='Ad ve Soyad Girin' 
                type="text"/>
                <label htmlFor='email'>Email</label>
                <input name="email" placeholder='Email Girin' 
                type="email"/>
                  <label htmlFor='message'>Mesaj</label>
                  <textarea rows="6" placeholder='Mesajı Girin'
                  name="mesaj" required></textarea>
                  <button type='submit'>Gönder</button>
            </form>
        </div>
    </div>
  )
}

export default Iletisim