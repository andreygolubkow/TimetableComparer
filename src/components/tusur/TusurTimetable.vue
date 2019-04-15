<template>
		<div>
		<app-groupselector :selectedGroups='selectedGroupsModel'></app-groupselector>
    <app-timetable :selectedGroups='selectedGroupsModel.selectedGroups'></app-timetable>
		</div>
</template>

<script>
  import AppGroupselector from './GroupSelector';
  import AppTimetable from './Timetable';

  export default {
  	components: {AppGroupselector, AppTimetable},
	data () {
		return {
			selectedGroupsModel: {
				selectedGroups: []
			}
		};
	},
	mounted: function () {
		localStorage.setItem('univer', 'tusur');
	}
  };
</script>

<style>
</style>
