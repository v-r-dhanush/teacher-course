// import React, { useEffect, useState } from "react";
// import { Button, Table, Form, Modal } from "react-bootstrap";
// import { GET, POST, PUT, DELETE } from "../services/httpService"; // Import the global HTTP methods
// import { v4 as uuidv4 } from "uuid";

// const CourseManager = () => {
//   const [courses, setCourses] = useState([]);
//   const [teachers, setTeachers] = useState([]);
//   const [courseName, setCourseName] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectedTeacher, setSelectedTeacher] = useState("");
//   const [courseID, setCourseID] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   // Fetch teachers and courses when the component mounts
//   useEffect(() => {
//     fetchTeachers();
//     fetchCourses();
//   }, []);

//   const fetchTeachers = async () => {
//     try {
//       const response = await GET("/teachers"); // Use the GET method
//       setTeachers(response);
//     } catch (error) {
//       console.error("Error fetching teachers:", error);
//     }
//   };

//   const fetchCourses = async () => {
//     try {
//       const response = await GET("/courses"); // Use the GET method
//       setCourses(response);
//     } catch (error) {
//       console.error("Error fetching courses:", error);
//     }
//   };

//   const handleCreateCourse = async () => {
//     const newCourse = {
//       courseID: uuidv4(), // Generate a unique courseID
//       courseName,
//       description,
//       teacherID: selectedTeacher,
//     };

//     try {
//       await POST("/courses", newCourse); // Use the POST method
//       fetchCourses(); // Refresh the courses list
//       resetForm(); // Reset the form
//     } catch (error) {
//       console.error("Error creating course:", error);
//     }
//   };

//   const handleUpdateCourse = async () => {
//     const updatedCourse = {
//       courseName,
//       description,
//       teacherID: selectedTeacher,
//     };

//     try {
//       await PUT(`/courses/${courseID}`, updatedCourse); // Use the PUT method
//       fetchCourses(); // Refresh the courses list
//       resetForm(); // Reset the form
//     } catch (error) {
//       console.error("Error updating course:", error);
//     }
//   };

//   const handleDeleteCourse = async (id) => {
//     try {
//       await DELETE(`/courses/${id}`); // Use the DELETE method
//       fetchCourses(); // Refresh the courses list
//     } catch (error) {
//       console.error("Error deleting course:", error);
//     }
//   };

//   const resetForm = () => {
//     setCourseName("");
//     setDescription("");
//     setSelectedTeacher("");
//     setCourseID(null);
//     setShowModal(false);
//   };

//   const handleShowModal = (course = null) => {
//     if (course) {
//       setCourseID(course.courseID);
//       setCourseName(course.courseName);
//       setDescription(course.description);
//       setSelectedTeacher(course.teacherID);
//     }
//     setShowModal(true);
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Manage Courses</h2>
//       <Button variant="primary" onClick={() => handleShowModal()}>
//         Create Course
//       </Button>
//       <Table striped bordered hover className="mt-3">
//         <thead>
//           <tr>
//             <th>Course ID</th>
//             <th>Course Name</th>
//             <th>Description</th>
//             <th>Teacher</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((course) => (
//             <tr key={course.courseID}>
//               <td>{course.courseID}</td>
//               <td>{course.courseName}</td>
//               <td>{course.description}</td>
//               <td>
//                 {teachers.find((teacher) => teacher.teacherID === course.teacherID)?.subjectSpecialization}
//               </td>
//               <td>
//                 <Button variant="warning" onClick={() => handleShowModal(course)}>
//                   Edit
//                 </Button>{" "}
//                 <Button variant="danger" onClick={() => handleDeleteCourse(course.courseID)}>
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <Modal show={showModal} onHide={resetForm}>
//         <Modal.Header closeButton>
//           <Modal.Title>{courseID ? "Edit Course" : "Create Course"}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="courseName" className="mb-3">
//               <Form.Label>Course Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={courseName}
//                 onChange={(e) => setCourseName(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group controlId="description" className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group controlId="teacher" className="mb-3">
//               <Form.Label>Teacher</Form.Label>
//               <Form.Control
//                 as="select"
//                 value={selectedTeacher}
//                 onChange={(e) => setSelectedTeacher(e.target.value)}
//               >
//                 <option value="">Select Teacher</option>
//                 {teachers.map((teacher) => (
//                   <option key={teacher.teacherID} value={teacher.teacherID}>
//                     {teacher.subjectSpecialization}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={resetForm}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={courseID ? handleUpdateCourse : handleCreateCourse}>
//             {courseID ? "Update Course" : "Create Course"}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default CourseManager;