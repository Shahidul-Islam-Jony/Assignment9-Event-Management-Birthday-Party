import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Services = ({ service }) => {
    // console.log(service);
    const {image,name,price,description} = service;
    return (
        <div>
            <div className="card bg-slate-400 shadow-xl">
                <figure><img className="h-96 w-full" src={image} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    {
                        description.length > 100 && <p>{description.slice(0,100)}</p>
                    }
                <Link to={`/services/${name}`} className="btn btn-success mt-4">Details</Link>
                </div>
            </div>
        </div>
    );
};

Services.propTypes = {
    service: PropTypes.object
}

export default Services;