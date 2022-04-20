
import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends React.Component {

    state = { term: '' }

    onInputChange(event) {
        // console.log(event.target.value)
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    } 

    render() {
        return (
            <div className='ui segment'>
                {/* Bind() etme this anahtar sözcüğünün kullanılma şekilleri */}
                <form onSubmit={
                    this.onFormSubmit
                } className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}>
                            {/* <input type="text" onChange={this.onInputChange}> */}
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;