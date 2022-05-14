import React from 'react';
import "./GoButton.css";

function Design() {
  return (
    <div className='page-end'>

      <center>
        <p className='text'>SİZ OKUYUCULARIMIZ İÇİN BURADAYIZ !!
        </p>

        <button class="ui facebook button">
          <i class="facebook icon"></i>
          Facebook
        </button>
        <button class="ui twitter button">
          <i class="twitter icon"></i>
          Twitter
        </button>
        <button class="ui google plus button">
          <i class="google plus icon"></i>
          Google Plus
        </button>
        <button class="ui vk button">
          <i class="vk icon"></i>
          VK
        </button>
        <button class="ui linkedin button">
          <i class="linkedin icon"></i>
          LinkedIn
        </button>
        <button class="ui instagram button">
          <i class="instagram icon"></i>
          Instagram
        </button>
        <button class="ui youtube button">
          <i class="youtube icon"></i>
          YouTube
        </button>
        <p className='haberbulteni'>Bültene Abone Olarak Daha fazla bilgi edinebilirsiniz.</p>
        <input
          placeholder='E-Posta'
          type='text'
          className=''></input>
        <button>Kayıt ol</button>

        <p className='haberbulteni'>pinarceran98@gmail.com</p>
      </center>

    </div>
  )
}
export default Design;
