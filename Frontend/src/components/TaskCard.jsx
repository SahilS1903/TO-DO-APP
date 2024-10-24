// src/components/TaskCard.jsx
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();
  const confirmPurchase = async (id) => {
    try {
      await axios.put(
        `http://localhost:3000/api/task/tasks/${id}/buy`,
        {},
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("accessToken")
            )}`,
          },
        }
      );
      alert("Purchase successful!");
    } catch (error) {
      console.error("Error purchasing task:", error);
      alert("Failed to complete purchase. Please try again.");
    }
    navigate("/");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 m-4">
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{task.TaskName}</h3>
        <p className="text-gray-600 mt-1">{task.description}</p>

        <button
          onClick={() => confirmPurchase(task._id)}
          className="mt-4 inline-block bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition-colors"
        >
          Task Completed
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
