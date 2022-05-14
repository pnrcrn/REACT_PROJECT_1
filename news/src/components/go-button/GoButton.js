import React from 'react';
import { useLocation } from 'react-router-dom';
import Design from './Design';
import './GoButton.css';
import ScreenPages from './ScreenPages';

function GoButton() {
  const location = useLocation();
  return (
    <div  >
      <div className='blink'>
        <l>
          SON DAKİKA - GÜNDEM -  SPOR - MAGAZİN - EKONOMİ
        </l>
      </div>
      <div className='marquee'>
        <marquee behavior='alternate'>
          <p>SON DAKİKA HABERLERİ BU SAYFADA</p>
        </marquee>
        <marquee
          behavior='alternate'
          direction="right">
          <p>SON DAKİKA HABERLERİ BU SAYFADA</p>
        </marquee>
      </div>

      <div className='ui button'>
        <ScreenPages
          titlecolor='title'
          mainclasstitle='magazine'
          classnametitle='magazine_1'
          baslik={'Magazin haberleri'}>
        </ScreenPages>
        <ScreenPages
          titlecolor='title'
          mainclasstitle='magazine'
          classnametitle='magazine_2'
          baslik={'spor haberleri'}>
        </ScreenPages>
      </div>
      <br></br>
      <div className='newsdetails'>
        <center>
          <h1 className='newstitle'>
            {location.state.title}
          </h1>
        </center>
        <div className='ornek'>
          <img
            className='sola-kaydir' src={location.state.image}></img>
          <label className='image-inside-text'>{}</label>
          <p className='satiraraligi'>{location.state.screen}</p>
          <br></br>
          <ScreenPages
            mainclasstitle='latestnews'
            baslik={'Güncel haberler'}>
          </ScreenPages>
        </div>
      </div>
      <Design></Design>
    </div>
  );
};

export default GoButton;