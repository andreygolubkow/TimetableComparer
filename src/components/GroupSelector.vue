<template>
  <v-combobox
    v-model="selectedGroups"
    :items="groups"
    @change="groupListEdited()"
    hide-selected
    label="Группы"
    placeholder="Начните вводить номер группы"
    dense
    multiple
    small-chips
  >
    <template slot="no-data">
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>
            В списке пока нет такой группы.
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-combobox>
</template>

<script>
  export default {
    name: 'app-groupselector',
    data() {
      return {
        selectedGroups: [],
        groups: ['515-2', '515-1', '514'],
      };
    },
    methods: {
      groupListEdited() {
        const groups = this.groups;
        this.selectedGroups = this.selectedGroups.filter(item =>
          groups.indexOf(item) !== -1,
        );
      },
    },
  };
</script>

<style scoped>

</style>
