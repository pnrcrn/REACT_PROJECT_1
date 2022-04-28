import React from 'react'
import Login from '../user_actions/Login';
import './Header.css';

function Header() {
    return (
            <div className='header'>
                <div className='ui secondary pointing menu'>
                    <label className='label'>SON DAKİKA HABERLERİNİZİ GİRİŞ YAPARAK EKLEYEBİLİRSİNİZ !</label>
                    <div className='right menu'>
                        <Login></Login>
                    </div>
                </div>
            </div>
      
    )
}

export default Header;
