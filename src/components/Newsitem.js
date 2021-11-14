import React from 'react'

const Newsitem =(props)=> {
   
        let {title, description, imageUrl, newsUrl, author, source, date} = props;
        return (
            <div className="card my-3" id="card-newsitem">
                <img src={imageUrl} className="card-img-top" alt="..." height="400px" style={{objectFit: 'cover', width: '100%'}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p>Author: {!author?'Unknown':author}</p>
                    <p>Source: {source}</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <p className="card-text"><small className="text-muted" style={{marginBottom: '0',marginTop: '0'}}>Published: {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} className="btn btn-primary" target="_blank" rel="noreferrer" >Read More...</a>
                    </div>
                </div>
            </div>
        )
  
}
export default Newsitem