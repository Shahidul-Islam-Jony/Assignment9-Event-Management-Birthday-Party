import { Link } from "react-router-dom";

const SpecialCake = () => {
    return (
        <div className="flex flex-col lg:flex-row-reverse items-center lg:my-16 gap-8">
            <div className="text-center my-14" data-aos="fade-left">
                <h3 className="text-5xl font-extrabold">Special Cake</h3>
                <h4 className="text-3xl font-bold mt-2">Choose Special Cake for birthday</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-4">
                <div className="bg-base-100 h-[350px] shadow-xl" data-aos="zoom-in"  data-aos-duration="2000">
                    <Link><img className="rounded-lg w-[400px] h-[350px]" src="/src/assets/specialCake/specialCake.jpg" /></Link>
                </div>
                <div className=" bg-base-100 h-[350px] shadow-xl" data-aos="zoom-in"  data-aos-duration="2000">
                    <Link><img className="rounded-lg w-[400px] h-[350px]" src="/src/assets/specialCake/specialCake1.jpg" /></Link>
                </div>
                <div className="bg-base-100 shadow-xl" data-aos="zoom-in"  data-aos-duration="2000">
                    <Link><img className="w-[400px] h-[350px] rounded-lg" src="/src/assets/specialCake/specialCake2.jpg" /></Link>
                </div>
                <div className="bg-base-100 shadow-xl" data-aos="zoom-in"  data-aos-duration="2000">
                    <Link><img className="rounded-lg w-[400px] h-[350px]" src="/src/assets/specialCake/specialCake6.jpg" /></Link>
                </div>
            </div>
        </div>
    );
};

export default SpecialCake;