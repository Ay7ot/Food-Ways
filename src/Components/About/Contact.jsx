import {FaFacebook, FaTwitter, FaYoutube, FaInstagram} from "react-icons/fa"

function ContactUs() {
    return (  
        <section className="contactUs">
            <h2>Contact us</h2>
            <div className="bar"></div>
            <div className="contact-Info">
                <div className="number_and_email">
                    <p>Email: <a href="mailto:foodways@customercare.com">foodways@customercare.com</a></p>
                    <p>Customer Care: <a href="tel:+2341234567890">+234_1234567890</a></p>
                </div>
                <div className="contact-icons">
                    <div>
                        <i><FaFacebook /></i>
                        <p>food_ways</p>
                    </div>
                    <div>
                        <i><FaTwitter /></i>
                        <p>food_ways</p>
                    </div>
                    <div>
                        <i><FaYoutube /></i>
                        <p>food_ways</p>
                    </div>
                    <div>
                        <i><FaInstagram /></i>
                        <p>food_ways</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;