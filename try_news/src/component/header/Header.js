import React from 'react'
import Login from '../user_actions/Login';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <label> SİZDE SON DAKİKA HABERLERİNİZİ GİRİŞ YAPARAK EKLEYEBİLİRSİNİZ</label>
            <div className='right menu'>
                <Login>Google</Login>
            </div>

        </div>
    )
}

export default Header;