import cake from "../../assets/images/cake2.jpg"
import catering from "../../assets/images/catering1.jpg"
import eventPlanning from "../../assets/images/eventPlanning1.jpg"
import magician from "../../assets/images/megisian2.jpg"
import partySupplies from "../../assets/images/partySupplies2.jpg"
import photographar from "../../assets/images/photographer2.jpg"

const Slider = () => {
    return (
        <div className="carousel w-full h-fit lg:h-[550px]">

            <div id="slide1" className="carousel-item relative w-full">
                <img src={cake} className="w-full hero z-10 relative" />
                <div className="hero-overlay z-20 absolute bg-opacity-50">
                    <div className="text-center flex items-center text-white border h-full justify-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Delicious Cake</h1>
                            <p className="mb-5">You can order a delicious cake for birthday from our online birthday services</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-30">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src={eventPlanning} className="w-full hero z-10 relative" />
                <div className="hero-overlay z-20 absolute bg-opacity-40">
                    <div className="text-center flex items-center text-white border h-full justify-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Event Planning</h1>
                            <p className="mb-5">You can hire our event planner. and decorate your birthday event by discussing our event planner</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-30">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={catering} className="w-full hero z-10 relative" />
                <div className="hero-overlay z-20 absolute bg-opacity-40">
                    <div className="text-center flex items-center text-white border h-full justify-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Catering services</h1>
                            <p className="mb-5">You can hire caterers as many as you need and serves food for guests.</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-30">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img src={magician} className="w-full hero z-10 relative" />
                <div className="hero-overlay z-20 absolute bg-opacity-40">
                    <div className="text-center flex items-center text-white border h-full justify-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Magician</h1>
                            <p className="mb-5">You can hire Magician for your birthday party entertainment</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-30">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide5" className="carousel-item relative w-full">
                <img src={partySupplies} className="w-full hero z-10 relative" />
                <div className="hero-overlay z-20 absolute bg-opacity-40">
                    <div className="text-center flex items-center text-white border h-full justify-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Party Supplies</h1>
                            <p className="mb-5">You can buy party supplies from our online site</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-30">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide6" className="carousel-item relative w-full">
                <img src={photographar} className="w-full hero z-10 relative" />
                <div className="hero-overlay z-20 absolute bg-opacity-40">
                    <div className="text-center flex items-center text-white border h-full justify-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Photographar And Videographar</h1>
                            <p className="mb-5">You can hire photographar and videographer for your party</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-30">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Slider;