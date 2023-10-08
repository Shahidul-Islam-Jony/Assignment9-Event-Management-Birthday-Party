
import aboutUs from "../../assets/images/aboutUs.png"
import Footer from "../../components/footer/Footer";

const AboutUs = () => {
    return (
        <div className="my-10">
            <div className="hero rounded-lg h-[400px]" style={{ backgroundImage: `url(${aboutUs})` }}>
                <div className="hero-overlay rounded-lg bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-extrabold">About US</h1>
                    </div>
                </div>
            </div>
            <div className="my-10">
                <h3 className="text-3xl font-bold mb-2">About US</h3>
                <p>
                    At Happy Birthday, we are dedicated to turning your special day into an unforgettable celebration. With a passion for creating magical moments and a keen eye for detail, we have been bringing smiles to faces and joy to hearts for 5 years. <br />

                    Our team of experienced event planners understands that every birthday is a unique milestone, and we take pride in crafting tailor-made experiences that reflect your personality, preferences, and dreams. From intimate gatherings to extravagant bashes, we handle every aspect of your birthday celebration with creativity, professionalism, and a commitment to excellence.
                </p>
                <h3 className="text-3xl font-bold mb-2 mt-4">Our Story</h3>
                <p>
                    Founded in 5 years, Happy Birthday has evolved into a trusted name in the world of birthday party event management. It all started with a vision to transform ordinary birthdays into extraordinary experiences. Over the years, our passion for creating magical moments has only grown stronger.
                </p>
                <h3 className="text-3xl font-bold mb-2 mt-4">Our Approach</h3>
                <p>
                    At Happy Birthday, we approach each birthday celebration as a work of art. We believe that every detail matters, and our creative team is dedicated to making every aspect of your event a masterpiece. From conceptualizing unique themes to sourcing the finest decorations and coordinating seamless logistics, we handle it all so you can focus on enjoying your special day.
                </p>
                <h3 className="text-3xl font-bold mb-2 mt-4">Our Mission</h3>
                <p>
                    Our mission is simple: to make your birthday dreams come true. We understand that birthdays are not just dates on a calendar; they are moments of joy, reflection, and celebration. Thats why we go the extra mile to ensure that your birthday party is a reflection of your personality and a source of lasting memories.
                </p>
                <h3 className="text-3xl font-bold mb-2 mt-4">Our Commitment</h3>
                <p>
                    When you choose Happy Birthday, you are choosing a commitment to excellence. We take pride in our reputation for professionalism, reliability, and creativity. Our goal is to exceed your expectations and provide you with an unforgettable experience that you and your guests will cherish.
                </p>
                <h3 className="text-3xl font-bold mb-2 mt-4">Join Us in Celebration</h3>
                <p>
                    Whether you are envisioning an elegant soirée, a fun-filled theme party, or a surprise celebration that leaves everyone in awe, [Your Company Name] is here to make it happen. We invite you to join us in the celebration of lifes milestones, one birthday at a time. <br />

                    Contact us today to discuss your upcoming birthday party, and lets embark on the journey of crafting an extraordinary celebration together!
                </p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;