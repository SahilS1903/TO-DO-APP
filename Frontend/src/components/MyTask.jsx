import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MyTask = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/task/usertasks", {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("accessToken"))}`,
                    },
                });
                setTasks(response.data);
                console.log(response.data)
                setLoading(false);
            } catch (error) {
                console.error("Error fetching tasks:", error);
                setError("Failed to load tasks");
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-red-500 text-center">
                    <p className="text-xl">{error}</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="mt-4 text-orange-600 hover:underline"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/task/${id}`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("accessToken"))}`,
                },
            });
            setTasks(tasks.filter((task) => task._id !== id));
            
        } catch (error) {
            console.error("Error deleting task:", error);
            alert("Failed to delete task. Please try again.");
        }
    }

    return (
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-2xl font-semibold text-gray-900">My TO-DOs</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all your TO-DOs.
                    </p>
                </div>
                
            </div>

            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Task
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Description
                                        </th>
                                        
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Status
                                        </th>
                                        
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {tasks.map((task) => (
                                        <tr key={task._id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {task.TaskName}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {task.description}
                                            </td>
                                            
                                            <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                {task.buyer ? (
                                                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                        Comleted
                                                    </span>
                                                ) : task.isSellable ? (
                                                    <span className="inline-flex rounded-full bg-orange-100 px-2 text-xs font-semibold leading-5 text-orange-800">
                                                        Pending
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">
                                                        Completed
                                                    </span>
                                                )}
                                            </td>
                                           
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <div className="flex gap-3 justify-end">
                                                    
                                                    <button
                                                        onClick={() => handleDelete(task._id)}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                {tasks.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">
                            No tasks found. Start by adding a new task.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyTask;