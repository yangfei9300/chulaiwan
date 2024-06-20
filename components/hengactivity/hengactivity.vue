<template>
  <div>
    <p>{{ text }}11111</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
	  default:"------"
    }
  }
}
</script>

<style scoped>
/* 组件样式 */
</style>