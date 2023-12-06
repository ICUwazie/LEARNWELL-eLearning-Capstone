import axios from 'axios';

export default {

  getUser(userId) {
    return axios.get(`/student/${userId}`);
  },

  getCourses(userId) {
    return axios.get(`/student/${userId}/courses/`)
  },

  getCourseById(userId, courseId) {
    return axios.get(`/student/${userId}/courses/${courseId}`)
  },

  // addCourse(course) {
  //   return axios.post(`/course`, course);
  // },

  updateAssignment(userId, courseId, assignment) {
    return axios.put(`/student/${userId}/courses/${courseId}/${assignment.id}?action=edit`, assignment);
  },

  deleteCourse(courseId) {
    return axios.delete(`/cards/${courseId}`);
  },
  addBoard(board){
    return axios.post('/boards',board);
  },
  deleteBoard(boardID)
  {
    return axios.delete(`/boards/${boardID}`);
  }

}