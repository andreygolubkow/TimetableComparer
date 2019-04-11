<template>
  <div>
    <v-container>
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm6 md1>
          <v-card tile flat>
            <v-card-title primary-title>
              <h3>&nbsp;</h3>
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-divider></v-divider>
                <v-list-tile>08:50 10:25</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>10:40 12:15</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>13:15 14:50</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>15:00 16:35</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>16:45 18:20</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>18:30 20:05</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>20:15 21:50</v-list-tile>
                <v-divider></v-divider>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md1 v-for="(day) in days">
          <v-card tile flat>
            <v-card-title primary-title>
              <h3>{{day.name}}</h3>
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-tile v-for="(lesson) in day.rasp">
                  <v-badge v-if="lesson.length>0" color="red" overlap>
                    <span slot="badge">{{lesson.length}}</span>
                    <v-icon
                      color="black"
                      large>
                      border_all
                    </v-icon>
                  </v-badge>
                  <v-badge v-else color="red" overlap>
                    <v-icon
                      large
                      color="grey">
                      border_all
                    </v-icon>
                  </v-badge>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
  	name: 'app-timetable',
  	props: ['selectedGroups'],
  	mounted () {
  	},
  	data () {
  		return {
  			days: [
  				{
  					name: 'Пн',
  					num: 1,
  					rasp: {
  						'08:50': [],
  						'10:40': [],
  						'13:15': [],
  						'15:00': [],
  						'16:45': [],
  						'18:30': [],
  						'20:15': []
  					}
  				},
  				{
  					name: 'Вт',
  					num: 2,
  					rasp: {
  						'08:50': [],
  						'10:40': [],
  						'13:15': [],
  						'15:00': [],
  						'16:45': [],
  						'18:30': [],
  						'20:15': []
  					}
  				},
  				{
  					name: 'Ср',
  					num: 3,
  					rasp: {
  						'08:50': [],
  						'10:40': [],
  						'13:15': [],
  						'15:00': [],
  						'16:45': [],
  						'18:30': [],
  						'20:15': []
  					}
  				},
  				{
  					name: 'Чт',
  					num: 4,
  					rasp: {
  						'08:50': [],
  						'10:40': [],
  						'13:15': [],
  						'15:00': [],
  						'16:45': [],
  						'18:30': [],
  						'20:15': []
  					}
  				},
  				{
  					name: 'Пт',
  					num: 5,
  					rasp: {
  						'08:50': [],
  						'10:40': [],
  						'13:15': [],
  						'15:00': [],
  						'16:45': [],
  						'18:30': [],
  						'20:15': []
  					}
  				},
  				{
  					name: 'Сб',
  					num: 6,
  					rasp: {
  						'08:50': [],
  						'10:40': [],
  						'13:15': [],
  						'15:00': [],
  						'16:45': [],
  						'18:30': [],
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
  			const m = moment().subtract(moment().day(), 'd');
  			for (let grNum = 0; grNum < selectedGroups.length; grNum++) {
  				const groupTimetable = selectedGroups[grNum];
  				const groupLessons = [].concat(...groupTimetable.lessons);
  				// console.log(groupLessons);

  				for (var i = 0; i < this.days.length; i++) {
  					// console.log('date');
  					const dateString = moment(m).add(this.days[i].num, 'd').format('DD.MM.YYYY');
  					// console.log(dateString);
  					const dayTimetable = groupLessons.filter(l => l.date.indexOf(dateString) > -1);
  					// console.log(dayTimetable);
  					for (var j = 0; j < dayTimetable.length; j++) {
  						// console.log(this.days[i].rasp[dayTimetable[j].time.start]);
  						this.days[i].rasp[dayTimetable[j].time.start].push(dayTimetable[j].subject);
  					}
  				}
  			}
  		}
  	},
  	watch: {
  		selectedGroups: function (value) {
  			this.buildTimetable(value);
  		}
  	}
  };
</script>

<style scoped>

</style>
