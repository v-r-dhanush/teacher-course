import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing Components
import AddCourse from "./components/AddCourse";
import EditCourse from "./components/EditCourse";
import GetCourses from "./components/GetCourses";

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="my-4">Course Management System</h1>
        <Routes>
          {/* Route to list all courses */}
          <Route path="/courses" element={<GetCourses />} />
          
          {/* Route to add a new course */}
          <Route path="courses/addcourse" element={<AddCourse />} />
          
          {/* Route to edit a specific course */}
          <Route path="/editcourse/:id" element={<EditCourse />} />
          
          {/* If no matching route, redirect to courses */}
          <Route path="/" element={<GetCourses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
