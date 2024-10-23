import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mx-auto p-4 min-h-screen flex items-center justify-center flex-col ">
            <header className="text-center mb-6 flex flex-col gap-4">
                <h1 className="text-6xl font-bold">Welcome to the Home Page</h1>
                <p className="text-xl text-gray-600">Utilize your time to the fullest.</p>
            </header>

            <section className="mb-8">
            <Link to="/add" >
            <button className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-lg font-medium"> Add To-Do</button>
            </Link>
            </section>

            

            <footer className="text-center  absolute bottom-0">
                <p className="text-gray-600">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
