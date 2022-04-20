import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import { unsplash } from '../api/unSplash';
import ImageList from './ImageList';


class App extends React.Component {

  state = {
    images: []
  };

  //Aramak istediğimiz değeri verip isteğimizi gönderiyoruz
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    }
    );
    this.setState({ images: response.data.results });

  };

  render() {
      return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}>
        </SearchBar>
        Found:{this.state.images.length} images
        <ImageList images={this.state.images}></ImageList>
      </div>
    )
  }

}
export default App;

















// onSearchSubmit(term) {

//   console.log(term);
// axios.get('https://api.unsplash.com/search/photos',{
//     params: { query:term },
//     headers: {
//       Authorization: 'Client-ID cFkqNDY95GgdkTQ-cW5BcfwFsAdF4fN9wjJ9GXZ5Csg'
//     }
//   }
//   ).then(
//     response=>{console.log(response.data.results);
//     });


// }
