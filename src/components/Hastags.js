import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Hastags = () => {
 
    return (
        <>
            <div className="hashTag">
                <ul className="nav justify-content-center" id="ulOfHashTag">
                    <li className="nav-item listOfHasTag">
                        <Link className="nav-link" to="/general">#General</Link>
                    </li>
                    <li className="nav-item listOfHasTag">
                        <Link className="nav-link" to="/business">#Business</Link>
                    </li>
                    <li className="nav-item listOfHasTag">
                        <Link className="nav-link" to="sports">#Sports</Link>
                    </li>
                    <li className="nav-item listOfHasTag">
                        <Link className="nav-link disabled" to="/">#International</Link>
                    </li>
                    <li className="nav-item listOfHasTag">
                        <Link className="nav-link" to="/technology">#Technology</Link>
                    </li>
                    <li className="nav-item listOfHasTag">
                        <Link className="nav-link" to="/health">#Health</Link>
                    </li>
                    <li className="nav-item listOfHasTag">
                        <Link className="nav-link" to="/science">#Science</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Hastags
