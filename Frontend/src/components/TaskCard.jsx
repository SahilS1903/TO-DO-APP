// src/components/TaskCard.jsx
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TaskCard = ({ task }) => {
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
