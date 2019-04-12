<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-toolbar dark color="primary" >

    <v-toolbar-title class="white--text">Расписание+</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon v-on:click="dialog.visible=true">
      <v-icon>help_outline</v-icon>
    </v-btn>
		<v-btn icon v-on:click="openGit	">
      <v-icon>code</v-icon>
    </v-btn>
		<template v-slot:extension>
			<slot></slot>
		</template>
		<help-dialog :dialog="dialog"></help-dialog>
  </v-toolbar>
</template>

<script>
  import HelpDialog from './HelpDialog';
export default {
  	name: 'app-toolbar',
	components: {HelpDialog},
	methods: {
  		refreshClick () {
  			// this.$root.forceUpdate();
  		},
		openGit () {
			window.open('https://github.com/andreygolubkow/RaspPl', '_blank');
		}
  	},
	data () {
		return {
			dialog: {
				visible: false
			}
		};
	}
  };
</script>

<style scoped>

</style>
