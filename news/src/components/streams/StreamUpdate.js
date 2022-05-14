import React, { useState, useEffect } from 'react';
import StreamCreateInput from './StreamCreateInput';
import DateSelect from '../../datepicker/DateSelect';
import db, { auth } from '../firebase/FirebaseConfig';
import { useLocation, Link } from 'react-router-dom';
import './streamUpdate.css';
import { DateTime } from './DateTime';
import { userData } from '../App';





const images = require('../../image/news_3.png');
const interfaceImage = require('../../image/world.jpg');

const StreamUpdate = ({ docid }) => {

    const location = useLocation();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState('');
    const [image, setImage] = useState(images);


    const update = async () => {
  
        await db.collection('news').doc(location.state.id).update({
            newsTitle: title,
            newsContent: content,
            url: url,

            newsImage: images,
            updateUser:auth.currentUser.displayName,
            updateDate: DateTime()
        });


    };

    return (

        <div className='formbicim'>
            <div className='ui interved segment'>
                <form className='ui form'>
                    <br></br>
                    <div className='field'>
                        <label>HABER GÜNCELLE</label>
                        <img
                            value={image}
                            className="images"
                            onChange={(e) => setImage(e.target.value)}
                            src={interfaceImage}
                        // src={setImage}
                        />
                        <button className="tiny ui right floated teal button">Ekle</button>
                    </div>
                    <br></br>
                    <StreamCreateInput
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        label='Haber Başlığı'
                        placeholder={location.state.title}>
                    </StreamCreateInput>

                    <StreamCreateInput
                        label='Haber İçeriği'
                        placeholder={location.state.content}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    >
                    </StreamCreateInput>

                    <StreamCreateInput
                        label='Haber Linki '
                        placeholder={location.state.url}
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}>

                    </StreamCreateInput>
                    {/* <label>Haber Tarihi</label>
                    <DateSelect
                        selectedDate={date}
                        setSelectedDate={setDate}></DateSelect> */}
                    <br></br>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            update();
                        }}
                        className='ui floated teal button'>Güncelle</button>

                    <br></br>
                </form>
                <hr
                    className='divided'></hr>
                <Link to='/StreamDelete'>Geri Dön</Link>
            </div>

        </div>



    )
}

export default StreamUpdate;
