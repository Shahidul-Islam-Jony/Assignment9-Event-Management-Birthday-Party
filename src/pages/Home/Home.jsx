import { useLoaderData } from "react-router-dom";
import Slider from "../../components/slider/Slider";
import Services from "../../components/services/services";
import Footer from "../../components/footer/Footer";

const Home = () => {
    const services = useLoaderData();
    // console.log(services);
    return (
        <div className="my-7">
            <Slider></Slider>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8 mb-10">
                {
                    services?.map(service=><Services key={service.name} service={service}></Services>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;