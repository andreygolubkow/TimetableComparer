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
    data() {
      return {
        selectedGroupsModel: {
          selectedGroups: [],
        },
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
