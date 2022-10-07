import { FooterInfo } from "./FooterInfo";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram} from "react-icons/fa"
import "./Footer.css"

function Footer() {
    return (  
        <div className="Footer">
            <h2>Food Ways</h2>
            <div className="footer-items">
                {FooterInfo.map(item=>{
                    return (
                        <div className="item-for-footer" key={item.id}>
                            <h3>{item.footerInfoTitle}</h3>
                            <ul>
                                {item.fooInfoValues.map(obj=>{
                                    return <li key={obj.id}><a>{obj.value}</a></li>
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
            <div className="footer-icons">
                <div><FaFacebook /></div>
                <div><FaTwitter /></div>
                <div><FaYoutube /></div>
                <div><FaInstagram /></div>
            </div>
        </div>
    );
}

export default Footer;