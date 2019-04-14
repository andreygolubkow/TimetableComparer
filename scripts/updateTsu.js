const axios = require('axios');
const fs = require('fs');
var stringify = require('node-stringify');

const getFaculties = async () => {
	try {
		return await axios.get('http://timetable.tsu.ru/m2/get_faculties');
	} catch (error) {
		console.error(error);
	}
};

const getGroupsByFac = async (facId) => {
	try {
		return await axios.get(`http://timetable.tsu.ru/m2/get_groups?faculty_id=${facId}`);
	} catch (error) {
		console.error(error);
	}
};

const getTimetableByGroup = async (grId) => {
	try {
		return await axios.get(`http://timetable.tsu.ru/m2/get_schedule?group_id=${grId}`);
	} catch (error) {
		console.error(error);
	}
};

const getGroups = async () => {
	const faculties = await getFaculties();
	if (faculties.data.faculties) {
		let groups = [];
		for (let i = 0; i < faculties.data.faculties.length; i++) {
			const item = faculties.data.faculties[i];
			await getGroupsByFac(item.faculty_id).then((data) => {
				if (data.data) {
					groups = groups.concat(data.data.groups);
				} else {
					console.log(`Не могу получить группы к факультету ${item}`);
				}
			});
		}
		return groups;
	} else {
		console.log('Нет доступа к факультетам.');
		return [];
	}
};

const getTimetable = async () => {
	const groups = await getGroups();
	let timetable = [];
	for (let i = 0; i < groups.length; i++) {
		if (!groups[i]) continue;
		const id = groups[i].group_id;
		await getTimetableByGroup(id).then((data) => {
			if (data.data) {
				timetable.push(data.data);
			} else {
				console.log(`Нет данных для группы ${id}`);
			}
		});
		const onePercent = ~~(groups.length / 100) + 1;
		if (i % onePercent === 0) {
			console.log(`Progress: ${i / onePercent}%`);
		}
	}
	return timetable;
};

getTimetable().then((t) => {
	const data = stringify(t);
	fs.writeFile('static/tsu/rasp.json', data, function (error) {
		if (error) throw error;
		console.log('Обновили расписание ТГУ.');
	});
});
