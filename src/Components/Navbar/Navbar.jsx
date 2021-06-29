import React from 'react'
import image from '../images/horizon web-logo.png'
import './Navbar.css'

function Navbar() {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={image} alt="web logo" className="img-responsive" width="160px;"
                        height="40px;"/>
                </a>
                <ul>
                    <li>ABOUT US</li>
                </ul>
        </div>
            </nav>
    </div>
    )
}

export default Navbar
