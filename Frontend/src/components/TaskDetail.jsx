import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TaskDetail = () => {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3000/api/task/gettaskbyid/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${JSON.parse(localStorage.getItem("accessToken"))}`,
                        },
                    }
                );
                setTask(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching task:", error);
                setError("Failed to load task details");
                setLoading(false);
            }
        };

        fetchTask();
    }, [id,showConfirmation]);

    const handleBuy = async () => {
        setShowConfirmation(true);
    };

    const confirmPurchase = async () => {
        try {
            await axios.put(
                `http://localhost:3000/api/task/tasks/${id}/buy`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("accessToken"))}`,
                    },
                }
            );
            alert("Purchase successful!");
            setShowConfirmation(false);
        } catch (error) {
            console.error("Error purchasing task:", error);
            alert("Failed to complete purchase. Please try again.");
        }
    };

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
        </div>
    );

    if (error) return (
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

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="px-8 py-10">
                    <div className="border-b pb-8">
                        <h1 className="text-3xl font-bold text-gray-900">{task.TaskName}</h1>
                        <div className="mt-4 flex items-center space-x-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                                {task.category}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                                {task.brand}
                            </span>
                        </div>
                    </div>

                    <div className="py-8 space-y-6">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Description</h2>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                {task.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-8 border-t">
                            <div>
                                <p className="text-sm text-gray-500">Price</p>
                                <p className="text-3xl font-bold text-gray-900">
                                    ${task.price.toFixed(2)}
                                </p>
                            </div>
                            <button
                                onClick={handleBuy}
                                disabled={!task.isSellable}
                                className={`px-8 py-3 rounded-lg text-white font-medium transition-colors
                                    ${task.isSellable 
                                        ? 'bg-orange-600 hover:bg-orange-700 active:bg-orange-800' 
                                        : 'bg-gray-400 cursor-not-allowed'}`}
                            >
                                {task.isSellable ? 'Buy Now' : 'Not Available'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {showConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Confirm Purchase
                            </h3>
                            <p className="text-gray-600">
                                Are you sure you want to purchase {task.TaskName} for ${task.price}?
                            </p>
                        </div>
                        
                        <div className="flex space-x-4 justify-end">
                            <button
                                onClick={() => setShowConfirmation(false)}
                                className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmPurchase}
                                className="px-4 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 font-medium transition-colors"
                            >
                                Confirm Purchase
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskDetail;