import React, { useState, useEffect } from 'react'
import db from '../firebase/FirebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import './streamDelete.css';


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
            {news.map(({ id, data: { newsTitle, newsContent, url, date, newsImage, screencontent,createdUser,updateUser ,updateDate} }) =>
            (

                <div className='formlist' key={id}>
                    <div className='floated content'>
                        <div>
                            <div className='item'>
                                <p>HABERİ OLUŞTURAN= {createdUser}</p>
                                <p>HABERİ GÜNCELLEYEN=  {updateUser}</p>
                                <p>HABER YAYIN TARİHİ= {date} </p>
                                <p>HABER GÜNCELLEME TARİHİ= {updateDate}</p>
                                <img
                                    className='images'
                                    src={newsImage}
                                    align='left'></img>
                                <div className="header">{newsTitle}</div>
                                {newsContent}
                            </div>
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
                                content: newsContent,
                                screen:screencontent
                            }} >
                                <button
                                    className='ui inverted purple button'>Güncelle</button>
                            </Link>
                            <Link to='/StreamScreen' state={{
                                id: id,
                                title: newsTitle,            
                            }} >
                                <button
                                    className='ui inverted green button'>Haber Sayfası Ekle</button>
                            </Link>
                            <Link to='/Details' state={{
                                id: id,
                                title: newsTitle,            
                            }} >
                                <button
                                    className='ui inverted pink button'>Detaylar</button>
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
