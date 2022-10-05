import { resturantSlider } from "./resturantSlider";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import {Carousel} from 'react-elastic-carousel';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeResturants() {

    const settings={
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 2,
        slidesToScroll: 2
    }
    return (  
        <div className="resturant-slider">
           <Slider {...settings}>
                {resturantSlider.map((obj, index)=>{
                    return(
                        <div 
                            key={index}
                            className="resturant-item">
                            <div className="resturant-img">
                                <img 
                                    src={`/homeResturantImg.png`}
                                />
                            </div>
                            <h3>{obj.name}</h3>
                            <p>{obj.location}</p>
                        </div>
                    )
                })}
           </Slider>
        </div>
    );
}

export default HomeResturants;