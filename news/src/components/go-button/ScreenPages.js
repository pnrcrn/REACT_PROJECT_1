import React, { useEffect, useState } from 'react';
import { newsApi } from '../../apis/news_api';
import { Link } from 'react-router-dom';
import './GoButton.css';

function ScreenPages({ baslik, classnametitle, mainclasstitle, titlecolor }) {

  const [magazine, setMagazine] = useState([]);


  useEffect(() => {

    newsApi.get('',
      {
        params: {
          q: baslik,
        }
      })
      .then(response => setMagazine(response.data.articles))
      .catch(error => console.log({ error }));
  }, []);

  const buttonOnClick = (magazines) => {
    var win = window.open(magazines.url, '_blank');// blank yerine '_self' kullanınca kendi sekmesinde açıyor
    win.focus();
  }

  return (
    <div className={mainclasstitle}>
      {
        magazine.map(magazines => {
          return (
            <div
              className={classnametitle}
              key={magazines.title}>
                <center>
              <Link
                to=''
                onClick={(e) => buttonOnClick(magazines)}
              >
                
                <h1 className={titlecolor}>{magazines.title}</h1>
              </Link>
              <img
                className='pictures'
                src={magazines.urlToImage}>
              </img>
              </center>
            </div>
          )
        })
      }
      <br></br>
    </div>
  )
}

export default ScreenPages;