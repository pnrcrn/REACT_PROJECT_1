import React, { useState, useEffect } from 'react'
import db from '../firebase/FirebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import './streamDelete.css'

const StreamDelete = () => {

    //     const navigate = useNavigate();
    //     const toComponentB=(id)=>{
    //     navigate('/StreamUpdate',{state:{name:id}});
    //       }

    const Delete = (id) => {
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

        <div  >
            {news.map(({ id, data: { newsTitle, newsContent, url, date, newsImage } }) =>
            (

                <div className='formlist' key={id}>
                    <div className='floated content'>
                        <div className='item'>
                            <img
                                className='images'
                                src={newsImage}
                                align='left'></img>
                            <div className="header">{newsTitle}</div>
                            {newsContent}
                        </div>
                        <div className='buttons'>
                            <button

                                onClick={() => Delete(id)}
                                className='ui inverted red button'>Sil</button>
                            <Link to='/StreamUpdate' state={{
                                id: id,
                                title: newsTitle,
                                url: url,
                                date: date,
                                image: newsImage,
                                content: newsContent
                            }} >
                                <button
                                    className='ui inverted purple button'>Güncelle</button>
                            </Link>
                        </div>
                        {/* <button> <a onClick={()=>{toComponentB(id)}}>Navigasyon ile güncelleme</a></button> */}
                        <br></br>
                        <hr className='rounded'></hr>
                    </div>
                </div>
            ))}
            <Link
                className='link'
                to='/'>Geri Dön</Link>
        </div>
    )

}

export default StreamDelete;
