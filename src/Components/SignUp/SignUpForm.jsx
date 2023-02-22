import { useState } from "react";

function SignUpForm() {
    const [signUpForm, setSignUpForm] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            state: "",
            address: ""
        }
    )

    function handleSignUpForm(event){
        setSignUpForm(prevForm=>{
            return {
                ...prevForm,
                [event.target.name]: event.target.value
            }
        })
    }

    return (  
        <form className="signUpForm">
            <div className="main-form-section">
                <div className="firstName-phoneNumber">
                    
                    <input 
                        type= "text"
                        name= "firstName"
                        value={signUpForm.firstName}
                        onChange={handleSignUpForm}
                        placeholder="First Name"
                    />
                    <input 
                        type= "text"
                        name= "lastName"
                        value={signUpForm.lastName}
                        onChange={handleSignUpForm}
                        placeholder="Last Name"
                    />
                
                
                    <input 
                        type= "email"
                        name= "email"
                        value={signUpForm.email}
                        onChange={handleSignUpForm}
                        placeholder="E-mail"
                    />
                    <input 
                        type= "number"
                        name= "phoneNumber"
                        value={signUpForm.phoneNumber}
                        onChange={handleSignUpForm}
                        placeholder="Phone Number"
                    />
                    
                </div>
                <div className="state-and-address">
                    <input 
                        type= "text"
                        name= "state"
                        value={signUpForm.state}
                        onChange={handleSignUpForm}
                        placeholder= "State"
                    />
                    <input 
                        type="text"
                        name= "address"
                        value={signUpForm.address}
                        onChange={handleSignUpForm}
                        placeholder="Delivery Address"
                    />
                </div>
                <button className="signUpButton"> Sign Up </button>
            </div>
            <div className="separator">
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <div className="other-login">
                <button>Sign Up with Google</button>
                <button>Sign Up with Facebook</button>
            </div>
        </form>
    );
}

export default SignUpForm;