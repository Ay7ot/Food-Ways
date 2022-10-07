import Navbar2 from "../Index/Header/NavBar2";
import MainAbout from "./MainAbout";
import Feedback from "./Feedback";
import ContactUs from "./Contact";
import Footer from "../Footer/Footer";

function About({navToggle, toggleNav}) {
    return (  
        <>
           <Navbar2 navToggle={navToggle} toggleNav={toggleNav}/>
           <MainAbout /> 
           <Feedback />
           <ContactUs />
           <Footer />
        </>
    );
}

export default About;