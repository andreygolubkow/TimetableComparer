<template>
	<div>
		<app-groupselector :selectedGroups='selectedGroupsModel'></app-groupselector>
	</div>
</template>

<script>
	import AppGroupselector from './GroupSelector';

export default {
		name: 'TsuTimetable',
		components: {AppGroupselector},
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
