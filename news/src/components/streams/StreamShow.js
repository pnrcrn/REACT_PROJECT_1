import React, { useEffect, useState } from 'react';
import db from '../firebase/FirebaseConfig';
import './streamCreate.css';


const images = require('../../image/news_3.png');
const StreamShow = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        db.collection('news').onSnapshot(snapshot => {
            setNews(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })
            ))
        })
    })


    const buttonOnClick = () => {
        var win = window.open(news.url, '_blank');// blank yerine '_self' kullanınca kendi sekmesinde açıyor
        win.focus();
    }

    return (

        <div>
            {news.map(({ id, data: { newsTitle, newsContent, url, date, newsImage } }) =>
            (
                <div className='form' key={id}>
                    <div className='item'> 
                        <button
                            onClick={(e) => { buttonOnClick(url) }}
                            className="tiny ui right floated teal button">
                            Git</button><img className="ui large aligned tiny image" src={`${newsImage === '' ? images : newsImage}`} />
                        <div
                            className="header" >{newsTitle}</div>
                        <br></br>
                        {newsContent}
                        <br></br>
                    </div>
                    <br></br>
                </div>

            ))}

        </div>

    );
};

export default StreamShow;
