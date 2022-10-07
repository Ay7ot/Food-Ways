import { useState } from "react";
import Header from "./Header/Header";
import HomeResturants from "./Resturants/HomeResturants";
import Customers from "./Customers/Customers";
import Info from "./InfoSection/Info";
import Footer from "../Footer/Footer";

function Home({navToggle, toggleNav}) {

    return (  
        <>
            <div className='Header'>
            <Header navToggle={navToggle} toggleNav={toggleNav}/> 
            </div> 
            <div className='HomeResturants'>
            <h2>Resturants near you</h2>
            <div className='bar'></div>
            <HomeResturants/>
            </div>
            <div className='customers'>
            <h2>What our Customers say about us</h2>
            <div className='bar'></div>
            <Customers />
            </div>
            <section className='Info'>
            <h2>Food Ways</h2>
            <Info />
            </section>
            <Footer />
       </>
    );
}

export default Home;