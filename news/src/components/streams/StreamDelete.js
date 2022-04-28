import React, { useState, useEffect } from 'react'
import db from '../firebase/FirebaseConfig';

const StreamDelete = () => {

    const Delete=()=>{
        db.collection('news').doc(id).delete();
    };

    const [news, setNews] = useState([]);

    useEffect(() => {
        db.collection('news').onSnapshot(snapshot => {
            setNews(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })
            ));
        });
    }, []);

   
    return (

        <div>
            {news.map(({ id, data: { newsTitle, newsContent, url, date, newsImage } }) =>
            (
                <div className='ui celled list' key={id}>
                    <div className='floated content'>
                        <div className='item'>
                            <div className="header">{newsTitle}</div>
                            {newsContent}
                        </div>
                        <button
                        onClick={Delete}
                            className='ui inverted orange button'>Sil</button>
                        <br></br>
                    </div>
                </div>
            ))}

        </div>
    )

}

export default StreamDelete;
