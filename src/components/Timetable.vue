<template>
  <div>
    <v-container>
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm6 md1>
          <v-card tile flat>
            <v-card-title primary-title>
              <h3>&nbsp;</h3>
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-divider></v-divider>
                <v-list-tile>08:50 10:25</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>10:40 12:15</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>13:15 14:50</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>15:00 16:35</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>16:45 18:20</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>18:30 20:05</v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>20:15 21:50</v-list-tile>
                <v-divider></v-divider>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md1 v-for="(day) in days">
          <v-card tile flat>
            <v-card-title primary-title>
              <h3>{{day.name}}</h3>
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-divider></v-divider>
                <v-list-tile>
                  <v-badge color="red" overlap>
                    <span slot="badge">!</span>
                    <v-icon
                      color="grey"
                    >
                      mail
                    </v-icon>
                  </v-badge>
                </v-list-tile>
                <v-divider></v-divider>
                <v-divider></v-divider>
                <v-list-tile>
                  <v-badge color="red" overlap>
                    <span slot="badge">!</span>
                    <v-icon
                      color="grey"
                    >
                      mail
                    </v-icon>
                  </v-badge>
                </v-list-tile>
                <v-divider></v-divider>
                <v-divider></v-divider>
                <v-list-tile>
                  <v-badge color="red" overlap>
                    <span slot="badge">!</span>
                    <v-icon
                      color="grey"
                    >
                      mail
                    </v-icon>
                  </v-badge>
                </v-list-tile>
                <v-divider></v-divider>
                <v-divider></v-divider>
                <v-list-tile>
                  <v-badge color="red" overlap>
                    <span slot="badge">!</span>
                    <v-icon
                      color="grey"
                    >
                      mail
                    </v-icon>
                  </v-badge>
                </v-list-tile>
                <v-divider></v-divider>
                <v-divider></v-divider>
                <v-list-tile>
                  <v-badge color="red" overlap>
                    <span slot="badge">!</span>
                    <v-icon
                      color="grey"
                    >
                      mail
                    </v-icon>
                  </v-badge>
                </v-list-tile>
                <v-divider></v-divider>
                <v-divider></v-divider>
                <v-list-tile>
                  <v-badge color="red" overlap>
                    <span slot="badge">!</span>
                    <v-icon
                      color="grey"
                    >
                      mail
                    </v-icon>
                  </v-badge>
                </v-list-tile>
                <v-divider></v-divider>
                <v-divider></v-divider>
                <v-list-tile>
                  <v-badge color="red" overlap>
                    <span slot="badge">!</span>
                    <v-icon
                      color="grey"
                    >
                      mail
                    </v-icon>
                  </v-badge>
                </v-list-tile>
                <v-divider></v-divider>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'app-timetable',
    props: ['selectedGroups'],
    data() {
      return {
        days: [
          {
            name: 'Пн',
          },
          {
            name: 'Вт',
          },
          {
            name: 'Ср',
          },
          {
            name: 'Чт',
          },
          {
            name: 'Пт',
          },
          {
            name: 'Сб',
          },
        ],
      };
    },
  };
</script>

<style scoped>

</style>
