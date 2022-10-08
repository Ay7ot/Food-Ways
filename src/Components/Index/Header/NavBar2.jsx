import { useState, useEffect } from "react";
import { FaBars, FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom";

function getWindowDimensions() {
    const { innerWidth: width} = window;
    return {
      width
    };
  }
  
  export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
}

function Navbar2({navToggle, toggleNav}) {
    const { width } = useWindowDimensions();

    if(width <= 992){
        return (  
            <>
               {
                navToggle ?  
                    <div className="toggledNavBar">
                        <i onClick={()=>toggleNav()}><FaArrowLeft /></i>
                        <ul>
                            <li><Link to="/" onClick={()=>toggleNav()}>Home</Link></li>
                            <li><Link to="/vendor" onClick={()=>toggleNav()}>Vendor</Link></li>
                            <li><Link to="/location" onClick={()=>toggleNav()}>Location</Link></li>
                            <li><Link to="/about" onClick={()=>toggleNav()}>About</Link></li>
                            <li><Link to="/faq" onClick={()=>toggleNav()}>FAQ</Link></li>
                        </ul>
                        <div>
                            <button className="login-toggled">LOGIN</button>
                            <button className="signup-toggled"><a href="#">SIGN UP</a></button>
                        </div> 
                    </div> 
                    : 
                    <div></div>
                }
                <nav className="smallNav2">
                    <i onClick={()=>toggleNav()}><FaBars /></i>
                    <h2>Food Ways</h2>
                    <button>Get Started</button>
                </nav>
            </>
        );
    }else{
        return(
            <nav className="bigNav2">
                <div className="nav-brand">
                    <Link to="/" style={{textDecoration: "none"}}><p>Food Ways</p></Link>
                </div>
                <ul>
                    <li><Link to="/vendor">Vendor</Link></li>
                    <li><Link to="/location">Location</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
                <div>
                    <button className="login">LOGIN</button>
                    <button className="signup"><a href="#">SIGN UP</a></button>
                </div>
            </nav>
        )
    }
}

export default Navbar2;