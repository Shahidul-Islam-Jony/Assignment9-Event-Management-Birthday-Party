import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Registration = () => {

    const { createUserByEmail, googleSignIn, update, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        // console.log(name);
        const email = form.get('email');
        // console.log(email);
        const url = form.get('photoURL');
        // console.log(url);
        const password = form.get('password');
        // console.log(password);

        if (password.length < 6) {
            return toast.warn("Password should at least 6 characters", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.warn("Password should have capital letter", {
                position: toast.POSITION.TOP_CENTER
            })
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            return toast.warn("Password should have special symbol", {
                position: toast.POSITION.TOP_CENTER
            })
        }

        // if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
        //     return toast.warn("Password should have capital letter and special character",{
        //         position:toast.POSITION.TOP_CENTER
        //     })
        // }

        createUserByEmail(email, password)
            .then(res => {
                console.log(res);
                toast.success("Account created successfuly", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored",
                })

                update(name, url)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => console.error(error))

                logOut();
                navigate("/login");
            })
            .catch(error => {
                // console.error(error);
                toast.warn(error.message, {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored",
                })
            })
    }


    // Google sign In
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then()
            .catch(error => {
                // console.error(error);
                toast.warn(error.message, {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored",
                })
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 border-4">
                <div className="card flex-shrink-0  lg:w-[500px] shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
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
                            <input type="text" name="photoURL" placeholder="Your Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary capitalize">Register</button>
                        </div>
                        <div>
                            <p className="text-center my-1">Or Sign Up with</p>
                            <Link onClick={handleGoogleSignIn} className="btn btn-outline w-full capitalize">Google</Link>
                        </div>
                        <div className="mt-4">
                            <p>Already have an Account ? <Link to="/login" className="text-red-500 font-bold ml-3">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;