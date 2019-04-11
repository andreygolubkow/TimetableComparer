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
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
  import Hello from './components/MainView';
  import AppToolbar from './components/AppToolbar';
import AppGroupselector from './components/GroupSelector';

  export default {
  	name: 'app',
  	components: {
  		AppToolbar,
  		Hello,
		AppGroupselector
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
