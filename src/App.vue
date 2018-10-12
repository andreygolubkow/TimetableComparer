<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <v-content>
      <v-container fluid>
        <hello></hello>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
  import Hello from './components/Hello';
  import AppToolbar from './components/AppToolbar';

  export default {
    name: 'app',
    components: {
      AppToolbar,
      Hello,
    },
  };
</script>

<style>
</style>
