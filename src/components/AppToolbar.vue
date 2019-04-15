<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div>
  <v-toolbar dark color="primary" class="hidden-sm-and-down">

    <v-toolbar-title class="white--text">Расписание+</v-toolbar-title>
		<v-spacer></v-spacer>

		<v-btn flat>
			<v-icon>keyboard_arrow_right</v-icon>
			ТУСУР</v-btn>
		<v-btn flat>
			<v-icon>keyboard_arrow_right</v-icon>
			ТГУ</v-btn>

		<v-spacer></v-spacer>

    <v-btn icon v-on:click="dialog.visible=true">
      <v-icon>help_outline</v-icon>
    </v-btn>
		<v-btn icon v-on:click="openGit	">
      <v-icon>code</v-icon>
    </v-btn>
  </v-toolbar>

		<v-toolbar dark color="primary" class="hidden-md-and-up">

			<v-toolbar-title class="white--text">Расписание+</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-menu offset-y>
				<template v-slot:activator="{ on }">
					<v-btn icon v-on="on">
						<v-icon>
							more_vert
						</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-tile @click="">
						<v-list-tile-title>ТУСУР</v-list-tile-title>
					</v-list-tile>
					<v-list-tile @click="">
						<v-list-tile-title>ТГУ</v-list-tile-title>
					</v-list-tile>
					<v-list-tile v-on:click="dialog.visible=true">
						<v-list-tile-title>Справка</v-list-tile-title>
					</v-list-tile>
					<v-list-tile v-on:click="openGit">
						<v-list-tile-title>Исходный код</v-list-tile-title>
					</v-list-tile>
				</v-list>
			</v-menu>
		</v-toolbar>
		<help-dialog :dialog="dialog"></help-dialog>
	</div>
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
