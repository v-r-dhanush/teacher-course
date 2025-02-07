import React, { useEffect, useState } from 'react';
import { DELETE, GET } from '../Service/HttpService';
import { Link } from 'react-router-dom';

function GetCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    GET("/data")
      .then((res) => {
        console.log("data",res);
        setCourses(res);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  };

  const deleteCourse = (id) => {
    const conf = window.confirm("Do you want to delete this course?");
    if (conf) {
      DELETE(`/data/${id}`)
        .then(() => {
          getCourses();
        })
        .catch((error) => {
          console.error("Error deleting course:", error);
        });
    }
  };

  return (
    <div>
      <h2>Courses</h2>
      <Link to="addcourse" className="btn btn-primary">
        Add Course
      </Link>

      <table className="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Description</th>
            <th>Teacher ID</th> {/* Changed from "Teacher" to "Teacher ID" */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.CourseId}</td>
              <td>{course.CourseName}</td>
              <td>{course.Description}</td>
              <td>{course.Teacher}</td> {/* Changed from "Teacher" to "TeacherID" */}
              <td>
                <Link to={`/editcourse/${course.id}`} className="btn btn-outline-success">
                  Edit
                </Link>
                <button type="button" onClick={() => deleteCourse(course.id)} className="btn btn-outline-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetCourses;