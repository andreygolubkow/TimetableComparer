var https = require('https');
const fs = require('fs');

var request = https.get('https://timetable.tusur.ru/api/v2/raspisanie_vuzov', function (response) {
	var file = fs.createWriteStream('static/tusur/rasp.json');
	response.pipe(file);
	console.log('Расписание ТУСУР обновлено!');
});

console.log(request.output);
