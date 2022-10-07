import { resturantSlider } from "./resturantSlider";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeResturants() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true, //modification
        autoplaySpeed: 4000, //modification
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                } 
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
        ]
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