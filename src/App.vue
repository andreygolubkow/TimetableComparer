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
			<v-layout row wrap align-center justify-center>
			<v-flex xs6>
			<!-- Yandex.Metrika informer -->
			<a href="https://metrika.yandex.ru/stat/?id=53251846&amp;from=informer"
				 target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/53251846/1_0_FFFFFFFF_EFEFEFFF_0_pageviews"
																						 style="width:80px; height:15px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры)" /></a>
			<!-- /Yandex.Metrika informer -->
			</v-flex>
			</v-layout>
		</v-footer>
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
