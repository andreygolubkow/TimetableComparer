<template>
  <v-app>
    <app-toolbar>
		</app-toolbar>
    <v-content>
      <v-container fluid>
				<app-groupselector :selectedGroups='selectedGroupsModel'></app-groupselector>
        <hello :selectedGroups="selectedGroupsModel.selectedGroups"></hello>
      </v-container>
    </v-content>
    <v-footer app>
			<vue-ya-metrica :counter="53251846"
											enable-hash
											enable-webvisor></vue-ya-metrica>
		</v-footer>
  </v-app>
</template>

<script>
  import Hello from './components/MainView';
  import AppToolbar from './components/AppToolbar';
import AppGroupselector from './components/GroupSelector';
import VueYaMetrica from 'vue-ya-metrica';

  export default {
  	name: 'app',
  	components: {
  		AppToolbar,
  		Hello,
		AppGroupselector,
		VueYaMetrica
  	},
	data () {
		return {
			selectedGroupsModel: {
				selectedGroups: []
			}
		};
	}
  };
</script>

<style>
</style>
