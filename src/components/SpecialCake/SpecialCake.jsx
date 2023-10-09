import { Link } from "react-router-dom";
import specialCake1 from "../../assets/specialCake/specialCake.jpg"
import specialCake2 from "../../assets/specialCake/specialCake1.jpg"
import specialCake3 from "../../assets/specialCake/specialCake2.jpg"
import specialCake4 from "../../assets/specialCake/specialCake4.jpg"

const SpecialCake = () => {
    return (
        <div className="flex flex-col lg:flex-row-reverse items-center lg:my-16 gap-8">
            <div className="text-center my-14" data-aos="fade-down">
                <h3 className="text-5xl font-extrabold">Special Cake</h3>
                <h4 className="text-3xl font-bold mt-2">Choose Special Cake for birthday</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-4">
                <div className="bg-base-100 h-[350px] shadow-xl" data-aos="zoom-in"  data-aos-duration="2000">
                    <Link><img className="rounded-lg w-[400px] h-[350px]" src={specialCake1} /></Link>
                </div>
                <div className=" bg-base-100 h-[350px] shadow-xl" data-aos="zoom-in"  data-aos-duration="2000">
                    <Link><img className="rounded-lg w-[400px] h-[350px]" src={specialCake2} /></Link>
                </div>
                <div className="bg-base-100 shadow-xl" data-aos="zoom-in"  data-aos-duration="2000">
                    <Link><img className="w-[400px] h-[350px] rounded-lg" src={specialCake3} /></Link>
                </div>
                <div className="bg-base-100 shadow-xl" data-aos="zoom-in"  data-aos-duration="2000">
                    <Link><img className="rounded-lg w-[400px] h-[350px]" src={specialCake4} /></Link>
                </div>
            </div>
        </div>
    );
};

export default SpecialCake;