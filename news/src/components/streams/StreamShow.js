import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        });
    });


    return (

        <div>
            {news.map(({ id, data: { newsTitle, newsContent, url,date, newsImage,screencontent,updateDate } }) =>
            (
                <div className='form' key={id}>
                    <div className='item'>
                        <Link to='/GoButton' state={
                            {
                                id: id,
                                title: newsTitle,
                                content: newsContent,
                                url: url,
                                date: date,
                                image: newsImage,
                                screen:screencontent,
                                updateDate:updateDate,
                                creratedDate:date

                            }
                        }>
                            <button
                                className="tiny ui right floated teal button">
                                Git</button>
                        </Link>
                        <img className="ui large aligned tiny image" src={`${newsImage === '' ? images : newsImage}`} />
                        <div className='distance'></div>
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
