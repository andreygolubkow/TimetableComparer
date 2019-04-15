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
		name: 'TsuTimetable',
		components: {AppGroupselector, AppTimetable},
		mounted: function () {
			localStorage.setItem('univer', 'tsu');
		},
		data () {
			return {
				selectedGroupsModel: {
					selectedGroups: []
				}
			};
		}
};
</script>

<style scoped>

</style>
