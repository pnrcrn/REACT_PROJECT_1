import React, { Component } from 'react'
import StreamShow from '../streams/StreamShow';
import NewsList from './NewsList';
import { newsApi } from '../../apis/news_api';

class SearchBar extends Component {

    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    };

    onSearchSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);//Burada arama formumuz için değeri aktarıyoruz
    }

    onTermSubmit = async term => {
        const response = await newsApi.get('', {
            params: {
                q: term,
            }
        });
        console.log(response);
        this.setState({ news: response.data.articles });
    };

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          console.log('do validate');
        }};

    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' 
                onSubmit={this.onSearchSubmit} 
                >
                    <div className='field'>
                        <label> Haber Ara</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={this.onInputChange}
                           onKeyDown={this.handleKeyDown}
                        ></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;