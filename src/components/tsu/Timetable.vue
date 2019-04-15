<template>
  <div>
    <v-container>
			<v-layout row wrap align-center justify-center>
				<v-flex xs10 sm4 md3>
					<v-btn outline small icon v-on:click="weekOffset--">
						<v-icon>keyboard_arrow_left</v-icon>
					</v-btn>
					<span>{{`с ${firstDayDate.clone().add(1, 'd').locale('ru').format('DD MMMM')}`}}</span>
					<v-btn outline small icon v-on:click="weekOffset++">
						<v-icon>keyboard_arrow_right</v-icon>
					</v-btn>
				</v-flex>
			</v-layout>
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm8 md2>
          <v-card tile flat>
						<v-card-title primary-title=""></v-card-title>
            <v-card-text>
              <v-list>
                <v-list-tile>08:45 10:20</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>10:35 12:10</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>12:25 14:00</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>14:45 16:20</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>16:35 18:10</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>18:25 20:00</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>20:15 21:50</v-list-tile>
                <v-divider></v-divider>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md1 v-for="(day) in days">
          <v-card tile flat>
            <v-card-title>
              <h3>{{day.name}}</h3>
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-tile v-for="(lesson, key,i) in day.rasp" @click.stop="showDialog(day,key)">
                  <v-badge v-if="lesson.length>0" color="red" overlap>
                    <span slot="badge">{{lesson.length}}</span>
                    <v-icon
                      color="black"
											medium>
                      {{'filter_'+(i+1)}}
                    </v-icon>
                  </v-badge>
                  <v-badge v-else color="red" overlap>
                    <v-icon
											medium
                      color="grey">
                      {{'filter_'+(i+1)}}
                    </v-icon>
                  </v-badge>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog
			v-if="currentDay != null && currentKey != null && currentDay.rasp[currentKey]!=null"
      v-model="dialog"
      max-width="500"
			scrollable
    >
      <v-card>
        <v-card-title class="headline">
					{{`${firstDayDate.clone().add(currentDay.num,'d').locale('ru').format('dddd, Do MMMM')}`}}
					&nbsp;{{`с ${currentKey}`}}
				</v-card-title>
        <v-card-text>
					<v-treeview :items="currentLessonsTree"></v-treeview>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import moment from 'moment';
import 'moment/locale/ru';

export default {
  	name: 'app-timetable',
  	props: ['selectedGroups'],
  	mounted () {
  	},
  	data () {
  		return {
  			weekOffset: 0,
  			dialog: false,
			currentDay: null,
  			currentKey: null,
			snackbar: false,
  			days: [
  				{
  					name: 'Пн',
  					num: 1,
  					rasp: {
						'08:45': [],
						'10:35': [],
						'12:25': [],
						'14:45': [],
						'16:35': [],
						'18:25': [],
						'20:15': []
  					}
  				},
  				{
  					name: 'Вт',
  					num: 2,
  					rasp: {
						'08:45': [],
						'10:35': [],
						'12:25': [],
						'14:45': [],
						'16:35': [],
						'18:25': [],
						'20:15': []
  					}
  				},
  				{
  					name: 'Ср',
  					num: 3,
  					rasp: {
						'08:45': [],
						'10:35': [],
						'12:25': [],
						'14:45': [],
						'16:35': [],
						'18:25': [],
						'20:15': []
  					}
  				},
  				{
  					name: 'Чт',
  					num: 4,
  					rasp: {
						'08:45': [],
						'10:35': [],
						'12:25': [],
						'14:45': [],
						'16:35': [],
						'18:25': [],
						'20:15': []
  					}
  				},
  				{
  					name: 'Пт',
  					num: 5,
  					rasp: {
						'08:45': [],
						'10:35': [],
						'12:25': [],
						'14:45': [],
						'16:35': [],
						'18:25': [],
						'20:15': []
  					}
  				},
  				{
  					name: 'Сб',
  					num: 6,
  					rasp: {
						'08:45': [],
						'10:35': [],
						'12:25': [],
						'14:45': [],
						'16:35': [],
						'18:25': [],
						'20:15': []
  					}
  				}
  			]
  		};
  	},
  	methods: {
  		buildTimetable: function (selectedGroups) {
  			for (let i = 0; i < this.days.length; i++) {
  				for (let key in this.days[i].rasp) {
  					this.days[i].rasp[key] = [];
  				}
  			}
			const m = this.firstDayDate.clone();
  			for (let grNum = 0; grNum < selectedGroups.length; grNum++) {
  				const groupTimetable = selectedGroups[grNum];
  				const groupLessons = [].concat(...groupTimetable.days);

  				for (var i = 0; i < this.days.length; i++) {
  					// console.log('date');
  					const currentDate = moment(m).add(this.days[i].num, 'd');
  					// console.log(dateString);
  					// const dayTimetable = groupLessons.filter(l => l.date.indexOf(dateString) > -1);
					const day = this.days[i];
  					const dayTimetable = groupLessons.filter(t => t.weekday === day.num);
  					// console.log(dayTimetable);
					if (dayTimetable.length === 0) {
						continue;
					}
					const lessons = dayTimetable[0].lessons;
  					for (var j = 0; j < lessons.length; j++) {
  						// console.log(this.days[i].rasp[dayTimetable[j].time.start]);
						let time = '8:45';
						if (this.days[i].rasp[lessons[j].time_start]) {
							time = lessons[j].time_start;
						} else {
							console.log(`Не нашли время ${lessons[j].time_start}`);
							continue;
						}

						const dateStart = moment(lessons[j].date_start, 'DD.MM.YYYY');
						const dateEnd = moment(lessons[j].date_end, 'DD.MM.YYYY');

						if (lessons[j].subject === 'БЖД') {
							console.log(dateStart);
							console.log(dateEnd);
							console.log(currentDate);

							console.log(currentDate.isBetween(dateStart, dateEnd));
						}

						const dateEntrance = currentDate.isBetween(dateStart, dateEnd);
						if (dateEntrance) {
							this.days[i].rasp[time].push(Object.assign({group: groupTimetable.group_name}, lessons[j]));
						}
  					}
  				}
  			}
  		},
  		showDialog (day, key) {
  			if (day == null || day.rasp[key] == null || day.rasp[key].length === 0) {
  				return;
  			}
  			this.currentDay = day;
  			this.currentKey = key;
  			this.dialog = true;
  		},
		getTypeByNum (num) {
			switch (num) {
				case '0':
					return 'Практика';
				case '1':
					return 'Лаборатория';
				case '2':
					return 'Лекция';
				case '3':
					return 'Семинар';
				default:
					return '???';
			}
		}
  	},
  	watch: {
  		selectedGroups: function (value) {
  			// console.log(value);
  			this.buildTimetable(value);
  		},
		firstDayDate: function () {
  			this.buildTimetable(this.selectedGroups);
  		}
  	},
	computed: {
		firstDayDate: function () {
			const m = moment().subtract(moment().day(), 'd');
			return m.add((this.weekOffset * 7), 'd');
		},
		currentLessonsTree: function () {
			if (this.currentDay == null || this.currentKey == null) {
				return [];
			}
			const lessons = this.currentDay.rasp[this.currentKey];
			const m = lessons.map(l => {
				return {
					name: l.group,
					children: [
						{name: l.subject},
						{name: this.getTypeByNum(l.type)},
						{name: l.auditories.map(a => a.auditory_name).join()},
						{name: l.teachers.map(t => t.teacher_name).join()}
					]};
			});
			return m;
		}
	}
  };
</script>

<style scoped>

</style>
