<template>
  <v-list>
    <template v-for="(item, index) in selectedGroups">
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title v-html="item.name"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
  export default {
    name: 'app-timetable',
    props: ['selectedGroups'],
  };
</script>

<style scoped>

</style>
