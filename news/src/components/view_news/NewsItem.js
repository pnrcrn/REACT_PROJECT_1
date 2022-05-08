import React from 'react';
import './newsitem.css';

const NewsItem = ({ newshow }) => {

  const buttonOnClick=(newshow)=>{
    var win = window.open(newshow.url, '_blank');// blank yerine '_self' kullanınca kendi sekmesinde açıyor
    win.focus();
  }
  return (

    <div className="form">
      <div className="item">
        <div className="container" />
        <button 
        onClick={(e)=>{buttonOnClick(newshow)}}
        className="tiny ui right floated teal button">
          Git</button>
        <img className="ui large aligned tiny image" src={newshow.urlToImage} />
       <div className='distance'></div>
        <div className="baslik">{newshow.title}</div>
        {newshow.description}
      </div>
      <br></br>
    </div>

  )
}
export default NewsItem;
