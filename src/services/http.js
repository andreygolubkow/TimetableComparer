import axios from 'axios';

let tusurTimetable = null;

let tsuFaculties = null;

let tsuTimetable = null;
// https://timetable.tusur.ru/api/v2/raspisanie_vuzov
export default {
	getTusurTimetable (responseCallback, errorCallback) {
		if (!tusurTimetable) {
			axios.get('/static/tusur/rasp.json')
				.then((response) => {
					// handle success
					tusurTimetable = response.data;
					responseCallback(tusurTimetable);
				})
				.catch((error) => {
					// handle error
					errorCallback(error);
				})
				.then(() => {
					// always executed
				});
		} else {
			responseCallback(tusurTimetable);
		}
	},
	getTsuTimetable (responseCallback, errorCallback) {
		if (!tsuTimetable) {
			axios.get('/static/tsu/rasp.json')
				.then((response) => {
					// handle success
					tsuTimetable = response.data;
					responseCallback(tsuTimetable);
				})
				.catch((error) => {
					// handle error
					errorCallback(error);
				})
				.then(() => {
					// always executed
				});
		} else {
			responseCallback(tsuTimetable);
		}
	},
	getTsuFaculties (responseCallback, errorCallback) {
		if (!tsuFaculties) {
			axios.get('/static/tsu/faculties.json')
				.then((response) => {
					// handle success
					tsuFaculties = response.data;
					responseCallback(tsuFaculties);
				})
				.catch((error) => {
					// handle error
					errorCallback(error);
				})
				.then(() => {
					// always executed
				});
		} else {
			responseCallback(tsuFaculties);
		}
	},
	getTsuGroupsByFac (facultyId, responseCallback, errorCallback) {
		axios.get(`/static/tsu/${facultyId}/groups.json`)
			.then((response) => {
				responseCallback(response.data);
			})
			.catch((error) => {
				// handle error
				errorCallback(error);
			})
			.then(() => {
				// always executed
			});
	},
	getTsuTimetableByGroup (facultyId, groupId, responseCallback, errorCallback) {
		axios.get(`/static/tsu/${facultyId}/${groupId}.json`)
			.then((response) => {
				responseCallback(response.data);
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
