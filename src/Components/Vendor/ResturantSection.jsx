import { vendorInfo } from "./vendorInfo";
import { FaCaretRight, FaCaretDown} from "react-icons/fa"

const ResturantSection = () => {

    return (
        <section className="resturant-section">
            <h2>Resturants and Vendor</h2>
            <div className="bar"></div>
            <div>
                {vendorInfo.map(vendor=>{
                    return (
                        <div className="vendor-info" key={vendor.id}>
                            <h3>{vendor.Location}</h3>
                            <div className="vendor-places">
                                {vendor.places.map((place, index)=>{
                                    return (
                                        <div className="vendor-place" key={place.id}>
                                            <div>
                                                <h4>{place.city}</h4>
                                                <p>{place.number}</p>
                                            </div>
                                            <div>
                                                {index===3 || index ===5  ? <i><FaCaretDown /></i> : <i><FaCaretRight /></i>}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default ResturantSection;
