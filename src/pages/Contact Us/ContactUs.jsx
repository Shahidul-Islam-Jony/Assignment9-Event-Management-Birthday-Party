import Footer from "../../components/footer/Footer";

const ContactUs = () => {
    return (
        <div className="my-8">
            <div className="hero min-h-screen bg-base-200 rounded-lg mb-1">
                <div className="hero-content flex-col lg:flex-row w-full justify-between">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Contact Information</h1>
                        <p className="py-6">Thank you for choosing our event..</p>
                        <p className="text-xl font-bold">Mobile: +880748755588</p>
                        <p className="text-xl font-bold">Email: birthday@gmail.com</p>
                    </div>

                    <div className="w-1/2 flex flex-col justify-end">
                        <h2 className="mb-4 text-5xl font-bold">Contact Us</h2>
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="Name" placeholder="Your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="text" placeholder="Your Phone no." className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered resize-none h-36" placeholder="Type your Message"></textarea>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;