import React, { useState } from 'react';
import StreamCreateInput from './StreamCreateInput';
import db, { auth } from '../firebase/FirebaseConfig';
import DateSelect from '../datepicker/DateSelect';


const images = require('../../images/cat.jpeg');

function StreamCreate({ user }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState('');
    const [date, setDate] = useState('');

    const addDataBase = (e) => {
        e.preventDefault();
        db.collection('news').add({
            newsTitle: title,
            newsContent: content,
            url: url,
            date: '',
            newsImage: ''
        });
        setContent('');
        setDate('');
        setTitle('');
        setUrl('');
    };

    return (
        <div className='field'>
            <div className='ui form'>
                <div className='form'>
                    <form>
                        <br></br>
                        <div className='field'>
                            <button
                                className='tiny ui right floated teal button'
                                onClick={() => auth.signOut()}
                            >Çıkış Yap</button>
                            <h1>Hoşgeldiniz {user.displayName}</h1>
                        </div>
                        <div className='field'>
                            <label>Haber Görseli</label>
                            <img className="i fluid image" src={images} />
                            <button className="tiny ui right floated grey button">Ekle</button>
                        </div>
                        <br></br>
                        <StreamCreateInput
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            label='Haber Başlığı'
                            placeholder='Haber Başlığı'>
                        </StreamCreateInput>

                        <StreamCreateInput
                            label='Haber İçeriği'
                            placeholder='Haber İçeriği'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        >
                        </StreamCreateInput>

                        <StreamCreateInput
                            label='Haber Linki '
                            placeholder='mysite.com'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}>
                        </StreamCreateInput>
                        <div className='field'>
                            <label>Haber Yayın Tarihi</label>
                            <DateSelect
                                date={date}
                                setDate={setDate}></DateSelect>
                        </div>

                        <button
                            className="ui inverted orange button"
                            onClick={addDataBase}
                        >Kaydet</button>

                        <br></br>
                    </form>

                </div>
            </div>
        </div>)
}
export default StreamCreate;