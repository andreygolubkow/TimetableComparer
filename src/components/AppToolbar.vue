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
  export default {
  	name: 'app-toolbar',
  	methods: {
  		refreshClick () {
  			// this.$root.forceUpdate();
  		}
  	}
  };
</script>

<style scoped>

</style>
