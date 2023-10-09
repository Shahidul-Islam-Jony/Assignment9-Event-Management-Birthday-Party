
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addToLS } from "../../localStroge/LocalStroge";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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

    const handleOrder=()=>{
        addToLS(name);
        toast.success("Ordered Successful", {
            position: toast.POSITION.TOP_CENTER,
            theme: "colored",
        })
    }

    return (
        <div className="my-14">
            <img className="w-full h-[500px]" src={image} alt={name}></img>
            <p className="text-3xl font-bold mt-4">{name}</p>
            <p className="text-2xl font-semibold my-2">{price}</p>
            <p>{description}</p>
            <div className="text-center"><Link onClick={handleOrder} className="mt-6 btn w-72 btn-secondary capitalize font-bold text-xl">
                {
                    params.name === 'Cake and Dessert Ordering' || params.name === 'Party Supplies' ? "Order Now" : "Hire Now"
                }
                </Link></div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ServiceDetails;