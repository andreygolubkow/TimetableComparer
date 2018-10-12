<template>
  <v-toolbar dark color="primary" flat>

    <v-toolbar-title class="white--text">Расписание+</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon v-on:click="refreshClick();">
      <v-icon>refresh</v-icon>
    </v-btn>

  </v-toolbar>
</template>

<script>
  import API from '../services/http';

  export default {
    name: 'app-toolbar',
    methods: {
      refreshClick() {
        API.getFaculties(r => console.warn(r), e => console.warn(e));
      },
    },
  };
</script>

<style scoped>

</style>
