import axios from 'axios';

let timetable = null;
// https://timetable.tusur.ru/api/v2/raspisanie_vuzov
export default {
	getTusurTimetable (responseCallback, errorCallback) {
		if (!timetable) {
			axios.get('/static/tusur/rasp.json')
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
	getTsuTimetable (responseCallback, errorCallback) {
		if (!timetable) {
			axios.get('/static/tusur/rasp.json')
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
	forceUpdate (responseCallback, errorCallback) {
		axios.get('/static/tusur/rasp.json')
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
	}
};
