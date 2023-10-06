import { Link, NavLink } from "react-router-dom";
import '../../../src/index.css'

const Navbar = () => {

    const links = <div className="flex flex-col lg:flex-row gap-4 text-white font-medium">
        <NavLink to="/">Home</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
        <NavLink to="about">About Us</NavLink>
        <NavLink to="order">Your Order</NavLink>
    </div>

    return (
        <div>
            <div className="navbar bg-slate-400 mt-8 rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-3">
                        <img className=" w-16 h-14 rounded-full" src="logo.png" alt="" />
                        <a className="text-xl font-medium lg:text-2xl lg:font-bold">Happy Birthday</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn btn-primary px-6">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;