import React,{Component} from 'react';
import { newsApi } from './apis/news_api';
import Header from './component/header/Header';
import NewsList from './component/view_news/NewsList';
import SearchBar from './component/view_news/SearchBar';

class App extends Component {


  state = { news: [] };//response'dan dönen değeri alıp listelemek için
  //bize dizi dönüyor o yüzden dizi olarak aldık

  onTermSubmit= async term=>{
    const response=await newsApi.get('',{
      params:{
        q:term,
      }
    });
    this.setState({news: response.data.articles});
  };


  render(){
  return (
    <div className="ui segment">
      <Header></Header>
<SearchBar onSearchSubmit={this.onTermSubmit}></SearchBar>
<NewsList news={this.state.news}></NewsList>
    </div>
  );
}
}
export default App;
