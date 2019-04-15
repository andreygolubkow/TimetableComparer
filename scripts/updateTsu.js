const axios = require('axios');
const fs = require('fs');

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
		const data = JSON.stringify(faculties.data.faculties);
		await fs.writeFile('static/tsu/faculties.json', data, function (error) {
			if (error) throw error;
			console.log('Обновили факультеты ТГУ');
		});

		let groups = [];
		for (let i = 0; i < faculties.data.faculties.length; i++) {
			const item = faculties.data.faculties[i];
			await getGroupsByFac(item.faculty_id).then(async (data) => {
				if (data.data) {
					const folder = `static/tsu/${item.faculty_id}`;
					if (!fs.existsSync(folder)) {
						fs.mkdirSync(folder);
					}

					const gJson = JSON.stringify(data.data);
					await fs.writeFile(`static/tsu/${item.faculty_id}/groups.json`, gJson, function (error) {
						if (error) throw error;
					});
					if (data.data.groups) {
						for (let j = 0; j < data.data.groups.length; j++) {
							if (!data.data.groups[j]) continue;
							const id = data.data.groups[j].group_id;
							await getTimetableByGroup(id).then(async (data) => {
								if (data.data) {
									const json = JSON.stringify(data.data);
									await fs.writeFile(`static/tsu/${item.faculty_id}/${id}.json`, json, function (error) {
										if (error) throw error;
									});
								} else {
									console.log(`Нет данных для группы ${id}`);
								}
							});
						}
					}

					groups = groups.concat(data.data.groups);
				} else {
					console.log(`Не могу получить группы к факультету ${item}`);
				}
				const onePercent = ~~(faculties.data.faculties.length / 100) + 1;
				if (i % onePercent === 0) {
					console.log(`Progress: ${i / onePercent}%`);
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

getGroups().then((t) => {
	console.log('Готово!');
});

/*
getTimetable().then((t) => {
	const data = JSON.stringify(t);
	fs.writeFile('static/tsu/rasp.json', data, function (error) {
		if (error) throw error;
		console.log('Обновили расписание ТГУ.');
	});
});
*/
