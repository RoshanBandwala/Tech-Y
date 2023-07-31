import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

const Service = () => {
  return (
    <div className='service' >
        <Carousel
        infiniteLoop
        autoPlay
        showArrows={false}
        showThumbs={false}
        showIndicator={false}
        interval={1000}>
            <div>
                <img src={img1} alt="item1"/>
            </div>
            <div>
                <img src={img2} alt="item2"/>
            </div>
        </Carousel>

    
        </div>
  )
}

export default Service
