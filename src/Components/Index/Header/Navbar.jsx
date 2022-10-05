import { useState, useEffect } from "react";
import { FaBars, FaArrowLeft } from "react-icons/fa"

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

function Navbar({navToggle, toggleNav}) {
    const { width } = useWindowDimensions();

    if(width <= 992){
        return (  
            <>
               {
                navToggle ?  
                    <div className="toggledNavBar">
                        <i onClick={()=>toggleNav()}><FaArrowLeft /></i>
                        <ul>
                            <li><a href="#">Vendors</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Deals</a></li>
                        </ul>
                        <div>
                            <button className="login-toggled">LOGIN</button>
                            <button className="signup-toggled"><a href="#">SIGN UP</a></button>
                        </div> 
                    </div> 
                    : 
                    <div></div>
                }
                <nav className="smallNav">
                    <i onClick={()=>toggleNav()}><FaBars /></i>
                    <button>Get Started</button>
                </nav>
            </>
        );
    }else{
        return(
            <nav className="bigNav">
                <ul>
                    <li><a href="#">Vendors</a></li>
                    <li><a href="#">Locations</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Deals</a></li>
                </ul>
                <div>
                    <button className="login">LOGIN</button>
                    <button className="signup"><a href="#">SIGN UP</a></button>
                </div>
            </nav>
        )
    }
}

export default Navbar;