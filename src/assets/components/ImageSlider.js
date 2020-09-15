import React from 'react'
import '../../App.js';
function ImageSlider() {
    return (
            <div id="carouselExampleIndicators" className="carousel slide jumbotron" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img height={500} src='/img/1.png' className="d-block w-100" alt="carousel 1"/>
                    </div>
                    <div className="carousel-item">
                        <img height={500} src='/img/2.png' className="d-block w-100" alt="carousel 2"/>
                    </div>
                    <div className="carousel-item">
                        <img height={500} src='/img/33.jpg' className="d-block w-100" alt="carousel 3"/>
                    </div>
                    <div className="carousel-item">
                        <img height={500} src='/img/44.jpg' className="d-block w-100" alt="carousel 4"/>
                    </div>
                    <div className="carousel-item">
                        <img src='/img/55.jpg' className="d-block w-100" alt="carousel 5"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className= "carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
    )
}

export default ImageSlider
