import { useLoaderData } from "react-router-dom";
import { getItemFromLocalStorage } from "../../localStroge/LocalStroge";

const YourOrder = () => {
    const previousOrder = getItemFromLocalStorage();
    // console.log(previousOrder);
    const services = useLoaderData();
    // console.log(services);

    // const [orderdServices,setOrderedServices] = useState([]);
    const orderdServices = [];

    for (const name of previousOrder) {
        const service = services.find(service => service.name === name);
        // setOrderedServices(service);
        orderdServices.push(service);
    }



    return (
        <div>
            {
                orderdServices.map(service => <div className="mt-8 mb-4" key={service.name}>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img className="w-96 h-52" src={service.image} alt={service.name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.name}</h2>
                            <p>{service.price}</p>
                            <p>{service.description.length > 200 && service.description.slice(0,200)}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default YourOrder;