import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Registration = () => {

    const {createUserByEmail} = useContext(AuthContext);

    const handleRegister =(e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        // console.log(email);
        const photoUrl = form.get('photoURL');
        const password = form.get('password');
        // console.log(password);
        createUserByEmail(email,password)
        .then(res=>{
            console.log(res);
            alert('Account created successfully')
        })
        .catch(error=>console.error(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onClick={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="email" name="photoURL" placeholder="Your Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <Link className="btn btn-primary capitalize">Register</Link>
                        </div>
                        <div>
                            <p className="text-center my-1">Or Sign Up with</p>
                            <Link className="btn btn-outline w-full capitalize">Google</Link>
                        </div>
                        <div className="mt-4">
                            <p>Already have an Account ? <Link to="/login" className="text-red-500 font-bold ml-3">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;