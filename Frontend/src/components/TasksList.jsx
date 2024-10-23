// src/pages/TasksList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskCard from "./TaskCard";

const TasksList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/task/getSellableTasks", {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("accessToken"))}`,
                    },
                });
                setTasks(response.data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div className="flex flex-wrap items-center text-center justify-center px-4"> 
            {tasks?.map((task) => (
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2" key={task._id}>
                    <TaskCard task={task} />
                </div>
            ))}
        </div>
    );
};

export default TasksList;
