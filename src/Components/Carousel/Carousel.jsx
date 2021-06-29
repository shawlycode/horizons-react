import React from 'react'
import hero from '../images/hero/hero-1.jpg'
import hero1 from '../images/hero/hero-1.jpg'
import hero2 from '../images/hero/hero-2.jpg'
import hero3 from '../images/hero/hero-3.jpg'
import hero4 from '../images/hero/hero-4.jpg'

function Carousel() {
    return (
        
        <div className="container caroulsel-slides">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={hero} className="d-block w-100" alt="horizons"
                        height="400px; background-attachment-fixed"/>
                </div>
                <div className="carousel-item">
                    <img src={hero1} className="d-block w-100"
                        alt="horizons" height="400px;"/>
                </div>
                <div className="carousel-item">
                    <img src={hero2} className="d-block w-100" alt="horizons"
                        height="400px;"/>
                </div>
                <div className="carousel-item">
                    <img src={hero3} className="d-block w-100" alt="horizons"
                        height="400px;"/>
                </div>
                <div className="carousel-item">
                    <img src={hero4} className="d-block w-100" alt="horizons"
                        height="400px;"/>
                </div>
            </div>

        </div>
    </div>
        
    );
}

export default Carousel
