<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<v-flex xs12>
		<v-autocomplete
			v-model="input"
			:items="groups"
			label="Группы"
			placeholder="Начните вводить номер группы"
			color="blue-grey lighten-2"
			item-text="name"
			item-value="name"
			dense
			v-on:input="enterGroup"
			auto-select-first
		>
			<template v-slot:item="data">
				<template v-if="typeof data.item !== 'object'">
					<v-list-tile-content v-text="data.item"></v-list-tile-content>
				</template>
				<template v-else>
					<v-list-tile-content>
						<v-list-tile-title v-html="data.item.name"></v-list-tile-title>
					</v-list-tile-content>
				</template>
			</template>
			<template v-slot:no-data>
				<v-list-tile-content>
					&nbsp;Мы не можем найти такую группу.
				</v-list-tile-content>
			</template>
		</v-autocomplete>
		<div class="text-xs-left">
			<v-chip v-for="chip in selected"
					close
					label
					@input="remove(chip)"
			>
				{{chip}}
			</v-chip>
		</div>
	</v-flex>

</template>

<script>
    export default {
    	name: 'app-groupselector',
    	data () {
    		return {
    			groups: [],
    			input: null,
    			selected: [],
    			menuProps: {
    				'closeOnClick': false,
    				'closeOnContentClick': false,
    				'openOnClick': false,
    				'maxHeight': 300
    			},
    			searchInput: ''
    		};
    	},
    	watch: {
    		selected () {
    			this.groupListEdited();
    		}
    	},
    	methods: {
    		groupListEdited () {
    			this.selectedGroups.selectedGroups = this.groups.filter(item =>
    				this.selected.indexOf(item.name) !== -1
    			);
    		},
    		enterGroup (group) {
    			if (this.selected.filter(s => s === group).length === 0 &&
                    this.groups.filter(g => g.name === group).length === 1) {
    				this.selected.push(group);
    				this.$metrika.reachGoal('selectGroup', {params: {
					group: group
				}});
    				this.$metrika.params({
    					params: {
    						groups: this.selected
    					}
    				});
    				group = '';
    			}
    			this.$nextTick(() => {
    				this.input = null;
    			});
    		},
    		endEdit (f) {
    			console.log(f);
    		},
    		remove (item) {
    			console.log('remove');
    			this.selected.splice(this.selected.indexOf(item), 1);
    			this.selected = [...this.selected];
    		}
    	},
    	mounted () {
    		this.$nextTick(() => {
    			this.$root.getTusurTimetable((timetable) => {
    				const fgList = timetable.faculties.map(f => f.groups);
    				this.groups = [].concat(...fgList);
    			});
    		});
    	},
    	props: ['selectedGroups']
    };
</script>

<style scoped>

</style>
