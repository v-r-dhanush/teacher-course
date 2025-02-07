import React, { useState } from 'react';
import { POST } from '../Service/HttpService';
import { useNavigate } from 'react-router-dom';

function AddCourse() {
  // State to hold form data
  const [course, setCourse] = useState({
    CourseId: '',
    CourseName: '',
    Description: '',
    Teacher: '',
  });

  // State for loading and error handling
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Use navigate hook to redirect after form submission
  const navigate = useNavigate();

  // Handle input change for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  // Handle form submission to add the course
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null); // Clear any previous error

    // Send the course data to the backend
    POST('/data', course)
      .then(() => {
        alert('Course added successfully');
        navigate('/courses'); // Redirect to the course list page after successful addition
      })
      .catch((err) => {
        setError('Error adding course');
      });
      // .finally(() => {
      //   setLoading(false);
      // });
  };

  return (
    <div>
      <h2>Add New Course</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="CourseId">Course ID</label>
          <input
            type="text"
            id="CourseId"
            name="CourseId"
            value={course.CourseId}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="CourseName">Course Name</label>
          <input
            type="text"
            id="CourseName"
            name="CourseName"
            value={course.CourseName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Description">Description</label>
          <textarea
            id="Description"
            name="Description"
            value={course.Description}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Teacher">Teacher</label>
          <input
            type="text"
            id="Teacher"
            name="Teacher"
            value={course.Teacher}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Adding Course...' : 'Add Course'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCourse;
