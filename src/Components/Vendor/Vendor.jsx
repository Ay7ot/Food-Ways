import Navbar2 from "../Index/Header/NavBar2";
import ResturantSection from "./ResturantSection";
import Footer from "../Footer/Footer";


function Vendor({navToggle, toggleNav}) {
    return (  
        <>
            <Navbar2 navToggle={navToggle} toggleNav={toggleNav}/>
            <ResturantSection />
            <Footer />
        </>
    );
}

export default Vendor;