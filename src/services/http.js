import axios from 'axios';

let timetable = null;

export default {
  getTimetable(responseCallback, errorCallback) {
    if (!timetable) {
      axios.get('/static/rasp.json')
        .then((response) => {
          // handle success
          timetable = response.data;
          responseCallback(timetable);
        })
        .catch((error) => {
          // handle error
          errorCallback(error);
        })
        .then(() => {
          // always executed
        });
    } else {
      responseCallback(timetable);
    }
  },
  forceUpdate(responseCallback, errorCallback) {
    axios.get('/static/rasp.json')
      .then((response) => {
        // handle success
        timetable = response.data;
        responseCallback(timetable);
      })
      .catch((error) => {
        // handle error
        errorCallback(error);
      })
      .then(() => {
        // always executed
      });
  },
};
