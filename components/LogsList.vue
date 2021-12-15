<template>
  <div>
    <h1>Logs</h1>
    <div class="filters"></div>
    <button @click="newLog">New log</button>
    <div class="logs">
      <table>
        <tbody>
          <tr>
            <td>Fecha</td>
            <td>Accion</td>
            <td>Usuario</td>
            <td>Options</td>
          </tr>
          <LogTr v-for="log in logs" :key="log.id" :log="log" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    logs() {
      return this.$store.state.logs.list
    },
  },
  methods: {
    newLog() {
      this.$emit('click-new-log')
    },
  },
}
</script>
