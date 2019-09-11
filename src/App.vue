<template>
  <v-app>
    <app-toolbar>
		</app-toolbar>
    <v-content>
      <v-container fluid>
					<router-view/>
      </v-container>
    </v-content>
    <v-footer app style="opacity: .3;">
			<v-layout row wrap align-center justify-center>
				<v-flex xs6 sm4 md3 lg1>
					<!-- Yandex.Metrika informer
					<a href="https://metrika.yandex.ru/stat/?id=53251846&amp;from=informer"
						 target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/53251846/1_0_FFFFFFFF_EFEFEFFF_0_visits"
																								 style="width:80px; height:15px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (визиты)" /></a\>
					/Yandex.Metrika informer -->
				</v-flex>
			</v-layout>
		</v-footer>
  </v-app>
</template>

<script>
  import AppToolbar from './components/AppToolbar';
import TusurTimetable from './components/tusur/TusurTimetable';

  export default {
  	name: 'app',
  	components: {
  		AppToolbar,
		TusurTimetable
  	}
  };
</script>

<style>
</style>
