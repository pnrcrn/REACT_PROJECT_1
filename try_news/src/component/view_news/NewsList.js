import React from 'react'
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
    const renderList = news.map(newshow => {
        return (
            <NewsItem newshow={newshow}></NewsItem>  
   
        )})
    return (
        <div>{renderList}</div>
    );
};

export default NewsList;
