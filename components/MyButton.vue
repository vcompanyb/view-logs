<template>
  <VBtn v-bind="$attrs" @click="$emit('click', $event)"><slot></slot></VBtn>
</template>
<script>
export default {
  inheritAttrs: false,
}
</script>
