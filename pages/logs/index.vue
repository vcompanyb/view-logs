<template>
  <LogsList v-on:click-new-log="goToNewLog" />
</template>

<script>
export default {
  methods: {
    goToNewLog() {
      this.$router.push({
        path: '/logs/new',
      })
    },
  },
}
</script>
