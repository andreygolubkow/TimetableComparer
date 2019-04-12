<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
<!---<v-combobox
    v-model="selectedGroups.selectedGroups"
    :items="groups"
    @change="groupListEdited()"
    label="Группы"
    placeholder="Начните вводить номер группы"
    item-text="name"
    chips
    clearable
    solo
    multiple
    auto-select-first
    :search-input.sync="search"
    autofocus
  >
    <template v-slot:no-data>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>
            В списке пока нет такой группы.
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
    <template v-slot:selection="{ item, parent, selected }">
      <v-chip
        close
        @input="remove(item)"
        label
        small
      >
        <strong>{{ item.name }}</strong>&nbsp;
      </v-chip>
    </template>
  </v-combobox> ---->
  <v-flex xs12>
    <v-autocomplete
      v-model="selected"
      :items="groups"
      chips
      label="Группы"
      placeholder="Начните вводить номер группы"
      color="blue-grey lighten-2"
      item-text="name"
      item-value="name"
      multiple
      clearable
      auto-select-first
    >
      <template v-slot:selection="data">
				<v-chip
					:selected="data.selected"
					close
					label
					@input="remove(data.item)"
				>
					{{ data.item.name }}

				</v-chip>
      </template>
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
    </v-autocomplete>
  </v-flex>

</template>

<script>
  export default {
  	name: 'app-groupselector',
  	data () {
  		return {
  			groups: [],
  			selected: [],
  			search: null,
  			isUpdating: false,
			menuProps: {
  				'closeOnClick': false,
				'closeOnContentClick': false,
				'openOnClick': false,
				'maxHeight': 300}
  		};
  	},
  	watch: {
  		selected () {
  			this.groupListEdited();
  		}
  	},
  	methods: {
  		groupListEdited () {
  			this.selectedGroups.selectedGroups = this.groups.filter(item =>
  				this.selected.indexOf(item.name) !== -1
  			);
  		},
  		remove (item) {
  			console.log('remove');
  			this.selected.splice(this.selected.indexOf(item), 1);
  			this.selected = [...this.selected];
  		}
  	},
  	mounted () {
  		this.$nextTick(() => {
  			this.$root.getTimetable((timetable) => {
  				const fgList = timetable.faculties.map(f => f.groups);
  				this.groups = [].concat(...fgList);
  			});
  		});
  	},
  	props: ['selectedGroups']
  };
</script>

<style scoped>

</style>
