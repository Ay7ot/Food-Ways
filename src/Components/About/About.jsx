import Navbar2 from "../Index/Header/NavBar2";
import MainAbout from "./MainAbout";
import Feedback from "./Feedback";
import ContactUs from "./Contact";
import Footer from "../Footer/Footer";
import "animate.css/animate.min.css"
import { AnimationOnScroll } from "react-animation-on-scroll";
import {Zoom} from "react-reveal"

function About({navToggle, toggleNav}) {
    return (  
        <>
           <Navbar2 navToggle={navToggle} toggleNav={toggleNav}/>
           <MainAbout /> 
            <Zoom>
                <Feedback />
            </Zoom> 
           <ContactUs />
           <AnimationOnScroll animateIn="animate__fadeIn">
                <Footer />
           </AnimationOnScroll>
        </>
    );
}

export default About;