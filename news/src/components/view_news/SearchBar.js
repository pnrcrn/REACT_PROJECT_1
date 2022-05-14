import React, { Component } from 'react'
import { newsApi } from '../../apis/news_api';
import './newsitem.css';

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
   
    render() {
        return (
            <div className='searchbar'>
                <form className='ui form' 
                onSubmit={this.onSearchSubmit}>
                    <div className='field'>
                        <label> HABER ARA</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={this.onInputChange}
                        ></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;