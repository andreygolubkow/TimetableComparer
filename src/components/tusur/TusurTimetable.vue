<template>
	<div>
		<app-groupselector :selectedGroups='selectedGroupsModel'></app-groupselector>
		<app-speaker-selector :selected-speakers="selectedSpeakersModel"></app-speaker-selector>

		<app-timetable :selectedGroups='groups'></app-timetable>
	</div>
</template>

<script>
    import AppGroupselector from './GroupSelector';
    import AppTimetable from './Timetable';
    import AppSpeakerSelector from './SpeakerSelector';

    export default {
    	components: {AppGroupselector, AppSpeakerSelector, AppTimetable},
    	data () {
    		return {
    			selectedGroupsModel: {
    				selectedGroups: []
    			},
    			selectedSpeakersModel: {
    				selectedSpeakers: []
    			}
    		};
    	},
    	methods: {},
    	mounted: function () {
    		localStorage.setItem('univer', 'tusur');
    	},
    	computed: {
    		groups: function () {
    			return this.selectedGroupsModel.selectedGroups.concat(this.selectedSpeakersModel.selectedSpeakers);
    		}
    	}
    };
</script>

<style>
</style>
