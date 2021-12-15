<template>
  <v-row>
    <v-col cols="12">
      <h1>Logs</h1>
      <div class="filters">
        <h2>Filters</h2>
        <VTextField label="Filter by..." v-model="filterBy"></VTextField>
      </div>
      <MyButton elevation="10" @click="newLog">New log</MyButton>
      <div class="logs">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Fecha</th>
                <th class="text-left">Accion</th>
                <th class="text-left">Usuario</th>
                <th class="text-left">Options</th>
              </tr>
            </thead>
            <tbody>
              <LogTr
                v-for="log in logsFilteredAndOrdered"
                :key="log.id"
                :log="log"
              />
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return { filterBy: '' }
  },
  computed: {
    logs() {
      return this.$store.state.logs.list
    },
    logsFiltered() {
      if (!this.filterBy) {
        return this.logs
      }

      return this.logs.filter((log) => {
        if (
          log.id.toString() === this.filterBy ||
          log.action.includes(this.filterBy) ||
          log.date.includes(this.filterBy) ||
          log.user.includes(this.filterBy)
        ) {
          return true
        } else {
          return false
        }
      })
    },
    logsFilteredAndOrdered() {
      const logsFiltered = JSON.parse(JSON.stringify(this.logsFiltered))
      return logsFiltered.sort((logLeft, logRight) => {
        if (logRight.isFixed) {
          return 1
        } else if (logLeft.isFixed) {
          return 1
        } else {
          return -1
        }
      })
    },
  },
  methods: {
    newLog() {
      this.$emit('click-new-log')
    },
  },
}
</script>
