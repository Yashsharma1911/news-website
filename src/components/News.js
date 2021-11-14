import React, {useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
import '../App.css'


const News = (props) => {
    const [articles, setArticles] = useState([]);
    
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    //function to make titile's first character in uppercase
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const updateNews = async () => {
        props.setProgress(15);
        // api key for top headlines from perticular source
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=20`
        const url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=20`
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(50);
        setArticles(parsedData.articles);
        props.setProgress(75);
        setTotalResults(parsedData.totalResults);
        props.setProgress(100);
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} | Gold News`;
        updateNews();
        // eslint-disable-next-line 
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=20`
        setPage(page + 1) //setPage is used to update the page number but it is taking a liitle time before that url is fetcthing data this is why setPage is blow of url and I use page+1 in url so that it will fetch data till setPage will update to page+1
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }
    return (
        <>
            <div className="container" id="containerOverflow">
            <p className="card-text aboutResults"><small className="text-muted">About {totalResults.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} results</small></p>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                    scrollableTarget="containerOverflow">
                    <div>
                        {articles.map((element) => {
                            return <div key={element.url}>
                                <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} source={element.source.name} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )

}
News.defaultProps = {
    country: 'in',
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
}
export default News