<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-flex xs12>
	  <v-select
		  :items="faculties"
		  label="Выберите факультет"
		  item-text="faculty_name"
		  v-on:change="facultyChange"
		  return-object
	  ></v-select>

    <v-autocomplete
      v-model="input"
      :items="groups"
      label="Группы"
      placeholder="Начните вводить номер группы"
      color="blue-grey lighten-2"
      item-text="group_name"
	  return-object
	  dense
	  v-on:input="enterGroup"
      auto-select-first
    >
      <template v-slot:item="data">
        <template v-if="typeof data.item !== 'object'">
          <v-list-tile-content v-text="data.item"></v-list-tile-content>
        </template>
        <template v-else>
          <v-list-tile-content>
            <v-list-tile-title v-html="data.item.group_name"></v-list-tile-title>
          </v-list-tile-content>
        </template>
      </template>
			<template v-slot:no-data>
				<v-list-tile-content>
					Не найдено. Вы выбрали факультет ?&nbsp;
				</v-list-tile-content>
			</template>
    </v-autocomplete>
	  <v-progress-linear v-if="isLoading" :indeterminate="true"></v-progress-linear>
		<div class="text-xs-left">
			<v-chip  v-for="chip in selected"
				close
				label
				@input="remove(chip)"
			>
				{{chip.group_name}}
			</v-chip>
		</div>
  </v-flex>

</template>

<script>
  export default {
  	name: 'app-groupselector',
  	data () {
  		return {
  			groups: [],
			input: null,
  			selected: [],
			menuProps: {
  				'closeOnClick': false,
				'closeOnContentClick': false,
				'openOnClick': false,
				'maxHeight': 300},
			faculties: [],
			faculty: null,
			isLoading: false
  		};
  	},
  	watch: {
  		selected () {
  			this.groupListEdited();
  		},
		faculty () {
			if (!this.faculty) {
				return;
			}
			this.loadGroups();
		}
  	},
  	methods: {
  		groupListEdited () {
  			this.selectedGroups.selectedGroups = this.selected;
  		},
		facultyChange (faculty) {
  			this.faculty = faculty;
		},
		loadGroups () {
			this.$root.getTsuGroupsByFac(this.faculty.faculty_id, (groups) => {
				if (groups.groups) {
					this.groups = groups.groups.filter(g => g.group_type === 'ГРУППА');
					this.groups.sort((a, b) => {
						return a.group_name > b.group_name ? 1 : -1;
					});
				} else {
					this.groups = [];
				}
			});
		},
		enterGroup (group) {
			if (this.selected.filter(s => s === group).length === 0 &&
					this.groups.filter(g => g === group).length === 1) {
				this.isLoading = true;
				this.$root.getTsuTimetableByGroup(this.faculty.faculty_id, group.group_id, (timetable) => {
					this.selected.push(timetable);
					this.isLoading = false;
				});
			}
		},
		endEdit (f) {
			console.log(f);
		},
  		remove (item) {
  			console.log(this.selected);
  			this.selected.splice(this.selected.indexOf(item), 1);
  			this.selected = [...this.selected];
  		}
  	},
	mounted () {
		this.$nextTick(() => {
			this.$root.getTsuFaculties((faculties) => {
				this.faculties = faculties;
				this.faculties.sort((a, b) => {
					return a.faculty_name > b.faculty_name ? 1 : -1;
				});
			});
		});
  	},
  	props: ['selectedGroups']
  };
</script>

<style scoped>

</style>
