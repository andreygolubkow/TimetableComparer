<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-toolbar dark color="primary" >

    <v-toolbar-title class="white--text">Расписание+</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon v-on:click="refreshClick();">
      <v-icon>refresh</v-icon>
    </v-btn>
		<template v-slot:extension>
			<slot></slot>
		</template>
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
