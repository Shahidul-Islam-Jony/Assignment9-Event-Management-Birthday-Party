
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";


const Login = () => {

    const {loginUserByEmail} = useContext(AuthContext);

   const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email);
    // console.log(password);

    loginUserByEmail(email,password)
    .then(result=>{
        console.log(result);
        toast.success("Login Successful",{
            position:toast.POSITION.TOP_CENTER,
            theme:"colored",
        })
    })
    .catch(error=>{
        console.error(error);
        toast.warn(error.message,{
            position:toast.POSITION.TOP_CENTER,
            theme:"colored",
        })
    })

   }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p className="text-center my-1">Or Sign In with</p>
                                <Link className="btn btn-outline w-full capitalize">Google</Link>
                            </div>
                            <div className="mt-4">
                                <p>Create New Account ? <Link to="/register" className="text-red-500 font-bold ml-3">Register</Link></p>
                            </div>
                        </form>
                    </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;