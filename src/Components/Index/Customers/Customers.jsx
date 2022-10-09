import { CustomerInfo } from "./customerInfo";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css"

function Customers() {
    return (  
        <div className="AllCustomers">
            {CustomerInfo.map(customer=>{
                return (
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <div className="customer" key={customer.id}>
                            <img src={customer.img}/>
                            <div>
                                <p>{customer.Comments}</p>
                                <h3>{customer.name}</h3>
                            </div>
                        </div>
                    </AnimationOnScroll>
                )
            })}
        </div>
    );
}

export default Customers;