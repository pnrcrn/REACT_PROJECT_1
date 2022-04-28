import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
    const renderedList = news.map(newshow => {
        return <NewsItem
             key={newshow.title}
            newshow={newshow}>
        </NewsItem>
    })
    return (
        <div>{renderedList}</div>
    )
};

export default NewsList;