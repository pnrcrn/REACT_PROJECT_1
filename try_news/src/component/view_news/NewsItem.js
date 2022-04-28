import React from 'react';
import NewsList from './NewsList';


const NewsItem = ({ newshow }) => {

    const buttonOnClick = (newshow) => {

        var win = window.open(newshow.url, '_blank'); // blank yerine '_self' kullanınca kendi sekmesinde açıyor
        win.focus();
    }

    return (
        <div className='ui celled list'>
            <div className='item'>
                <div className='floated content'>
                    <button
                        className='tiny ui right floated teal button'
                        onClick={(e) => { buttonOnClick(newshow) }}
                    > Git</button>
                    <img className='ui large aligned tiny image'
                        src={newshow.urlToImage} />
                    <div className='header'>{newshow.title}</div>
                    {newshow.description}
                </div>
            </div>
        </div>
    )
}


export default NewsItem;