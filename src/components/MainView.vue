<template>
  <div>

    <app-timetable :selectedGroups='selectedGroups'></app-timetable>
  </div>
</template>

<script>
  import AppGroupselector from './GroupSelector';
  import AppTimetable from './Timetable';

  export default {
  	components: {AppGroupselector, AppTimetable},
	props: ['selectedGroups']
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
