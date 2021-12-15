<template>
  <form v-on:submit.prevent="newLog">
    <p>
      <input type="text" placeholder="Fecha" v-model="date" />
    </p>
    <p>
      <input type="text" placeholder="Accion" v-model="action" />
    </p>
    <p>
      <input type="text" placeholder="Usuario" v-model="user" />
    </p>
    <button>Save</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      action: '',
      user: '',
    }
  },
  computed: {
    logs() {
      return this.$store.state.logs.list
    },
  },
  methods: {
    newLog() {
      let lastId = -1
      this.logs.forEach((log) => {
        if (log.id > lastId) {
          lastId = log.id
        }
      })
      const newLog = {
        id: lastId + 1,
        date: this.date,
        action: this.action,
        user: this.user,
      }
      this.$store.commit('logs/add', newLog)
      this.$router.push({ path: '/logs' })
    },
  },
}
</script>
