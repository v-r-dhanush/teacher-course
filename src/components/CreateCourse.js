// import React, { useEffect, useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import httpService from '../services/httpService';

// const CreateCourse = ({ courseID, closeModal, fetchCourses }) => {
//   const [courseName, setCourseName] = useState('');
//   const [description, setDescription] = useState('');
//   const [selectedTeacher, setSelectedTeacher] = useState('');
//   const [teachers, setTeachers] = useState([]);

//   useEffect(() => {
//     fetchTeachers();
//     if (courseID) {
//       fetchCourseDetails(courseID);
//     }
//   }, [courseID]);

//   const fetchTeachers = async () => {
//     try {
//       const response = await httpService.getTeachers();
//       setTeachers(response.data);
//     } catch (error) {
//       console.error('Error fetching teachers:', error);
//     }
//   };

//   const fetchCourseDetails = async (id) => {
//     try {
//       const response = await httpService.getCourses();
//       const course = response.data.find(course => course.courseID === id);
//       setCourseName(course?.courseName || '');
//       setDescription(course?.description || '');
//       setSelectedTeacher(course?.teacherID || '');
//     } catch (error) {
//       console.error('Error fetching course details:', error);
//     }
//   };

//   const handleSaveCourse = async () => {
//     const courseData = {
//       courseName,
//       description,
//       teacherID: selectedTeacher,
//     };

//     try {
//       if (courseID) {
//         await httpService.updateCourse(courseID, courseData);  // Update existing course
//       } else {
//         await httpService.createCourse(courseData);  // Create new course
//       }
//       fetchCourses();
//       closeModal();
//     } catch (error) {
//       console.error('Error saving course:', error);
//     }
//   };

//   return (
//     <Form>
//       <Form.Group controlId="courseName">
//         <Form.Label>Course Name</Form.Label>
//         <Form.Control
//           type="text"
//           value={courseName}
//           onChange={(e) => setCourseName(e.target.value)}
//         />
//       </Form.Group>
//       <Form.Group controlId="description">
//         <Form.Label>Description</Form.Label>
//         <Form.Control
//           type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </Form.Group>
//       <Form.Group controlId="teacher">
//         <Form.Label>Teacher</Form.Label>
//         <Form.Control
//           as="select"
//           value={selectedTeacher}
//           onChange={(e) => setSelectedTeacher(e.target.value)}
//         >
//           <option value="">Select Teacher</option>
//           {teachers.map((teacher) => (
//             <option key={teacher.teacherID} value={teacher.teacherID}>
//               {teacher.subjectSpecialization}
//             </option>
//           ))}
//         </Form.Control>
//       </Form.Group>
//       <Button variant="secondary" onClick={closeModal}>Close</Button>
//       <Button variant="primary" onClick={handleSaveCourse}>
//         {courseID ? 'Update Course' : 'Create Course'}
//       </Button>
//     </Form>
//   );
// };

// export default CreateCourse;
