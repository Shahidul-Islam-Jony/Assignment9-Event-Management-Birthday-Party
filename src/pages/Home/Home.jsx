import { useLoaderData } from "react-router-dom";
import Slider from "../../components/slider/Slider";
import Services from "../../components/services/services";

const Home = () => {
    const services = useLoaderData();
    // console.log(services);
    return (
        <div className="mt-7">
            <Slider></Slider>
            <div className="grid grid-cols-2 mt-10 gap-8">
                {
                    services?.map(service=><Services key={service.name} service={service}></Services>)
                }
            </div>
        </div>
    );
};

export default Home;