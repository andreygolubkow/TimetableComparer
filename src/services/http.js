import axios from 'axios';

const HTTP = axios.create({
  // baseURL: 'https://timetable.tusur.ru/api/v2/raspisanie_vuzov',
  baseURL: 'https://timetable.tusur.ru/api/v1/groups/',
});

export default {
  /*
    faculties: [
      {"faculty_name":"РТФ","faculty_id":"rtf","date_start":"01.09.2018","date_end":"28.10.2018"}
    ]
   */
  getFaculties(responseCallback, errorCallback) {
    HTTP.get()
      .then((response) => {
        responseCallback(response);
      })
      .catch((error) => {
        errorCallback(error);
      });
  },
  /*
    groups: [
      {"group_name":"208","group_id":"208"}
    ]
   */
  getGroupsByFaculty(facultyId, responseCallback, errorCallback) {
    HTTP.get(`/get_groups?faculty_id=${facultyId}`)
      .then((response) => {
        responseCallback(response);
      })
      .catch((error) => {
        errorCallback(error);
      });
  },
  getGroups(responseCallback, errorCallback) {
    this.getFaculties((response) => {
      console.log(response);
    }, (error) => {
      errorCallback(error);
    });
  },
};
