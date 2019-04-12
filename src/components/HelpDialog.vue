<template xmlns:mailto="http://www.w3.org/1999/xhtml">
	<v-dialog
		v-model="dialog.visible"
		max-width="500"
	>
		<v-card>
			<v-card-title class="headline">Справка</v-card-title>
			<v-card-text>
				<p>Сервис помогает искать «окна» в расписании учебных групп, объединяя несколько расписаний в одно.
				</p>
				<p>
				После ввода групп в поле сверху, расписание будет заполняться.
				</p>
				<p>
				Недели можно выбирать, нажимая кнопки со стрелками под полем ввода групп.
				При нажатии на символ пары (окошко с номером), появится подробная информация о занятиях в это время.
				</p>
				<b>ВНИМАНИЕ! В расписании отсутствуют некоторые экзамены. Для поиска «окна» во время сессии воспользуйтесь официальным сайтом.</b>
				<p>Автор: <a href="mailto:andreygolubkow@gmail.com">Андрей Голубков, каф. КСУП, ТУСУР</a>
				</p>
				<p>Исходный код: <a href="https://github.com/andreygolubkow/RaspPl">GitHub</a>
				</p>
				<p>Источник расписания: <a href="https://timetable.tusur.ru">Расписание занятий ТУСУР</a></p>
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>

				<v-btn
					color="blue darken-1"
					flat="flat"
					@click="dialog.visible = false"
				>
					Закрыть
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
    export default {
    	name: 'HelpDialog',
	props: ['dialog']
    };
</script>

<style scoped>

</style>
