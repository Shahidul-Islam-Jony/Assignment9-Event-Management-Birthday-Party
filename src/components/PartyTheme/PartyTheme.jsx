import { Link } from "react-router-dom";

const PartyTheme = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center md:my-16 gap-8">
            <div className="text-center my-14" data-aos="fade-up">
                <h3 className="text-5xl font-extrabold">Beautiful Party Theme</h3>
                <h4 className="text-3xl font-bold mt-2">Choose Your best Party Theme</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-4">
                <div className="bg-base-100 shadow-xl lg:w-80" data-aos="flip-left"  data-aos-duration="2000">
                    <Link><img className="rounded-lg" src="/src/assets/partyTheme/PartyTheme1.jpg"/></Link>
                </div>
                <div className="bg-base-100 shadow-xl lg:w-80" data-aos="flip-right"  data-aos-duration="2000">
                    <Link><img className="rounded-lg" src="/src/assets/partyTheme/partytheme2.jpg"/></Link>
                </div>
                <div className="bg-base-100 shadow-xl lg:w-80" data-aos="flip-left"  data-aos-duration="2000">
                    <Link><img className="h-full rounded-lg" src="/src/assets/partyTheme/partytheme3.jpg"/></Link>
                </div>
                <div className="bg-base-100 shadow-xl lg:w-80" data-aos="flip-right"  data-aos-duration="2000">
                    <Link><img className="rounded-lg" src="/src/assets/partyTheme/partyTheme6.jpg"/></Link>
                </div>
            </div>
        </div>
    );
};

export default PartyTheme;