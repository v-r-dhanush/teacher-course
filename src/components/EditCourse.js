import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GET, PUT } from '../Service/HttpService';

function EditCourse() {
  const [course, setCourse] = useState({
    CourseId: '',
    CourseName: '',
    Description: '',
    Teacher: '',
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Get course ID from URL
  const navigate = useNavigate();

  useEffect(() => {
    GET(`/data/${id}`)
      .then((data) => {
        setCourse(data); // Set the course state with fetched data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        setError('Error fetching course data');
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    PUT(`/data/${id}`, course)
      .then(() => {
        alert('Course updated successfully');
        navigate('/courses'); // Redirect to the course list page after successful update
      })
      .catch((err) => {
        setError('Error updating course');
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Edit Course</h2>
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
          <button type="submit" className="btn btn-primary">Update Course</button>
        </div>
      </form>
    </div>
  );
}

export default EditCourse;
