import { Link, NavLink } from "react-router-dom";
import '../../../src/index.css'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
    const { user,logOut } = useContext(AuthContext);
    console.log(user);

    const links = <div className="flex flex-col lg:flex-row gap-4  font-medium">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/order">Your Order</NavLink>
    </div>

    const handleSignOut = () => {
            logOut()
            .then(res => {
                console.log(res);
                toast.warning("Logout Successful", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored",
                })
            })
            .catch(error => {
                console.log(error);
                toast.error("Something error", {
                    position: toast.POSITION.TOP_CENTER,
                    theme: "colored",
                })
            })
    }

    return (
        <div>
            <div className="navbar mt-8 rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[40] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-3">
                        <img className=" w-16 h-14 rounded-full" src="/logo.png" alt="" />
                        <a className="text-xl font-medium lg:text-2xl lg:font-bold">Happy Birthday</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user? <div className="flex items-center gap-3">
                            <p>{user.displayName}</p>
                            <img className="w-12 h-12 rounded-full" src={user.photoURL} alt="" />     {/*user image show here */}
                            <button onClick={handleSignOut} className="btn btn-primary px-10 capitalize">Logout</button>
                        </div> :
                            <Link to="/login" className="btn btn-primary px-10 capitalize">Login</Link>
                    }
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;