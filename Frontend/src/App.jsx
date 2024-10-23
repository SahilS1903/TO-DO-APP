// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./pages/Register";
import Navbar from "./components/Navbar"; // Import Navbar

import AddTask from "./pages/AddTask";
import TasksList from "./components/TasksList";
import TaskDetail from "./components/TaskDetail";
import MyTask from "./components/MyTask";



function App() {  
  return (
    <Router>
      <Navbar /> {/* Add Navbar */}
      {/* <NavbarPart2 /> Add NavbarPart2 */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <AddTask />
            </PrivateRoute>
          }
        />
        <Route
          path="/getalltasks"
          element={
            <PrivateRoute>
              <TasksList />
            </PrivateRoute>
          }
        />
        <Route
          path="/task/:id"
          element={
            <PrivateRoute>
              <TaskDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/usertasks"
          element={
            <PrivateRoute>
              <MyTask />
            </PrivateRoute>
          }
        />
       
        
      </Routes>
    </Router>
  );
}

export default App;
