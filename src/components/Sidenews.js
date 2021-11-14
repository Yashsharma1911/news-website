import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const Sidenews = (props) => {
    const [articles, setArticles] = useState([]);

    const updateSideNews = async () => {
        const url = `https://newsapi.org/v2/everything?q=fact&sortBy=publishedAt&apiKey=${props.apiKey}&pageSize=8`
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
    }
    function truncate(str, n) {
        return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
    };

    useEffect(() => {
        updateSideNews();
         // eslint-disable-next-line 
    }, []);
    return (
        <div>
            <div className="container" id="sideContainer">
                <h4 style={{marginTop: '1em', marginLeft: '1.1em'}}>Fact-Check <span className="badge bg-danger">Live</span></h4>
                    <div className="container">
                        {articles.map((element => {
                            return <div key={element.url}>
                                <div className="card-body">
                                    <a className = 'link-dark' style={{textDecoration: 'none'}} href={element.url} target="_blank" rel="noreferrer"><h6 className="card-title sideCardTitle">{truncate(element.title, 70)}</h6></a>
                                    <p className="card-text"><small className="text-muted">{element.source.name}</small></p>
                                </div>
                            </div>
                        }))}
                    </div>
            
            </div>
        </div>
    )
}
Sidenews.defaultProps = {
    country: 'in',
    category: 'general'
}

Sidenews.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
}
export default Sidenews