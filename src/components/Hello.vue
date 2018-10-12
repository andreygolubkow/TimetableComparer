<template>
  <app-groupselector></app-groupselector>
</template>

<script>
  import AppGroupselector from './GroupSelector';

  export default {
    name: 'hello',
    components: {AppGroupselector},
    data() {
      return {
        msg: 'Welcome to Your Vue.js PWA',
        chips: null,
        items: ['515-2', '515-1', '514'],
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
