import React from 'react';
import { auth, provider } from '../firebase/FirebaseConfig';
import './Login.css';

function Login() {

    const login = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <div className='login'>
            <div className='container'></div>
            <button onClick={login}>
                Google ile Giriş
            </button>

        </div>
    )
}

export default Login;
