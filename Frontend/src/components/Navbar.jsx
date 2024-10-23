import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Logout from "./Logout";

const NavLink = ({ to, children }) => (


    <Link
        to={to}
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
    >
        {children}
    </Link>
);




const Navbar = () => {
    const userid=localStorage.getItem("userId")
    
    return (
        <nav className="bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                       <h1 className="text-white font-bold text-lg">TO-DO APP</h1> 
                        
                        <div className="flex flex-col md:flex-row">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/getalltasks">Ongoing To-Dos</NavLink>
                                <NavLink to="/usertasks"> All To-Dos</NavLink>
                                {/* <NavLink to="/buytasklist">Past To-Dos</NavLink> */}
                                <NavLink to="/add" >
                                <button className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-medium"> Add Task </button></NavLink>
                                
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="ml-4 flex items-center md:ml-6">
                            { userid?<Logout/>:<Link  to="/login" className="text-white bg-green-500 px-4 py-1  rounded-md hover:scale-105 " onClick={()=>window.location.reload()}>Login</Link>}
                        </div>  
                    </div>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;