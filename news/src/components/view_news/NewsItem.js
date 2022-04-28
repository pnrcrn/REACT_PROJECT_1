import React from 'react';

const NewsItem = ({ newshow }) => {

  const buttonOnClick=(newshow)=>{
    var win = window.open(newshow.url, '_blank');// blank yerine '_self' kullanınca kendi sekmesinde açıyor
    win.focus();
  }
  return (

    <div className="ui celled list">
      <div className="item">
        <div className="floated content" />
        <button 
        onClick={(e)=>{buttonOnClick(newshow)}}
        className="tiny ui right floated teal button">
          Git</button>
        <img className="ui large aligned tiny image" src={newshow.urlToImage} />
        <div className="header">{newshow.title}</div>
        {newshow.description}
        {/* <label className=' ui label' >
          <a className='detail'>{newshow.publishedAt}</a>
        </label>*/}
      </div>
      <br></br>
    </div>

  )
}
export default NewsItem;
