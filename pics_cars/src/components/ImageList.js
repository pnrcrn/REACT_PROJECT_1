import './imageList.css'
import React, { Component } from 'react'
import ImageCard from './ImageCard';

const ImageList = props => {
    const images = props.images.map((image) => {
        //  json'dan dönen image.urls.regular adresini burada yansıtıyoruz
        return <ImageCard key={image.id} image={image}/>

    }
    );
    return <div className='image-list' >{images}</div>;

};

export default ImageList;