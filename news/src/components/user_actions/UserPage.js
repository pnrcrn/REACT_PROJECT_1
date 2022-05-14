import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/FirebaseConfig';
import Deneme from '../header/Deneme';
import StreamCreate from '../streams/StreamCreate';
import { userData } from '../App';


function UserPage() {

    const [user, setUser] = useState(null);

    useEffect(() => {
       var response=auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
             
                console.log(authUser._delegate.displayName)
                // console.log(userData.displayName);
            }
            else {
                setUser(null);
            }
        })
    }, []);


    return (
        <div className='user'>
            {user
                ? <StreamCreate user={user}></StreamCreate>
                : <Deneme></Deneme>}
        </div>)
}

export default UserPage;