import React from "react";
import "../styles/carousel.css"
import Homeimg1 from "../images/homeimg1.jpg";
import Homeimg2 from "../images/homeimg2.jpg";
import Homeimg3 from "../images/homeimg3.jpg";

const Carousel = () => 

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block homeimg w-100" src={Homeimg1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block homeimg w-100" src={Homeimg2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block homeimg w-100" src={Homeimg3} alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
;


export default Carousel;