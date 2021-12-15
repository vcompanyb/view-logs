<template>
  <tr>
    <td><VTextField label="Fecha" v-model="localLog.date"></VTextField></td>
    <td><VTextField label="Accion" v-model="localLog.action"></VTextField></td>
    <td><VTextField label="Usuario" v-model="localLog.user"></VTextField></td>
    <td>
      <MyButton v-show="shouldShowSaveButton" @click="save">SAVE</MyButton>
      <MyButton v-show="shouldShowSaveButton" @click="discard">
        DISCARD
      </MyButton>
      <MyButton @click="remove(localLog)">DELETE</MyButton>
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
