<template>
  <tr>
    <td><input type="text" v-model="localLog.date" /></td>
    <td><input type="text" v-model="localLog.action" /></td>
    <td><input type="text" v-model="localLog.user" /></td>
    <td>
      <button v-show="shouldShowSaveButton" @click="save">SAVE</button>
      <button v-show="shouldShowSaveButton" @click="discard">DISCARD</button>
      <button @click="remove(localLog)">DELETE</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    log: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      localLog: JSON.parse(JSON.stringify(this.log)),
    }
  },
  methods: {
    remove(log) {
      this.$store.commit('logs/remove', log)
    },
    discard() {
      this.localLog = JSON.parse(JSON.stringify(this.log))
    },
    save() {
      this.$store.commit('logs/update', this.localLog)
    },
  },
  computed: {
    shouldShowSaveButton() {
      if (
        this.log.date !== this.localLog.date ||
        this.log.action !== this.localLog.action ||
        this.log.user !== this.localLog.user
      ) {
        return true
      } else {
        return false
      }
    },
  },
  watch: {
    log() {
      this.discard()
    },
  },
}
</script>
