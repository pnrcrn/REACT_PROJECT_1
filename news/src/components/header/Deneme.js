import React, { Component } from 'react'
import NewsList from '../view_news/NewsList';
import SearchBar from '../view_news/SearchBar';
import Header from './Header';
import { newsApi } from '../../apis/news_api';
import StreamShow from '../streams/StreamShow';
class Deneme extends Component {

    state = { news: [] };//response'dan dönen değeri alıp listelemek için
    //bize dizi dönüyor o yüzden dizi olarak aldık

    onTermSubmit = async term => {
        const response = await newsApi.get('', {
            params: {
                q: term,
            }
        });
        console.log(response);
        this.setState({ news: response.data.articles });
    };

    

    render() {
        return (
            <div>
                <Header></Header>
                <SearchBar 
                onSearchSubmit={this.onTermSubmit}
                 />
                <StreamShow></StreamShow>
                <NewsList news={this.state.news}></NewsList>
            </div>
        )
    }
}

export default Deneme;