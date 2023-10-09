import { useLoaderData } from "react-router-dom";
import Slider from "../../components/slider/Slider";
import Services from "../../components/services/services";
import Footer from "../../components/footer/Footer";
import PartyTheme from "../../components/PartyTheme/PartyTheme";
import SpecialCake from "../../components/SpecialCake/SpecialCake";

const Home = () => {
    const services = useLoaderData();
    // console.log(services);
    return (
        <div className="my-7">
            <Slider></Slider>
            <div className="mt-14">
                <h3 className="text-5xl font-extrabold text-center">Our Services</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 lg:gap-8 mb-10 ">
                {
                    services?.map(service=><Services key={service.name} service={service}></Services>)
                }
            </div>
            <SpecialCake></SpecialCake>
            <PartyTheme></PartyTheme>
            <Footer></Footer>
        </div>
    );
};

export default Home;