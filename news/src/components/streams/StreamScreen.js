import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './streamUpdate.css';
import db from '../firebase/FirebaseConfig';

function StreamScreen() {
    const location = useLocation();
    const [maintxt, setMainTxt] = useState('');

    const addFirebase = async () => {
        await db.collection('news').doc(location.state.id).update({

            screencontent: maintxt

        });
    };

    return (
        <div >
            <div className="column">
                <div className="ui raised segment">

                    <a className="ui green ribbon label">EKLENECEK HABER BAŞLIĞINIZ</a>
                    <span>{location.state.title}</span>
                    
                </div>
            </div>
            <div >
                <textarea className='input'
                    value={maintxt}
                    onChange={(e) => setMainTxt(e.target.value)}
                ></textarea>
            </div>
            <br></br>
            <div>
                <button
                    className='ui inverted green button'
                    onClick={(e) => {
                        e.preventDefault();
                        addFirebase();
                    }}>Kaydet</button></div>
                    <br></br>
            <Link to='/StreamDelete'>
                <i className='large angle double left black icon'></i>
            </Link>

        </div>
    );
};

export default StreamScreen;