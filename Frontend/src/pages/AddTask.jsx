import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
    const [taskData, setTaskData] = useState({
        TaskName: "",
        description: "",
        
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setTaskData({
            ...taskData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const accessToken = JSON.parse(localStorage.getItem("accessToken"));

        console.log(accessToken)

        try {
            const response = await axios.post(
                "http://localhost:3000/api/task/",
                taskData,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            alert("TO-DO added successfully!");
            navigate("/getalltasks");
        } catch (error) {
            console.error("Error adding task:", error);
            alert(error.response?.data?.message || "Failed to add task");
        }
    };

    return (<div className="flex items-center justify-center my-auto min-h-screen">
        <div className="max-w-md mx-auto flex flex-col item-center justify-center  border border-gray-300 px-4 py-6 rounded-lg shadow-lg hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Add a New Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Task</label>
                    <input
                        type="text"
                        name="TaskName"
                        value={taskData.TaskName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={taskData.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />
                </div>

               

                <div className="flex items-center justify-center">
                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold  py-2 px-4 rounded"
                >
                    Add Task
                </button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default AddTask;
