import { useState } from "react";

function Feedback() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        comments: "",
    })

    function handleFormData(event){
        setFormData(prevFormData=>{
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (  
        <section className="Feedback">
            <h2>We value your Feedbacks</h2>
            <div className="bar"></div>
            <form className="Feedback-form">
               <div className="Feedback-form-Info">
                    <div className="Feedback-form-Inputs">
                            <div>
                                <input 
                                    type="text"
                                    placeholder="First Name"
                                    onChange={handleFormData}
                                    name="firstName"
                                    value={formData.firstName}
                                />
                            </div>
                            <div>    
                                <input 
                                    type="text"
                                    placeholder="First Name"
                                    onChange={handleFormData}
                                    name="lastName"
                                    value={formData.lastName}
                                />
                            </div>
                            <div>
                                <input 
                                    type="email"
                                    placeholder="Email"
                                    onChange={handleFormData}
                                    name="email"
                                    value={formData.email}
                                />
                            </div>
                            <div>    
                                <input 
                                    type="number"
                                    placeholder="Phone Number"
                                    onChange={handleFormData}
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                />
                            </div>
                    </div>
                    <textarea 
                        value={formData.comments}
                        onChange={handleFormData}
                        name="comments"
                        placeholder="Your Message"
                    />
               </div>
               <div className="form-button">
                    <button>Send Message</button>
                </div>
            </form>
        </section>
    );
}

export default Feedback;