import React from 'react'
import '../App.css'

const Navbar = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div className="container-fluid">
                        <img src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/100/000000/external-world-news-news-icongeek26-outline-gradient-icongeek26-1.png" alt="logo" width="30" height="30" />
                        <a className="navbar-brand" href="/" style={{ marginLeft: '0.5rem' }}> Gold News</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Latest News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Pricing</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar