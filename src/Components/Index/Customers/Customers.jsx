import { CustomerInfo } from "./customerInfo";

function Customers() {
    return (  
        <div className="AllCustomers">
            {CustomerInfo.map(customer=>{
                return (
                    <div className="customer" key={customer.id}>
                        <img src={customer.img}/>
                        <div>
                            <p>{customer.Comments}</p>
                            <h3>{customer.name}</h3>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Customers;