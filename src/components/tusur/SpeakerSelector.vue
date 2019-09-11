<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<v-flex xs12>
		<v-autocomplete
			v-model="input"
			:items="teachers"
			label="Преподаватели"
			placeholder="Вводите фамилию преподавателя"
			color="blue-grey lighten-2"
			dense
			v-on:input="enterTeachers"
			auto-select-first
		>
			<template v-slot:item="data">
				<template v-if="typeof data.item !== 'object'">
					<v-list-tile-content v-text="data.item"></v-list-tile-content>
				</template>
				<template v-else>
					<v-list-tile-content>
						<v-list-tile-title v-html="data.item.name"></v-list-tile-title>
					</v-list-tile-content>
				</template>
			</template>
			<template v-slot:no-data>
				<v-list-tile-content>
					&nbsp;Мы не можем найти такую группу.
				</v-list-tile-content>
			</template>
		</v-autocomplete>
		<div class="text-xs-left">
			<v-chip v-for="chip in selected"
					close
					label
					@input="remove(chip)"
			>
				{{chip}}
			</v-chip>
		</div>
	</v-flex>

</template>

<script>
    export default {
    	name: 'app-speakerselector',
    	data () {
    		return {
    			groups: [],
    			input: null,
    			selected: [],
    			menuProps: {
    				'closeOnClick': false,
    				'closeOnContentClick': false,
    				'openOnClick': false,
    				'maxHeight': 300
    			},
    			lessons: [],
    			teachers: []
    		};
    	},
    	watch: {
    		selected () {
    			this.groupListEdited();
    		}
    	},
    	methods: {
    		filterLessons (arr) {
    			var newArr = [];

    			for (var i = 0; i < arr.length; i++) {
    				const less = arr[i];
    				if (!newArr.find(a => (a.subject.localeCompare(less.subject) === 0 &&
									a.date.localeCompare(less.date) === 0 &&
									a.type.localeCompare(less.type) === 0))) {
    					newArr.push(less);
    				}
    			}

    			return newArr;
    		},
    		groupListEdited () {
    			var groups = [];
    			this.selected.forEach(s => {
    				// Берем препода S
    				// Ищем его пары
    				const ls = this.lessons.filter(l => {
    					// У нас есть урок
    					// Достаем оттуда преподов
    					const ts = l.teachers.map(t => t.name);
    					// Возвращаем результат поиска препода;
    					return ts.includes(s);
    				});

    				const group = {
    					name: s,
    					lessons: this.filterLessons(ls)
    				};
    				groups.push(group);
    			});

    			this.selectedSpeakers.selectedSpeakers = groups;
    		},
    		enterTeachers (teacher) {
    			if (this.selected.filter(s => s === teacher).length === 0 &&
                    this.teachers.filter(g => g === teacher).length === 1) {
    				this.selected.push(teacher);
    				this.$metrika.reachGoal('selectTeacher', {params: {
					teacher: teacher
				}});
    				this.$metrika.params({
					params: {
						teachers: this.selected
					}
				});
    			}

    			this.$nextTick(() => {
    				this.input = null;
    			});
    		},
    		remove (item) {
    			console.log('remove');
    			this.selected.splice(this.selected.indexOf(item), 1);
    			this.selected = [...this.selected];
    		},
    		dedupe (teachers) {
    			const values = new Set();
    			const len = teachers.length;
    			let offset = 0;
    			for (let i = 0; i < len; i++) {
    				let val = teachers[i];
    				if (values.has(val)) {
    					offset++;
    				} else {
    					values.add(val);
    					teachers[i - offset] = val;
    				}
    			}
    			teachers.length = len - offset;
    			return teachers;
    		}
    	},
    	mounted () {
    		this.$nextTick(() => {
    			this.$root.getTusurTimetable((timetable) => {
    				const fgList = timetable.faculties.map(f => f.groups);
    				this.groups = [].concat(...fgList);
    				this.lessons = [];
    				this.lessons = [].concat(...this.groups.map(g => g.lessons));
    				const teachers = [].concat(...this.lessons.map(l => l.teachers));
    				const names = teachers.map(t => t.name);
    				const uniqTeachers = this.dedupe(names);
    				this.teachers = [];
    				this.teachers = uniqTeachers;
    			});
    		});
    	},
    	props: ['selectedSpeakers']
    };
</script>

<style scoped>

</style>
