import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/FirebaseConfig';
import Deneme from '../header/Deneme';
import StreamCreate from '../streams/StreamCreate';



function UserPage() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
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