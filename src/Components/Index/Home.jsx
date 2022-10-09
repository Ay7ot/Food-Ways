import { useState } from "react";
import Header from "./Header/Header";
import HomeResturants from "./Resturants/HomeResturants";
import Customers from "./Customers/Customers";
import Info from "./InfoSection/Info";
import Footer from "../Footer/Footer";
import { Fade } from "react-reveal"
import "animate.css/animate.min.css"
import { AnimationOnScroll } from "react-animation-on-scroll";

function Home({navToggle, toggleNav}) {

    return (  
        <>
            <div className='Header'>
                <Header navToggle={navToggle} toggleNav={toggleNav}/> 
            </div> 
            <Fade up>
                <div className='HomeResturants'>
                    <h2>Resturants near you</h2>
                    <div className='bar'></div>
                    <HomeResturants/>
                </div>
            </Fade>
            <div className='customers'>
                <h2>What our Customers say about us</h2>
                <div className='bar'></div>
                <Customers />
            </div>
            <section className='Info'>
                <h2>Food Ways</h2>
                <Info />
            </section>
            <AnimationOnScroll animateIn="animate__slideInUp">
                <Footer />
            </AnimationOnScroll>
       </>
    );
}

export default Home;