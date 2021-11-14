
import './App.css';
import Navbar from './components/Navbar';
import Hastags from './components/Hastags';
import News from './components/News';
import React, { useState } from 'react'
import Sidenews from './components/Sidenews';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App=()=>{
  const apiKey = process.env.REACT_APP_NEWS_API;
  
  const [progress, setProgress] = useState(0)


    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#0d6efd'
        progress={progress}
      />
        <Hastags/>
        <div className="mainContainer">
          <div className="newsSection " id="newsSectionId">     
        <Routes>
              <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="onstart" country="in" category="general"/>} />
              <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" country="in" category="sports"/>} />
              <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" country="in" category="business"/>} />
              <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" country="in" category="health"/>} />
              <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" country="in" category="technology"/>} />
              <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" country="in" category="science"/>} />
              <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" country="in" category="general"/>} />
          </Routes>
            
          </div>
          <div className="latestStickNews" style={{overflow: 'auto'}}>
            <Sidenews apiKey={apiKey} key="general" country="in" category="general"/>
          </div>
        </div>
        </Router>
      </div>
    )
}
export default App