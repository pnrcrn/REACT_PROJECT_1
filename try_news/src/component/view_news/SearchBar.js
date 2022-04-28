import React, { Component } from 'react'
import StreamCreateInput from '../streams/StreamCreateInput';

class SearchBar extends Component {

    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    };

    onSearchSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);//Burada arama formumuz için değeri aktarıyoruz
    }
    render() {
        return (
            <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={this.onSearchSubmit}>
                    <div className='field'>
                        <label>Haber Ara</label>
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