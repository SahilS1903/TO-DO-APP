// src/components/Logout.jsx
import React from "react";

import { useNavigate } from "react-router-dom";

const Logout = () => {
    
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("userId") 
        // Clear cookies and logout user
        navigate("/");
        window.location.reload()
    };

    return (
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">
            Logout
        </button>
    );
};

export default Logout;
