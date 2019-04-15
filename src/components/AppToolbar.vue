<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div>
  <v-toolbar dark color="primary">

    <v-toolbar-title class="white--text hidden-sm-and-down">Расписание+</v-toolbar-title>

		<v-menu offset-y class="hidden-md-and-up">
			<template v-slot:activator="{ on }">
				<h3 class="hidden-xs-only hidden-md-and-up">Университет:</h3>
				<v-btn medium flat v-on="on" class="hidden-md-and-up">
					{{ $route.name === 'tsu' ? 'ТГУ' : 'ТУСУР'
					}}
					<v-icon>
						arrow_drop_down
					</v-icon>
				</v-btn>
			</template>
			<v-list>
				<v-list-tile to="/tusur">
					<v-list-tile-title>ТУСУР</v-list-tile-title>
				</v-list-tile>
				<v-list-tile to="/tsu">
					<v-list-tile-title>ТГУ</v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-menu>

		<v-spacer></v-spacer>

		<v-btn flat to="/tusur"  class="hidden-sm-and-down">
			<v-icon v-if="$route.name === 'tusur'">keyboard_arrow_right</v-icon>
			ТУСУР
			<v-icon v-if="$route.name === 'tusur'">keyboard_arrow_left</v-icon>
		</v-btn>

		<v-btn flat to="/tsu"  class="hidden-sm-and-down">
			<v-icon v-if="$route.name === 'tsu'">keyboard_arrow_right</v-icon>
			ТГУ
			<v-icon v-if="$route.name === 'tsu'">keyboard_arrow_left</v-icon>
		</v-btn>

		<v-spacer></v-spacer>

    <v-btn icon v-on:click="dialog.visible=true"  class="hidden-sm-and-down">
      <v-icon>help_outline</v-icon>
    </v-btn>
		<v-btn icon v-on:click="openGit	"  class="hidden-sm-and-down">
      <v-icon>code</v-icon>
    </v-btn>



		<v-menu offset-y class="hidden-md-and-up">
			<template v-slot:activator="{ on }">
				<v-btn icon v-on="on" class="hidden-md-and-up">
					<v-icon>
						more_vert
					</v-icon>
				</v-btn>
			</template>
			<v-list>
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
