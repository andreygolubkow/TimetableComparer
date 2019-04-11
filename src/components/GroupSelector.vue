<template>
  <v-combobox
    v-model="selectedGroups.selectedGroups"
    :items="groups"
    @change="groupListEdited()"
    hide-selected
    label="Группы"
    placeholder="Начните вводить номер группы"
    item-text="name"
    dense
    multiple
    small-chips
  >
    <template slot="no-data">
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>
            В списке пока нет такой группы.
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-combobox>
</template>

<script>
  export default {
  	name: 'app-groupselector',
  	data () {
  		return {
  			groups: []
  		};
  	},
  	methods: {
  		groupListEdited () {
  			const groups = this.groups;
  			this.selectedGroups.selectedGroups = this.selectedGroups.selectedGroups.filter(item =>
  				groups.map(f => f.name).indexOf(item.name) !== -1
  			);
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
