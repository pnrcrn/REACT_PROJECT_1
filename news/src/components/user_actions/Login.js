import React from 'react';
import {auth, provider} from '../firebase/FirebaseConfig';
// import './Login.css';


function Login() {
    const login=()=>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    }
    return (
        <div className='login'>
            <div className='ui form'></div>
            <button
             className="ui google plus button"
             onClick={login}
             >
                <i className="google plus icon"></i>
                Google ile giriş
            </button>

        </div>
    );
}

export default Login;