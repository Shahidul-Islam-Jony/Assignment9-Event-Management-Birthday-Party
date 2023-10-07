
import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const params = useParams();
    // console.log(params);
    const services = useLoaderData();
    // console.log(services);


    let service = {};

    if(services){
        const detailsService = services.find(service=> service.name === params.name);
        // console.log(detailsService);
       service = detailsService;
    }
    // console.log(service);

    const {name,image,price,description} = service;

    return (
        <div className="my-14">
            <img className="w-full h-[500px]" src={image} alt={name}></img>
            <p className="text-3xl font-bold mt-4">{name}</p>
            <p className="text-2xl font-semibold my-2">{price}</p>
            <p>{description}</p>
            <div className="text-center"><Link className="mt-6 btn w-72 btn-secondary capitalize font-bold text-xl">
                {
                    params.name === 'Cake and Dessert Ordering' || params.name === 'Party Supplies' ? "Order Now" : "Hire Now"
                }
                </Link></div>
        </div>
    );
};

export default ServiceDetails;